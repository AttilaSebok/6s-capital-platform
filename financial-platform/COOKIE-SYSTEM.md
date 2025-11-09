# GDPR Cookie Consent System

## Áttekintés

Ez a dokumentáció a money365.market weboldalon implementált GDPR-kompatibilis cookie (süti) hozzájárulási rendszert mutatja be.

## Főbb jellemzők

### 1. GDPR Megfelelőség

- ✅ **Előzetes hozzájárulás**: A felhasználóknak explicit módon el kell fogadniuk a sütiket
- ✅ **Granulált kontroll**: 4 különböző süti kategória egyéni be/kikapcsolása
- ✅ **Visszavonható hozzájárulás**: Bármikor módosítható vagy visszavonható
- ✅ **Átláthatóság**: Részletes információk minden süti kategóriáról
- ✅ **Anonimizált IP címek**: Google Analytics IP anonimizálással
- ✅ **Consent Mode**: Google Analytics Consent Mode v2 integráció

### 2. Süti Kategóriák

#### Szükséges sütik (Necessary)
- **Mindig engedélyezve**: Nem kapcsolhatók ki
- **Cél**: Az oldal alapvető működéséhez szükségesek
- **Példák**:
  - Munkamenet azonosítók
  - Biztonsági sütik
  - Nyelvválasztás

#### Analitikai sütik (Analytics)
- **Opcionális**: A felhasználó választhat
- **Cél**: Látogatói statisztikák, oldal teljesítmény mérése
- **Példák**:
  - Google Analytics (_ga, _gid)
  - Látogatói viselkedés elemzése
  - Oldal használati statisztikák

#### Preferencia sütik (Preferences)
- **Opcionális**: A felhasználó választhat
- **Cél**: Felhasználói beállítások megjegyzése
- **Példák**:
  - Téma választás (világos/sötét mód)
  - Elrendezési preferenciák
  - Személyre szabott beállítások

#### Marketing sütik (Marketing)
- **Opcionális**: A felhasználó választhat
- **Cél**: Hirdetések megjelenítése és teljesítmény mérése
- **Példák**:
  - Hirdetési célzás
  - Remarketing kampányok
  - Közösségi média integráció

## Implementált komponensek

### 1. Cookie Management Library ([lib/cookies.ts](lib/cookies.ts))

```typescript
// Főbb funkciók:
getCookieConsent()           // Aktuális hozzájárulás lekérése
setCookieConsent(consent)    // Hozzájárulás mentése
hasConsent()                 // Ellenőrzi, hogy van-e hozzájárulás
isCategoryAllowed(category)  // Kategória engedélyezettségének ellenőrzése
acceptAllCookies()           // Összes süti elfogadása
acceptNecessaryCookies()     // Csak szükséges sütik elfogadása
revokeConsent()             // Hozzájárulás visszavonása
```

**Adattárolás**:
- `localStorage` használata
- Kulcs: `money365_cookie_consent`
- Érvényesség: 365 nap
- Verzió: 1.0

### 2. Cookie Banner ([components/CookieBanner.tsx](components/CookieBanner.tsx))

**Funkciók**:
- Első látogatáskor automatikus megjelenés
- Két nézet:
  - **Egyszerű nézet**: Gyors döntéshez (Mind elfogadom / Csak szükségesek / Beállítások)
  - **Részletes nézet**: Egyéni kategória beállítások
- Reszponzív design
- Dark mode támogatás
- Animált megjelenés

**Felhasználói műveletek**:
- Mind elfogadom - Minden süti kategória engedélyezése
- Csak a szükségesek - Csak kötelező sütik engedélyezése
- Beállítások - Részletes beállítások megnyitása
- Egyéni mentés - Kiválasztott kategóriák mentése

### 3. Cookie Settings Page ([app/cookie-settings/page.tsx](app/cookie-settings/page.tsx))

**Dedikált oldal** a süti beállítások kezeléséhez:
- Jelenlegi státusz megjelenítése
- Részletes kategória leírások
- Konkrét példák minden kategóriára
- Négy művelet:
  - Mentés - Aktuális beállítások mentése
  - Mind elfogadom - Összes engedélyezése
  - Csak szükségesek - Minimális beállítás
  - Visszavonás - Teljes hozzájárulás törlése

**Elérhetőség**:
- URL: `/cookie-settings`
- Footer link: "Süti beállítások"

### 4. GDPR-Compliant Google Analytics ([components/GoogleAnalytics.tsx](components/GoogleAnalytics.tsx))

**Módosítások**:
- Csak hozzájárulás után töltődik be a Google Analytics script
- Google Consent Mode v2 implementáció
- IP anonimizálás bekapcsolva
- Real-time consent változás kezelés
- Event listener cookie consent változásokhoz

**Consent Mode példa**:
```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied'
});

gtag('consent', 'update', {
  'analytics_storage': 'granted'  // Ha a felhasználó engedélyezi
});
```

## Integráció a layout-ba

A [app/layout.tsx](app/layout.tsx) fájlban:

