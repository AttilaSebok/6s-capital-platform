// lib/marketHours.ts

export type MarketStatus =
  | 'open'        // 9:30 AM - 4:00 PM ET
  | 'pre-market'  // 4:00 AM - 9:30 AM ET
  | 'after-hours' // 4:00 PM - 8:00 PM ET
  | 'closed';     // 8:00 PM - 4:00 AM ET + weekends

export interface MarketStatusInfo {
  status: MarketStatus;
  label: string;
  description: string;
  color: string;
  icon: string;
  timeUntilNext: string | null;
  nextEventTime: Date | null;
  nextEventLabel: string | null;
}

/**
 * Get current date/time in US Eastern Time
 */
function getEasternTime(): Date {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
}

/**
 * Check if current day is weekend
 */
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

/**
 * Format time difference to human-readable countdown
 */
function formatTimeUntil(targetTime: Date, currentTime: Date): string {
  const diff = targetTime.getTime() - currentTime.getTime();

  if (diff <= 0) return '0m';

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Get next market event time
 */
function getNextEventTime(currentET: Date): { time: Date; label: string } | null {
  const hours = currentET.getHours();
  const minutes = currentET.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Create times for today
  const today = new Date(currentET);
  const preMarketStart = new Date(today.setHours(4, 0, 0, 0));
  const marketOpen = new Date(today.setHours(9, 30, 0, 0));
  const marketClose = new Date(today.setHours(16, 0, 0, 0));
  const afterHoursClose = new Date(today.setHours(20, 0, 0, 0));

  // Weekend - next is Monday pre-market
  if (isWeekend(currentET)) {
    const daysUntilMonday = (8 - currentET.getDay()) % 7 || 7;
    const nextMonday = new Date(currentET);
    nextMonday.setDate(currentET.getDate() + daysUntilMonday);
    nextMonday.setHours(4, 0, 0, 0);
    return { time: nextMonday, label: 'Pre-market opens' };
  }

  // Before pre-market (00:00 - 04:00)
  if (currentMinutes < 4 * 60) {
    return { time: preMarketStart, label: 'Pre-market opens' };
  }

  // Pre-market (04:00 - 09:30)
  if (currentMinutes < 9 * 60 + 30) {
    return { time: marketOpen, label: 'Market opens' };
  }

  // Market hours (09:30 - 16:00)
  if (currentMinutes < 16 * 60) {
    return { time: marketClose, label: 'Market closes' };
  }

  // After hours (16:00 - 20:00)
  if (currentMinutes < 20 * 60) {
    return { time: afterHoursClose, label: 'After-hours closes' };
  }

  // After 20:00 - next is tomorrow's pre-market
  const tomorrow = new Date(currentET);
  tomorrow.setDate(currentET.getDate() + 1);
  tomorrow.setHours(4, 0, 0, 0);

  // If tomorrow is weekend, skip to Monday
  if (isWeekend(tomorrow)) {
    const daysUntilMonday = (8 - tomorrow.getDay()) % 7 || 7;
    tomorrow.setDate(tomorrow.getDate() + daysUntilMonday);
  }

  return { time: tomorrow, label: 'Pre-market opens' };
}

/**
 * Get current market status with detailed information
 */
export function getMarketStatus(): MarketStatusInfo {
  const currentET = getEasternTime();
  const hours = currentET.getHours();
  const minutes = currentET.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Weekend check
  if (isWeekend(currentET)) {
    const nextEvent = getNextEventTime(currentET);
    return {
      status: 'closed',
      label: 'Markets Closed',
      description: 'Weekend - Reopens Monday',
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      icon: '🔴',
      timeUntilNext: nextEvent ? formatTimeUntil(nextEvent.time, currentET) : null,
      nextEventTime: nextEvent?.time || null,
      nextEventLabel: nextEvent?.label || null,
    };
  }

  // Pre-market: 4:00 AM - 9:30 AM ET
  if (currentMinutes >= 4 * 60 && currentMinutes < 9 * 60 + 30) {
    const nextEvent = getNextEventTime(currentET);
    return {
      status: 'pre-market',
      label: 'Pre-Market',
      description: '4:00 AM - 9:30 AM ET',
      color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      icon: '🟡',
      timeUntilNext: nextEvent ? formatTimeUntil(nextEvent.time, currentET) : null,
      nextEventTime: nextEvent?.time || null,
      nextEventLabel: nextEvent?.label || null,
    };
  }

  // Market hours: 9:30 AM - 4:00 PM ET
  if (currentMinutes >= 9 * 60 + 30 && currentMinutes < 16 * 60) {
    const nextEvent = getNextEventTime(currentET);
    return {
      status: 'open',
      label: 'Markets Open',
      description: '9:30 AM - 4:00 PM ET',
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      icon: '🟢',
      timeUntilNext: nextEvent ? formatTimeUntil(nextEvent.time, currentET) : null,
      nextEventTime: nextEvent?.time || null,
      nextEventLabel: nextEvent?.label || null,
    };
  }

  // After hours: 4:00 PM - 8:00 PM ET
  if (currentMinutes >= 16 * 60 && currentMinutes < 20 * 60) {
    const nextEvent = getNextEventTime(currentET);
    return {
      status: 'after-hours',
      label: 'After Hours',
      description: '4:00 PM - 8:00 PM ET',
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      icon: '🟠',
      timeUntilNext: nextEvent ? formatTimeUntil(nextEvent.time, currentET) : null,
      nextEventTime: nextEvent?.time || null,
      nextEventLabel: nextEvent?.label || null,
    };
  }

  // Closed: 8:00 PM - 4:00 AM ET
  const nextEvent = getNextEventTime(currentET);
  return {
    status: 'closed',
    label: 'Markets Closed',
    description: '8:00 PM - 4:00 AM ET',
    color: 'bg-red-500/10 text-red-400 border-red-500/20',
    icon: '🔴',
    timeUntilNext: nextEvent ? formatTimeUntil(nextEvent.time, currentET) : null,
    nextEventTime: nextEvent?.time || null,
    nextEventLabel: nextEvent?.label || null,
  };
}

/**
 * Check if markets are currently open
 */
export function isMarketOpen(): boolean {
  return getMarketStatus().status === 'open';
}

/**
 * Check if pre-market is active
 */
export function isPreMarket(): boolean {
  return getMarketStatus().status === 'pre-market';
}

/**
 * Check if after-hours trading is active
 */
export function isAfterHours(): boolean {
  return getMarketStatus().status === 'after-hours';
}

/**
 * Check if markets are closed
 */
export function isMarketClosed(): boolean {
  return getMarketStatus().status === 'closed';
}
