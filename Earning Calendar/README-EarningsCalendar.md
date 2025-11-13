# Earnings Calendar - Telepítési Útmutató

## 📋 Tartalomjegyzék
- [Áttekintés](#áttekintés)
- [Fájlstruktúra](#fájlstruktúra)
- [Telepítés](#telepítés)
- [API Kulcsok](#api-kulcsok)
- [Használat](#használat)
- [Funkciók](#funkciók)
- [Testreszabás](#testreszabás)

---

## 🎯 Áttekintés

Az Earnings Calendar egy professzionális megjelenésű komponens, amely lehetővé teszi a befektetők számára, hogy nyomon kövessék a vállalatok közelgő pénzügyi eredményeinek bejelentéseit.

### Főbb Jellemzők:
- 📅 Dátum alapú szűrés
- 🏢 Szektor szerinti szűrés
- 🔍 Szimbólum keresés
- 💰 Piaci kapitalizáció megjelenítés
- 📊 EPS becslések
- 🎨 Reszponzív, modern design
- ⚡ Valós idejű vagy mock adat támogatás

---

## 📁 Fájlstruktúra

Helyezd el a fájlokat a következő struktúrában a Next.js projektedben:

```
your-project/
├── app/
│   ├── analysis/
│   │   └── earnings-calendar/
│   │       └── page.tsx                    # --> page-earnings-calendar.tsx
│   └── api/
│       └── earnings-calendar/
│           └── route.ts                    # --> api-earnings-calendar-route.ts
├── components/
│   └── EarningsCalendar.tsx                # --> components-EarningsCalendar.tsx
├── types/
│   └── earnings.ts                         # --> types-earnings.ts
├── .env.local                              # --> env-example.txt (átnevezni)
└── README.md                               # Ez a fájl
```

---

## 🚀 Telepítés

### 1. Fájlok Másolása

Másold át a következő fájlokat a megfelelő helyekre:

```bash
# Típusok
types-earnings.ts → types/earnings.ts

# Komponens
components-EarningsCalendar.tsx → components/EarningsCalendar.tsx

# API Route
api-earnings-calendar-route.ts → app/api/earnings-calendar/route.ts

# Oldal
page-earnings-calendar.tsx → app/analysis/earnings-calendar/page.tsx

# Environment
env-example.txt → .env.local (átnevezni és kitölteni)
```

### 2. Függőségek Telepítése

A komponens a következő Lucide ikonokat használja:

```bash
npm install lucide-react
# vagy
yarn add lucide-react
# vagy
pnpm add lucide-react
```

### 3. TypeScript Konfiguráció

Győződj meg róla, hogy a `tsconfig.json`-ben be van állítva a path alias:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 🔑 API Kulcsok

### Finnhub API (Ajánlott)

A Finnhub jobb minőségű earnings adatokat szolgáltat.

1. Menj a https://finnhub.io/register
2. Regisztrálj egy ingyenes fiókot
3. Másold ki az API kulcsot
4. Add hozzá a `.env.local` fájlhoz:

```env
FINNHUB_API_KEY=your_actual_api_key_here
```

**Ingyenes limit:** 60 API hívás/perc

### Alpha Vantage API (Opcionális)

Alternatív vagy backup megoldás.

1. Menj a https://www.alphavantage.co/support/#api-key
2. Kérj egy ingyenes API kulcsot
3. Add hozzá a `.env.local` fájlhoz:

```env
ALPHA_VANTAGE_API_KEY=your_actual_api_key_here
```

**Ingyenes limit:** 25 API hívás/nap

### Mock Adat Mód

Ha **nincs** API kulcs beállítva, a komponens automatikusan mock (teszt) adatokat fog használni. Ez tökéletes fejlesztéshez és teszteléshez.

---

## 📖 Használat

### Alapvető Használat

Az oldal automatikusan elérhető lesz a következő URL-en:

```
http://localhost:3000/analysis/earnings-calendar
```

### Navigáció Hozzáadása

Add hozzá a linket a menürendszeredhez:

```tsx
// components/Navigation.tsx vagy Header.tsx

<Link href="/analysis/earnings-calendar">
  Earnings Calendar
</Link>
```

### Beágyazás Más Oldalba

Ha más oldalba szeretnéd beágyazni a komponenst:

```tsx
import EarningsCalendar from '@/components/EarningsCalendar';

export default function MyPage() {
  return (
    <div>
      <h1>Pénzügyi Elemzés</h1>
      <EarningsCalendar />
    </div>
  );
}
```

---

## ✨ Funkciók

### 1. Dátum Szűrés
- Kezdő és befejező dátum megadása
- Alapértelmezett: Ma + 30 nap

### 2. Szektor Szűrés
- Technology
- Financial Services
- Healthcare
- Consumer Cyclical
- Consumer Defensive
- Energy
- És még több...

### 3. Keresés
- Szimbólum alapú keresés (pl. AAPL, MSFT)
- Valós idejű szűrés

### 4. Információk
- Vállalat neve
- Szimbólum
- Jelentés dátuma
- EPS becslés
- Piaci kapitalizáció
- Szektor
- Jelentési időpont (Before Open / After Close)

### 5. Rendezés
- Automatikus dátum szerinti csoportosítás
- Kronológiai sorrend

---

## 🎨 Testreszabás

### Színek Módosítása

A komponens Tailwind CSS-t használ. A színeket könnyen megváltoztathatod:

```tsx
// Főcím színe
className="bg-gradient-to-r from-blue-600 to-purple-600"
// Változtasd pl. zöldre:
className="bg-gradient-to-r from-green-600 to-teal-600"
```

### Ikonok Cseréje

```tsx
import { Calendar, Search, TrendingUp } from 'lucide-react';
// Cseréld le más Lucide ikonokra:
import { BarChart, Filter, LineChart } from 'lucide-react';
```

### Több Earnings Esemény Megjelenítése

Módosítsd a mock adatok számát az API route-ban:

```typescript
// api-earnings-calendar-route.ts
const companies = [
  // Add hozzá több vállalatot...
];
```

### Plusz Információk Hozzáadása

Adj hozzá új oszlopokat a táblázathoz:

```tsx
<th>Revenue Estimate</th>
<td>{event.revenueEstimate}</td>
```

---

## 🔧 Hibaelhárítás

### "Module not found" hiba

Ellenőrizd a path aliasokat:
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### API nem működik

1. Ellenőrizd a `.env.local` fájlt
2. Indítsd újra a development szervert: `npm run dev`
3. Nézd meg a konzolt hibák után

### Styling nem jelenik meg

Győződj meg róla, hogy a Tailwind CSS be van konfigurálva:
```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
```

---

## 📊 Következő Lépések

### Ajánlott Fejlesztések:

1. **Exportálás Excel-be**
   - CSV vagy Excel export funkció
   
2. **Email Értesítések**
   - Értesítés előre kiválasztott vállalatok jelentéseiről

3. **Kedvencek**
   - Kedvenc vállalatok követése

4. **Múltbeli Adatok**
   - Archivált earnings eredmények

5. **Earnings Surprise**
   - Tényleges vs becsült eredmények összehasonlítása

6. **Integrációk**
   - Trading View charts beágyazása
   - Kapcsolat a Stock Screenerrel

---

## 📞 Támogatás

Ha kérdésed van vagy problémába ütközöl, ellenőrizd:
- Next.js dokumentáció: https://nextjs.org/docs
- Finnhub API dokumentáció: https://finnhub.io/docs/api
- Tailwind CSS dokumentáció: https://tailwindcss.com/docs

---

## 📝 Licenc

Ez a komponens része a Money365.Market projektnek.

---

## 🎉 Kész!

Most már használhatod az Earnings Calendar funkciót! 🚀

A komponens automatikusan:
- ✅ Kezeli a betöltési állapotokat
- ✅ Megjeleníti a hibákat
- ✅ Reszponzív minden eszközön
- ✅ Optimalizált teljesítményre
- ✅ SEO-barát

**Sok sikert a projekted fejlesztéséhez!** 💪
