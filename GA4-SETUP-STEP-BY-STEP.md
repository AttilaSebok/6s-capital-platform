# Google Analytics 4 - Részletes Lépésről-Lépésre Útmutató

## 🎯 Cél: GA4 Property létrehozása és Measurement ID beszerzése

**Becsült időtartam**: 15-20 perc
**Szükséges**: Google fiók (Gmail)

---

## 1. LÉPÉS: Google Analytics Megnyitása

### 1.1 Menj a Google Analytics oldalra
🔗 **URL**: https://analytics.google.com/

### 1.2 Jelentkezz be
- Használd a Google fiókodat (Gmail)
- Ha nincs Google fiókod, előbb hozz létre egyet

### 1.3 Mit látsz?
- **Ha új vagy**: "Start measuring" gombot fogsz látni
- **Ha már van account-od**: A bal oldali menüben látod a meglévő property-ket

---

## 2. LÉPÉS: Account Létrehozása (Ha nincs még)

### 2.1 Kattints a "Start measuring" gombra

### 2.2 Account Name Screen
```
┌─────────────────────────────────────────────┐
│  Account name                                │
│  ┌─────────────────────────────────────┐   │
│  │ money365.market                      │   │ ← ÍRD BE EZT
│  └─────────────────────────────────────┘   │
│                                              │
│  Account data sharing settings              │
│  ☑ Benchmarking                             │ ← HAGYD BEPIPÁLVA (Opcionális)
│  ☑ Technical support                        │ ← HAGYD BEPIPÁLVA (Ajánlott)
│  ☑ Account specialists                      │ ← HAGYD BEPIPÁLVA (Ajánlott)
│  ☐ Google products & services               │ ← NEM KÖTELEZŐ
│                                              │
│               [Next]                         │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit írj be**:
- **Account name**: `money365.market` vagy `6s Capital`
- **Data sharing**: Hagyd bepipálva az ajánlott opciókat

### 2.3 Kattints a "Next" gombra

---

## 3. LÉPÉS: Property Létrehozása

### 3.1 Property Setup Screen

```
┌─────────────────────────────────────────────┐
│  Property name                               │
│  ┌─────────────────────────────────────┐   │
│  │ money365.market                      │   │ ← ÍRD BE EZT
│  └─────────────────────────────────────┘   │
│                                              │
│  Reporting time zone                         │
│  ┌─────────────────────────────────────┐   │
│  │ (GMT+01:00) Central European Time   │   │ ← VÁLASZD KI
│  └─────────────────────────────────────┘   │
│                                              │
│  Currency                                    │
│  ┌─────────────────────────────────────┐   │
│  │ United States Dollar (USD)          │   │ ← VAGY EUR
│  └─────────────────────────────────────┘   │
│                                              │
│  ☑ Enable advanced measurement              │ ← HAGYD BEPIPÁLVA
│                                              │
│               [Next]                         │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit tölts ki**:
- **Property name**: `money365.market`
- **Reporting time zone**: `(GMT+01:00) Central European Time - Budapest`
- **Currency**: `United States Dollar (USD)` vagy `Euro (EUR)`
- **Advanced measurement**: ✅ Hagyd bekapcsolva!

### 3.2 Kattints a "Next" gombra

---

## 4. LÉPÉS: Business Details

### 4.1 Business Information Screen

```
┌─────────────────────────────────────────────┐
│  Industry category                           │
│  ┌─────────────────────────────────────┐   │
│  │ Finance                              │   │ ← VÁLASZD EZT
│  └─────────────────────────────────────┘   │
│                                              │
│  Business size                               │
│  ⚪ Small (1-10 employees)                   │ ← JELÖLD BE
│  ⚪ Medium (11-100 employees)                │
│  ⚪ Large (100+ employees)                   │
│                                              │
│               [Next]                         │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit válassz**:
- **Industry category**: `Finance` vagy `News & Media`
- **Business size**: `Small (1-10 employees)`

### 4.2 Business Objectives Screen

```
┌─────────────────────────────────────────────┐
│  What do you want to measure?                │
│                                              │
│  ☑ Examine user behavior                    │ ← PIPÁLD BE
│  ☑ Measure advertising ROI                  │ ← PIPÁLD BE (ha lesz hirdetés)
│  ☐ Baseline reports                          │
│  ☐ Generate leads                            │ ← PIPÁLD BE (newsletter)
│                                              │
│               [Create]                       │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit pipálj be**:
- ✅ **Examine user behavior** - Fontos!
- ✅ **Measure advertising ROI** - Ha később lesz Google Ads
- ✅ **Generate leads** - Newsletter signup tracking

