# Notion CMS Setup Guide — STS Travel Website

This guide walks you through setting up Notion as the CMS for the STS Travel website.

---

## Step 1: Create a Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Fill in:
   - **Name**: `STS Travel Website`
   - **Associated workspace**: Select your workspace
   - **Capabilities**: Check **Read content** (that's all we need)
4. Click **Submit**
5. Copy the **Internal Integration Token** (starts with `ntn_...`)
6. Paste it into your `.env.local` file as `NOTION_TOKEN`

---

## Step 2: Create the Databases

You need to create **4 databases** in Notion. Each database stores content for one page of the website.

### How to create a database:
1. In Notion, create a new page (click **+ New page** in the sidebar)
2. Type `/database` and select **"Database - Full page"**
3. Name it using the names below
4. Add the properties listed for each database

> **IMPORTANT**: Property names must match EXACTLY (including capitalization and spacing).

---

### 🏠 Database: "Home Page"

Create one row with these properties:

| Property Name | Property Type | Example Value |
|---|---|---|
| Name | Title | `Home Content` |
| Hero Title | Text | `Curated Travel Experiences` |
| Hero Description | Text | `We are artisans of travel...` |
| Hero Badge | Text | `Premium` (or leave empty) |
| Hero CTA Text | Text | `Explore` |
| Hero CTA Link | URL | `https://yoursite.com/contact` |
| Secondary CTA Text | Text | (optional) |
| Secondary CTA Link | URL | (optional) |
| Intro Short Name | Text | `STS` |
| Intro Title | Text | `Your Trusted Partner in Unforgettable Travel` |
| Intro Description | Text | `Founded with an uncompromising passion...` |
| Intro Image 1 | URL | `https://images.unsplash.com/photo-...` |
| Intro Image 2 | URL | `https://images.unsplash.com/photo-...` |
| Stat 1 Value | Text | `2,500+` |
| Stat 1 Label | Text | `Bespoke Itineraries Delivered` |
| Stat 2 Value | Text | `80+` |
| Stat 2 Label | Text | `Countries Explored` |
| Stat 3 Value | Text | `10+` |
| Stat 3 Label | Text | `Years of Excellence` |
| Stat 4 Value | Text | `98%` |
| Stat 4 Label | Text | `Client Retention` |

---

### 📖 Database: "About Page"

Create one row with these properties:

| Property Name | Property Type | Example Value |
|---|---|---|
| Name | Title | `About Content` |
| Hero Title | Text | `The People Behind Your Perfect Trips` |
| Hero Description | Text | `Since 2015, STS has been transforming...` |
| Founder Name | Text | `Sarika Jodhani` |
| Founder Title | Text | `Founder & Principal Travel Designer` |
| Founder Story | Text | `With a background steeped in global exploration...` |
| Founder Image | URL | `https://images.unsplash.com/photo-...` |
| Tagline | Text | `Curating your world, one extraordinary journey at a time.` |
| Company Description | Text | `Founded with an uncompromising passion...` |
| Mission | Text | `To orchestrate flawless, transformative travel...` |
| Vision | Text | `To remain the definitive choice in luxury travel...` |
| Stat Highlight Value | Text | `10+` |
| Stat Highlight Label | Text | `Years of Excellence` |

---

### 🛎️ Database: "Services"

Create **one row per service** (8 rows total). Properties:

| Property Name | Property Type | Example Value |
|---|---|---|
| Name | Title | `Hotel Booking` |
| Description | Text | `Handpicked luxury stays and boutique hotels...` |
| Icon | Text | `🏨` |
| Icon Name | Text | `Hotel` |
| Order | Number | `1` |
| Slug | Text | `hotel-booking` |

**Valid Icon Names** (must match exactly):
- `Hotel`
- `Globe`
- `Plane`
- `BookOpen`
- `Car`
- `ShieldCheck`
- `CalendarRange`
- `Users`

**Full services to add:**

| Order | Name | Icon | Icon Name | Slug |
|---|---|---|---|---|
| 1 | Hotel Booking | 🏨 | Hotel | hotel-booking |
| 2 | Domestic / International Tour | 🌍 | Globe | domestic-international-tour |
| 3 | Air Ticket / Visa | ✈️ | Plane | air-ticket-visa |
| 4 | Passport / Forex | 🛂 | BookOpen | passport-forex |
| 5 | Car Rental | 🚗 | Car | car-rental |
| 6 | Overseas Insurance | 🛡️ | ShieldCheck | overseas-insurance |
| 7 | M.I.C.E. | 📅 | CalendarRange | mice |
| 8 | FIT / GIT Booking | 👥 | Users | fit-git-booking |

---

### 📞 Database: "Contact Page"

Create one row with these properties:

| Property Name | Property Type | Example Value |
|---|---|---|
| Name | Title | `Contact Info` |
| Hero Title | Text | `Let's Plan Your Next Journey` |
| Hero Description | Text | `Have a destination in mind?...` |
| Phone | Phone number | `+91 99249 33880` |
| Email | Email | `ststravels07@gmail.com` |
| WhatsApp | Text | `+919924933880` |
| Address | Text | `1305, Shivalik Shilp, Iscon Cross Road, S.G. Highway` |
| City | Text | `Ahmedabad, Gujarat - 380015` |
| Country | Text | `India` |
| Business Hours | Text | `Mon–Sat: 9AM–7PM` |

---

## Step 3: Share Databases with Your Integration

For **each** of the 4 databases:
1. Open the database page in Notion
2. Click the **"..."** menu (top right)
3. Go to **"Connections"** → **"Connect to"**
4. Search for your integration name (`STS Travel Website`)
5. Click to connect it

---

## Step 4: Get Database IDs

For each database:
1. Open it in your browser
2. Look at the URL: `https://www.notion.so/YOUR_WORKSPACE/DATABASE_ID?v=...`
3. The **DATABASE_ID** is the 32-character hex string before `?v=`
4. Copy it and paste into `.env.local`

Your `.env.local` should look like:
```
NOTION_TOKEN=ntn_xxxxxxxxxxxxxxxxxxxx
NOTION_HOME_DB_ID=abc123def456...
NOTION_ABOUT_DB_ID=abc123def456...
NOTION_SERVICES_DB_ID=abc123def456...
NOTION_CONTACT_DB_ID=abc123def456...
```

---

## Step 5: Restart the Dev Server

After updating `.env.local`, restart Next.js:
```bash
npm run dev
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Content not showing | Check that the database is shared with the integration |
| Wrong content | Check that property names match exactly (case-sensitive) |
| Images not loading | Make sure you're using external URLs (Unsplash, etc.) |
| Changes not appearing | Wait up to 60 seconds (content refreshes automatically) |
| Site shows static content | Check `.env.local` has correct token and database IDs |
| Build error | Run `npm run build` and check console for specific errors |
