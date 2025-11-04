# Custom Domain Setup for Naya Hotel Bondo
## Domain: www.nayahotelbondo.co.ke

---

## Step 1: Add Custom Domain in Firebase Console

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/project/naya-elite-hotel/hosting/main
   - Or navigate to: Firebase Console → Your Project → Hosting

2. **Click "Add custom domain"**
   - Click the **"Add custom domain"** button
   - Enter: `www.nayahotelbondo.co.ke`
   - Click **"Continue"**

3. **Verify Domain Ownership**
   Firebase will provide you with a TXT record to verify ownership:
   - Record type: `TXT`
   - Name/Host: `@` or `nayahotelbondo.co.ke`
   - Value: (Firebase will provide this - something like `google-site-verification=xxxxx`)
   - TTL: 3600 (or default)

---

## Step 2: Configure DNS Records with Your Domain Registrar

You need to add DNS records with your `.co.ke` domain registrar (likely KENIC or a Kenyan hosting provider).

### DNS Records to Add:

#### A. For Root Domain (nayahotelbondo.co.ke):
```
Type: A
Name: @ (or leave blank for root domain)
Value: 151.101.1.195
Value: 151.101.65.195
TTL: 3600
```

#### B. For WWW Subdomain (www.nayahotelbondo.co.ke):
**Option 1 - CNAME Record (Recommended):**
```
Type: CNAME
Name: www
Value: naya-elite-hotel.web.app
TTL: 3600
```

**Option 2 - A Records (if CNAME not supported):**
```
Type: A
Name: www
Value: 151.101.1.195
Value: 151.101.65.195
TTL: 3600
```

#### C. Verification TXT Record:
```
Type: TXT
Name: @ (or root)
Value: [The verification code Firebase provides]
TTL: 3600
```

---

## Step 3: Common Kenyan Domain Registrars

### If your domain is with **Kenya Network Information Centre (KENIC)**:
1. Log in to your registrar's control panel
2. Find DNS Management or Zone File Editor
3. Add the records above

### Popular Kenyan Hosting Providers:
- **Safaricom Cloud** - https://cloud.safaricom.co.ke/
- **Truehost Kenya** - https://truehost.co.ke/
- **Sasahost** - https://sasahost.co.ke/
- **Hostpinnacle** - https://hostpinnacle.co.ke/

---

## Step 4: Complete Setup in Firebase

1. After adding DNS records, return to Firebase Console
2. Click **"Verify"** to check the TXT record
3. Once verified, Firebase will automatically provision an SSL certificate
4. Wait 24-48 hours for full DNS propagation
5. Your site will be live at both:
   - https://www.nayahotelbondo.co.ke
   - https://nayahotelbondo.co.ke (if you added root domain)

---

## Step 5: Redirect Configuration (Optional)

### To redirect www to non-www (or vice versa):
Firebase automatically handles this! Just add both domains:
1. Add `nayahotelbondo.co.ke` as primary
2. Add `www.nayahotelbondo.co.ke` as redirect

---

## Troubleshooting

### DNS Propagation Check:
```bash
nslookup www.nayahotelbondo.co.ke
```

### Common Issues:

1. **"Needs Setup" status in Firebase**
   - DNS records not propagated yet (wait 24-48 hours)
   - Check DNS records are correct
   - Ensure no conflicting A records

2. **SSL Certificate Pending**
   - This is normal, can take up to 24 hours
   - Firebase auto-provisions SSL certificates

3. **Domain not resolving**
   - Clear DNS cache: `ipconfig /flushdns` (Windows)
   - Try incognito mode
   - Check from different device/network

---

## Quick Reference DNS Settings

### Minimum Required (for www.nayahotelbondo.co.ke):

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| TXT   | @    | google-site-verification=xxxxx | 3600 |
| CNAME | www  | naya-elite-hotel.web.app       | 3600 |

### Recommended (for both www and root domain):

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| TXT   | @    | google-site-verification=xxxxx | 3600 |
| A     | @    | 151.101.1.195                  | 3600 |
| A     | @    | 151.101.65.195                 | 3600 |
| CNAME | www  | naya-elite-hotel.web.app       | 3600 |

---

## Timeline

- **DNS Record Addition**: 5-10 minutes
- **DNS Propagation**: 1-48 hours (typically 2-4 hours)
- **SSL Certificate**: Automatic (up to 24 hours)
- **Full Activation**: Usually within 24 hours

---

## Support

- **Firebase Hosting Docs**: https://firebase.google.com/docs/hosting/custom-domain
- **KENIC Support**: https://www.kenic.or.ke/
- **Check DNS Propagation**: https://dnschecker.org/

---

## Current Status

- ✅ Firebase Hosting: LIVE at https://naya-elite-hotel.web.app
- ⏳ Custom Domain: PENDING (follow steps above)
- 📅 Setup Date: November 4, 2025

---

**Next Step**: Go to Firebase Console and click "Add custom domain" to get your verification TXT record!

🔗 **Direct Link**: https://console.firebase.google.com/project/naya-elite-hotel/hosting/main
