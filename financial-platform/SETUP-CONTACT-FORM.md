# Contact Form Setup Guide

Az éles üzenetküldő rendszer beállítási útmutatója.

## Áttekintés

A contact form automatikusan:
1. **Értesítő email-t küld** az `office@money365.market` címre a beküldött űrlappal
2. **Automatikus visszaigazolást küld** a feladónak (auto-reply)

## Lépések

### 1. Resend Fiók Létrehozása

1. Látogasd meg: https://resend.com
2. Hozz létre egy fiókot (ingyenes terv: 3,000 email/hó)
3. Erősítsd meg az email címed

### 2. Domain Hozzáadása és Ellenőrzése

1. Jelentkezz be a Resend dashboard-ba
2. Menj a **Settings → Domains** menübe
3. Kattints az **Add Domain** gombra
4. Add meg a domaint: `money365.market`
5. Kövesd a DNS beállítási lépéseket:

   **DNS Rekordok hozzáadása** (példa):
   
   ```
   Típus: TXT
   Név: @
   Érték: resend-verification=xyz123...
   TTL: 3600
   
   Típus: CNAME  
   Név: resend._domainkey
   Érték: resend._domainkey.resend.com
   TTL: 3600
   
   Típus: MX
   Név: @
   Érték: feedback-smtp.resend.com
   Prioritás: 10
   TTL: 3600
   ```

6. Várj néhány percet az ellenőrzésre (DNS propagáció)
7. Ellenőrizd a domain státuszát - legyen **Verified** ✓

### 3. API Key Létrehozása

1. A Resend dashboard-ban menj az **API Keys** menübe
2. Kattints a **Create API Key** gombra
3. Név: `Production Contact Form` (vagy amit szeretnél)
4. Másold ki az API key-t (pl. `re_abcd1234...`)
   
   ⚠️ **Fontos**: Az API key csak egyszer jelenik meg! Mentsd el azonnal.

### 4. Environment Variable Beállítása

#### Lokális Fejlesztés (.env.local)

Hozd létre a `.env.local` fájlt a projekt gyökerében:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### Vercel Deployment

1. Menj a Vercel projekt beállításokba
2. **Settings → Environment Variables**
3. Add hozzá:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_actual_api_key_here`
   - **Environments**: Production, Preview, Development (mind)
4. Kattints **Save**
5. Újra deploy-old a projektet (Deployments → Redeploy)

### 5. Tesztelés

#### Lokális Tesztelés

1. Indítsd el a dev szervert:
   ```bash
   npm run dev
   ```

2. Menj a http://localhost:3000/contact oldalra

3. Töltsd ki az űrlapot és küldd el

4. Ellenőrizd mindkét email-t:
   - **Értesítés**: office@money365.market (form submission info)
   - **Auto-reply**: a feladó email címén (visszaigazolás)

#### Production Tesztelés

1. Deploy után menj a https://money365.market/contact oldalra
2. Küldj el egy teszt üzenetet
3. Ellenőrizd mindkét email-t

### 6. Email Sablonok Testreszabása

Ha módosítani szeretnéd az email tartalmát:

#### Értesítő Email (office@money365.market)

Fájl: `app/api/contact/route.ts` (sor ~40-90)

```typescript
const notificationEmail = await resend.emails.send({
  from: 'money365.market <noreply@money365.market>',
  to: 'office@money365.market',
  subject: `New Contact Form Submission: ${subjectLabel}`,
  html: `...` // HTML sablon itt
})
```

#### Automatikus Visszaigazoló Email (user)

Fájl: `app/api/contact/route.ts` (sor ~95-200)

```typescript
const autoReplyEmail = await resend.emails.send({
  from: 'money365.market <office@money365.market>',
  to: email,
  subject: 'We received your message - money365.market',
  html: `...` // HTML sablon itt
})
```

## Hibaelhárítás

### "Failed to send email" hiba

**Probléma**: API kulcs hiányzik vagy érvénytelen

**Megoldás**:
1. Ellenőrizd hogy a `.env.local` fájl tartalmazza a `RESEND_API_KEY`-t
2. Ellenőrizd hogy az API key helyes (kezdődik `re_`-vel)
3. Indítsd újra a dev szervert
4. Vercel-en ellenőrizd az Environment Variables-t

### Domain nem ellenőrzött

**Probléma**: Resend nem tudja elküldeni az email-t mert a domain nincs verifikálva

**Megoldás**:
1. Menj a Resend → Domains menübe
2. Ellenőrizd a DNS rekordokat
3. Várj 10-60 percet a DNS propagációra
4. Kattints a **Verify** gombra újra

### Email nem érkezik meg

**Probléma**: Az email elküldve, de nem látható

**Megoldás**:
1. Ellenőrizd a spam mappát
2. Resend dashboard → Logs menüben nézd meg a státuszt
3. Ellenőrizd hogy a "from" cím verified domain-hez tartozik

### API Rate Limit

**Probléma**: Túl sok email küldés

**Megoldás**:
- Ingyenes terv: 3,000 email/hó, 100 email/nap
- Ha ezt túllépte, upgrade-elj a Resend fiókodban

## Email Díjszabás

### Free Tier (Ingyenes)
- **3,000 emails/hónap**
- **100 emails/nap**
- Email API hozzáférés
- Domain verification
- Webhooks

### Pro Tier ($20/hó)
- **50,000 emails/hónap**
- **2,000 emails/nap**  
- Advanced analytics
- Priority support

## Biztonság

⚠️ **SOHA ne commit-old az API key-t Git-be!**

```bash
# Ellenőrizd hogy a .env.local szerepel a .gitignore-ban
cat .gitignore | grep .env.local
```

Ha véletlenül commit-oltad:
1. Azonnal töröld és generálj új API key-t a Resend dashboard-ban
2. Frissítsd az új key-t mindenhol

## Támogatás

- Resend Documentation: https://resend.com/docs
- API Reference: https://resend.com/docs/api-reference
- Status Page: https://status.resend.com

---

**Készen áll!** A contact form most éles üzemben működik automatikus email válaszokkal.