```tsx
import CookieBanner from '@/components/CookieBanner'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics />
        <CookieBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

## Felhasználói folyamat

### Első látogatás
1. Felhasználó megnyitja az oldalt
2. Cookie banner automatikusan megjelenik
3. Felhasználó választhat:
   - Mind elfogadom → Minden tracking engedélyezve
   - Csak szükségesek → Minimális tracking
   - Beállítások → Egyéni választás

### Beállítások módosítása
1. Footer: "Süti beállítások" link
2. Dedikált oldal megnyitása
3. Kategóriák egyéni be/kikapcsolása
4. Mentés gombra kattintás

### Hozzájárulás visszavonása
1. Cookie Settings oldal megnyitása
2. "Visszavonás" gomb
3. Minden nem szükséges süti törlése
4. Analytics tracking leállítása

## Technikai részletek

### Adatstruktúra

```typescript
interface CookieConsent {
  necessary: boolean    // Mindig true
  analytics: boolean
  marketing: boolean
  preferences: boolean
  timestamp: number     // Mentés időpontja
  version: string       // Verzió szám (jelenleg "1.0")
}
```

### Event System

A rendszer egyedi eseményeket dob amikor a consent változik:

```typescript
window.addEventListener('cookieConsentChange', (event) => {
  const consent = event.detail  // CookieConsent | null
  // Reagálás a változásra
})
```

### Analytics Cookie Törlés

A `revokeConsent()` automatikusan törli a Google Analytics sütiket:
- `_ga`
- `_gid`
- `_gat`

## Best Practices

### 1. Süti Létrehozás Előtt
```typescript
import { isCategoryAllowed } from '@/lib/cookies'

if (isCategoryAllowed('analytics')) {
  // Analytics süti létrehozása biztonságos
  trackEvent('page_view')
}
```

### 2. Consent Változás Kezelése
```typescript
useEffect(() => {
  const handleConsentChange = (event) => {
    if (event.detail?.analytics) {
      // Analytics engedélyezve
      initializeTracking()
    } else {
      // Analytics letiltva
      stopTracking()
    }
  }

  window.addEventListener('cookieConsentChange', handleConsentChange)
  return () => window.removeEventListener('cookieConsentChange', handleConsentChange)
}, [])
```

### 3. Marketing Integráció
```typescript
import { isCategoryAllowed } from '@/lib/cookies'

// Facebook Pixel, Google Ads, stb.
if (isCategoryAllowed('marketing')) {
  // Marketing scriptek betöltése
  loadMarketingScripts()
}
```

## Privacy Policy Frissítések

A következő információkat kell tartalmaznia az adatvédelmi irányelveknek:

1. **Használt sütik listája**
   - Név, cél, érvényesség, kategória

2. **Harmadik fél szolgáltatások**
   - Google Analytics
   - További tracking eszközök

3. **Felhasználói jogok**
   - Hozzájárulás megadása
   - Hozzájárulás visszavonása
   - Beállítások módosítása

4. **Süti kategóriák részletezése**
   - Mit csinálnak
   - Miért szükségesek
   - Hogyan kapcsolhatók ki

5. **Kapcsolat**
   - Adatvédelmi tisztviselő elérhetősége
   - Kérdések és panaszok

## Tesztelés

### Tesztelendő esetek

1. ✅ Első látogatás → Banner megjelenik
2. ✅ "Mind elfogadom" → Minden süti engedélyezve
3. ✅ "Csak szükségesek" → Csak necessary engedélyezve
4. ✅ Egyéni beállítások → Kiválasztott kategóriák engedélyezve
5. ✅ Beállítások mentése → localStorage frissül
6. ✅ Oldal újratöltés → Beállítások megmaradnak
7. ✅ Visszavonás → Minden törlődik, banner újra megjelenik
8. ✅ Google Analytics → Csak consent után töltődik be
9. ✅ 365 nap után → Hozzájárulás lejár, banner újra megjelenik

### localStorage Ellenőrzés

Böngésző DevTools Console:
```javascript
// Aktuális consent ellenőrzése
JSON.parse(localStorage.getItem('money365_cookie_consent'))

// Consent törlése (teszteléshez)
localStorage.removeItem('money365_cookie_consent')
```

## Jövőbeli fejlesztések

- [ ] Cookie deklaráció oldal (részletes süti lista)
- [ ] Többnyelvű támogatás (angol, német, stb.)
- [ ] A/B tesztelés integráció
- [ ] Cookie scanner tool integráció
- [ ] Consent Management Platform (CMP) integráció
- [ ] IAB TCF v2.0 támogatás

## Jogi megfelelés

A rendszer megfelel a következő szabályozásoknak:

- ✅ **GDPR** (General Data Protection Regulation) - EU
- ✅ **ePrivacy Directive** - EU
- ✅ **Cookie Law** - EU országok
- ✅ **Google Consent Mode v2** - 2024 március

## Támogatás

Kérdések esetén:
- Dokumentáció: Ezt a fájlt
- Kód: Inline kommentek a forráskódban
- Issues: GitHub repository

## Licenc

Ez a cookie rendszer a money365.market projekt része.