### 4.3 Kattints a "Create" gombra

---

## 5. LÉPÉS: Terms of Service (Felhasználási Feltételek)

### 5.1 Accept Terms Screen

```
┌─────────────────────────────────────────────┐
│  Google Analytics Terms of Service          │
│                                              │
│  Please read and accept the terms...        │
│                                              │
│  Country: ┌───────────────────────┐         │
│           │ Hungary               │         │ ← VÁLASZD KI
│           └───────────────────────┘         │
│                                              │
│  ☑ I accept the Terms of Service            │ ← PIPÁLD BE
│  ☑ I accept the Data Processing Amendment   │ ← PIPÁLD BE
│                                              │
│  Email communications:                       │
│  ☐ Updates and offers (optional)            │ ← OPCIONÁLIS
│                                              │
│               [I Accept]                     │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit csinálj**:
1. **Country**: Válaszd ki `Hungary` vagy `United States`
2. **Pipáld be**: "I accept the Terms of Service"
3. **Pipáld be**: "I accept the Data Processing Amendment"
4. **Kattints**: "I Accept"

---

## 6. LÉPÉS: Data Stream Létrehozása (EZ A LEGFONTOSABB!)

### 6.1 Choose Platform Screen

```
┌─────────────────────────────────────────────┐
│  Choose a platform to get started           │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   📱     │  │   🌐     │  │   📱     │  │
│  │   iOS    │  │   Web    │  │ Android  │  │
│  │          │  │          │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                     ↑                        │
│                     │                        │
│                 KATTINTS IDE                 │
└─────────────────────────────────────────────┘
```

**FONTOS**: Kattints a **"Web"** platformra (🌐 ikon)

---

### 6.2 Set Up Web Stream Screen

```
┌─────────────────────────────────────────────┐
│  Set up a web stream                         │
│                                              │
│  Website URL                                 │
│  ┌─────────────────────────────────────┐   │
│  │ https://money365.market              │   │ ← ÍRD BE
│  └─────────────────────────────────────┘   │
│                                              │
│  Stream name                                 │
│  ┌─────────────────────────────────────┐   │
│  │ money365.market - Production        │   │ ← ÍRD BE
│  └─────────────────────────────────────┘   │
│                                              │
│  Enhanced measurement                        │
│  ☑ Automatically collect common events      │ ← HAGYD BEPIPÁLVA
│                                              │
│            [Create stream]                   │ ← KATTINTS IDE
└─────────────────────────────────────────────┘
```

**Mit tölts ki**:
- **Website URL**: `https://money365.market` (HTTPS KÖTELEZŐ!)
- **Stream name**: `money365.market - Production`
- **Enhanced measurement**: ✅ Hagyd bekapcsolva!

### 6.3 Kattints a "Create stream" gombra

---

## 7. LÉPÉS: Measurement ID Másolása (ITT A KULCS! 🔑)

### 7.1 Web Stream Details Screen - EZ JELENIK MEG

```
┌─────────────────────────────────────────────────────────┐
│  Web stream details                                      │
│                                                          │
│  Stream name: money365.market - Production              │
│  Stream URL: https://money365.market                    │
│  Stream ID: 1234567890                                   │
│                                                          │
│  ╔═══════════════════════════════════════════════════╗  │
│  ║  MEASUREMENT ID                                   ║  │
│  ║  ┌────────────────────────┐  [Copy]              ║  │
│  ║  │  G-K4B9T2XYZ1         │  ← EZ AZ!             ║  │ ← MÁSOLD KI!
│  ║  └────────────────────────┘                       ║  │
│  ╚═══════════════════════════════════════════════════╝  │
│                                                          │
│  Tagging instructions                                    │
│  • Install Google tag                                    │
│  • Configure your domains                                │
│  • Enhanced measurement settings                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 7.2 FONTOS: Másold ki a Measurement ID-t!

**Formátum**: `G-XXXXXXXXXX` (ahol X = betűk és számok)

**Példa**: `G-K4B9T2XYZ1` vagy `G-9PQR3ST4UV5`

### 7.3 Hogyan másold ki?

**1. Módszer** (Ajánlott):
- Kattints a **"Copy"** gombra a Measurement ID mellett
- A vágólapra másolódik

**2. Módszer**:
- Jelöld ki az egész ID-t (`G-XXXXXXXXXX`)
- Jobb klikk → "Copy" vagy `Ctrl+C`

### 7.4 Tárold el biztonságos helyen!
- Írd be egy Notepad-be vagy TextEdit-be
- Szükséged lesz rá a következő lépésben

---

## 8. LÉPÉS: Measurement ID Hozzáadása a Projekthez

Most hogy megvan a Measurement ID (pl. `G-K4B9T2XYZ1`), add hozzá az environment változókhoz.

### 8.1 Local Development (.env.local fájl)

**8.1.1 Nyisd meg a projektet VS Code-ban vagy notepad-dal**

```bash
D:\___________________________________Cursor\6s Capital\financial-platform\.env.local
```

**8.1.2 Add hozzá ezt a sort:**

```env
# Resend API Key for Contact Form
RESEND_API_KEY=re_LT7szqT4_J7bXEMBX5S26eTegiRdkqbnv

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-K4B9T2XYZ1
```

**FONTOS**:
- Cseréld le `G-K4B9T2XYZ1`-et a **saját Measurement ID-dre**!
- Ne tegyél szóközt az `=` jel elé vagy mögé!
- Ne használj idézőjeleket!

**8.1.3 Mentsd el a fájlt** (`Ctrl+S`)

**8.1.4 Indítsd újra a development szervert**

```bash
# Ha fut a szerver, állítsd le (Ctrl+C)
# Aztán indítsd újra:
cd financial-platform
npm run dev
```

---

### 8.2 Production (Vercel Dashboard)

**8.2.1 Menj a Vercel Dashboard-ra**

🔗 **URL**: https://vercel.com/dashboard

**8.2.2 Válaszd ki a projektedet**
- Kattints a `6s-capital-platform` vagy `money365-market` projektre

**8.2.3 Menj a Settings-be**
```
Vercel Dashboard
├── Overview
├── Deployments
├── Analytics
├── Settings  ← KATTINTS IDE
    ├── General
    ├── Domains
    ├── Environment Variables  ← AZTÁN IDE
    ├── Functions
    └── Git
```

**8.2.4 Add New Variable Screen**

```
┌─────────────────────────────────────────────────────┐
│  Environment Variables                               │
│                                                      │
│  Name                                                │
│  ┌──────────────────────────────────────────┐      │
│  │ NEXT_PUBLIC_GA_MEASUREMENT_ID            │      │ ← ÍRD BE
│  └──────────────────────────────────────────┘      │
│                                                      │
│  Value                                               │
│  ┌──────────────────────────────────────────┐      │
│  │ G-K4B9T2XYZ1                             │      │ ← IDE A SAJÁTOD
│  └──────────────────────────────────────────┘      │
│                                                      │
│  Environments                                        │
│  ☑ Production                                       │ ← PIPÁLD BE
│  ☑ Preview                                          │ ← PIPÁLD BE
│  ☑ Development                                      │ ← PIPÁLD BE
│                                                      │
│              [Save]                                  │ ← KATTINTS IDE
└─────────────────────────────────────────────────────┘
```

**Mit tölts ki**:
1. **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. **Value**: A Measurement ID-d (pl. `G-K4B9T2XYZ1`)
3. **Environments**: Pipáld be mind a hármat!
4. Kattints **"Save"**

**8.2.5 Redeploy a Site-ot**

Miután elmentetted az environment változót:
```
┌─────────────────────────────────────────────┐
│  Variable saved successfully!                │
│                                              │
│  To apply changes, you need to redeploy     │
│  your project.                               │
│                                              │
│         [Redeploy] [View Deployments]       │ ← KATTINTS "Redeploy"
└─────────────────────────────────────────────┘
```

VAGY menj a **Deployments** tab-ra:
```
Latest Deployment
├── [•••] Three dots menu
    └── Redeploy  ← KATTINTS IDE
```

---

## 9. LÉPÉS: Tracking Tesztelése

### 9.1 Local Testing (http://localhost:3000)

**9.1.1 Nyisd meg a böngészőt**
- Indítsd el: http://localhost:3000

**9.1.2 Nyisd meg a DevTools-t**
- **Chrome**: `F12` vagy `Ctrl+Shift+I`
- **Firefox**: `F12`
- **Safari**: `Cmd+Option+I`

**9.1.3 Console Tab**
```
Console
│
│ [i] Google Analytics initialized
│ [→] gtag config G-K4B9T2XYZ1
│
│ (Nincs hiba = MŰKÖDIK!) ✅
```

**NEM JELEN KELLENE LENNIE**:
```
❌ gtag is not defined
❌ GA_MEASUREMENT_ID is undefined
```

**9.1.4 Network Tab**

Szűrés: Írj be `google-analytics` vagy `gtag`

```
Network
├── gtag/js?id=G-K4B9T2XYZ1  [Status: 200] ✅
├── collect?v=2&tid=G-...    [Status: 200] ✅
└── g/collect?...             [Status: 204] ✅
```

Ha látod ezeket a requesteket **Status 200/204**-gyel → **MŰKÖDIK!** ✅

---

### 9.2 Production Testing (https://money365.market)

**9.2.1 Látogasd meg a live site-ot**
🔗 https://money365.market

**9.2.2 Nyisd meg DevTools-t** (`F12`)

**9.2.3 Ellenőrizd ugyanúgy a Console és Network tab-ot**

---

### 9.3 Google Analytics Realtime Report

**EZ A LEGJOBB TESZT!**

**9.3.1 Menj vissza a Google Analytics-re**
https://analytics.google.com/

**9.3.2 Navigálj a Realtime Report-hoz**

```
Google Analytics Dashboard
├── Home
├── Reports
│   ├── Realtime  ← KATTINTS IDE
│   ├── Life cycle
│   └── User
└── Explore
```

**9.3.3 Mit fogsz látni?**

```
┌───────────────────────────────────────────┐
│  Realtime                                  │
│                                            │
│  Users in last 30 minutes                  │
│                                            │
│         ╭────╮                             │
│         │ 1  │  ← AKTÍV FELHASZNÁLÓK      │
│         ╰────╯                             │
│                                            │
│  Views per minute                          │
│  █                                         │
│  █ █                                       │
│  █ █ █                                     │
│                                            │
│  Top pages                                 │
│  1. /                   (1 views)          │
│  2. /articles          (0 views)           │
│                                            │
└───────────────────────────────────────────┘
```

**Ha látod a "1" vagy több aktív felhasználót** → **MŰKÖDIK!** 🎉

---

## 10. LÉPÉS: Enhanced Measurement Beállítása (Opcionális de Ajánlott)

### 10.1 Menj az Admin Sectionbe

```
Google Analytics
├── Reports
├── Explore
├── Advertising
└── Admin  ← KATTINTS IDE (bal alsó sarok, fogaskerék ikon)
```

### 10.2 Data Streams

```
Admin
├── Account settings
│   └── ...
└── Property settings
    ├── Property details
    ├── Data Streams  ← KATTINTS IDE
    └── ...
```

### 10.3 Kattints a Web Stream-re

```
Data Streams
├── Web
│   └── money365.market - Production  ← KATTINTS IDE
└── ...
```

### 10.4 Enhanced Measurement Settings

```
┌─────────────────────────────────────────────┐
│  Enhanced measurement                        │
│  ┌─────────────────────┐                    │
│  │ ⚙️ [On/Off Toggle] │ ← KAPCSOLD BE       │
│  └─────────────────────┘                    │
│                                              │
│  ☑ Page views                               │ ← HAGYD BE
│  ☑ Scrolls (90% depth)                      │ ← HAGYD BE
│  ☑ Outbound clicks                          │ ← FONTOS (affiliate)
│  ☑ Site search                              │ ← HA VAN KERESÉS
│  ☑ Video engagement                         │ ← HA LESZ VIDEÓ
│  ☑ File downloads (.pdf, .xlsx, etc.)      │ ← FONTOS (lead magnet)
│                                              │
│               [Save]                         │
└─────────────────────────────────────────────┘
```

**Mit pipálj be**:
- ✅ **Page views** - Alap (már működik)
- ✅ **Scrolls** - User engagement tracking
- ✅ **Outbound clicks** - Affiliate link tracking
- ✅ **File downloads** - PDF lead magnet tracking

---

## 11. LÉPÉS: Conversion Events Beállítása

### 11.1 Mikor csináld?

**VÁRJ 24-48 ÓRÁT** az első tracking aktiválás után!
- Az eventi-eknek meg kell jelenniük előbb
- Nem tudod "conversion"-ként megjelölni, ha még nem történt

### 11.2 Menj az Events Section-be

```
Admin → Property → Events
```

### 11.3 Jelöld meg ezeket Conversion-ként

```
Events List
├── page_view              [Mark as conversion] ← NE
├── session_start          [Mark as conversion] ← NE
├── first_visit            [Mark as conversion] ← NE
├── newsletter_signup      [Mark as conversion] ← IGEN! ✅
├── article_read           [Mark as conversion] ← IGEN! ✅
├── lead_magnet_download   [Mark as conversion] ← IGEN! ✅
├── tool_usage             [Mark as conversion] ← OPCIONÁLIS
└── affiliate_click        [Mark as conversion] ← IGEN! ✅
```

---

## ✅ TELJES CHECKLIST

Pipáld be, ahogy haladsz:

### Setup Phase
- [ ] Google Analytics account létrehozva
- [ ] Property létrehozva (`money365.market`)
- [ ] Web data stream létrehozva
- [ ] Measurement ID kimásolva (formátum: `G-XXXXXXXXXX`)

### Environment Variables
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` hozzáadva `.env.local`-hoz
- [ ] Development szerver újraindítva
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` hozzáadva Vercel-hez
- [ ] Site redeploy-olva Vercel-en

### Testing
- [ ] Local: DevTools Console - nincs hiba
- [ ] Local: DevTools Network - látszanak a gtag requestek
- [ ] Production: DevTools Console - nincs hiba
- [ ] Production: DevTools Network - látszanak a gtag requestek
- [ ] GA4 Realtime Report - látszanak az aktív userek (1+)

### Configuration (Opcionális de Ajánlott)
- [ ] Enhanced measurement bekapcsolva
- [ ] Outbound clicks enabled (affiliate tracking)
- [ ] File downloads enabled (PDF tracking)
- [ ] Scrolls enabled (engagement tracking)

### Later (24-48 óra után)
- [ ] Conversion events megjelölve (`newsletter_signup`, stb.)
- [ ] Google Search Console linkelve (SEO insights)

---

## 🚨 Gyakori Hibák és Megoldások

### Hiba 1: "gtag is not defined"

**OK**: Environment változó nincs beállítva vagy rossz formátum

**Megoldás**:
1. Ellenőrizd: `.env.local` fájl tartalmazza-e `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...`
2. Formátum ellenőrzés: **NEXT_PUBLIC_** prefix kötelező!
3. Nincs szóköz az `=` előtt/után
4. Nincs idézőjel (`"` vagy `'`)
5. Indítsd újra a dev szervert (`npm run dev`)

---

### Hiba 2: Realtime Report-ban nincs adat

**Checklist**:
1. ✅ Measurement ID helyes? (kezdődik `G-`-vel)
2. ✅ Development szerver újraindítva?
3. ✅ Browser cache törölve? (`Ctrl+Shift+R`)
4. ✅ Ad blocker kikapcsolva? (uBlock Origin, AdBlock, etc.)
5. ✅ Inkognito/Private ablakban próbáld (tiszta session)
6. ✅ **VÁRJ 1-2 PERCET** - néha késik

---

### Hiba 3: "Failed to load gtag" vagy CORS error

**OK**: Network vagy böngésző blokkolja

**Megoldás**:
1. **Privacy extensions kikapcsolása**: uBlock Origin, Privacy Badger, Ghostery
2. **Brave browser**: Állítsd "Shields Down"-ra az oldalra
3. **Firefox Enhanced Tracking Protection**: Kapcsold ki az oldalra
4. **Corporate VPN/Firewall**: Próbáld mobil internet-ről

---

## 📞 Támogatás

Ha elakadtál vagy kérdésed van:
- 📧 Email: office@money365.market
- 📚 Google Analytics Help: https://support.google.com/analytics
- 💬 GA4 Community: https://support.google.com/analytics/community

---

## 🎉 GRATULÁLOK!

Ha idáig eljutottál és minden ✅ pipát kaptál, akkor **MŰKÖDIK A GOOGLE ANALYTICS 4!**

Most már látod:
- ✅ Realtime users
- ✅ Page views
- ✅ Traffic sources
- ✅ User demographics
- ✅ Custom events (newsletter signup, article reads, etc.)

**Következő lépés**: Várj 24-48 órát, hogy összegyűjjön némi adat, aztán elemezd a Reports section-ben!

---

**Utolsó frissítés**: 2025-11-06
**Készítette**: Claude Code + Attila Sebok
