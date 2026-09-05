# Crop Bazaar — Complete Product & Infrastructure Plan

## 1. Product Vision

Crop Bazaar is a smart agricultural procurement and service platform focused on reducing uncertainty around agricultural procurement.

The primary SIH 2026 workflow is:

**Register → Select Procurement Centre → Book Slot → Receive Token → Monitor Queue → Arrive at the Right Time → Procurement → Track Payment**

The platform also adds intelligence and accessibility:

- Voice-first navigation and actions
- Hindi/Hinglish voice interaction
- Dynamic queue and ETA prediction
- Weather-aware scheduling
- Mandi/market price intelligence
- Tractor and agricultural equipment rentals
- Procurement-aware transport/equipment planning
- SMS and in-app notifications
- Farmer, procurement-centre and admin dashboards

The platform should feel like one connected workflow rather than a collection of unrelated features.

---

# 2. Primary User Roles

## 2.1 Farmer

Can:

- Register/login
- Create farmer profile
- Add crops and quantities
- Find procurement centres
- View centre capacity
- Book procurement slots
- Receive digital queue token
- Track live queue
- See predicted waiting time
- Get recommended arrival/departure time
- Receive weather alerts
- Track procurement status
- Track payment status
- View market prices
- Search using voice
- Navigate the application using voice
- Rent tractors/equipment
- View rental bookings
- Review completed services

## 2.2 Procurement Centre Operator

Can:

- Login to centre dashboard
- View today's slots
- View live queue
- Call next farmer
- Mark farmer arrived
- Mark farmer as no-show
- Start procurement
- Complete procurement
- Record quantity
- Record quality/assaying data if required
- Update payment/procurement status
- View centre performance
- Monitor congestion
- Manage counters/capacity

## 2.3 Admin

Can:

- Manage users
- Verify farmers/buyers/service providers
- Manage procurement centres
- Manage centre capacity
- Manage crops
- Monitor platform activity
- Manage notification templates
- View analytics
- Manage rental providers
- Manage data integrations
- Review system logs

## 2.4 Equipment/Rental Provider

Can:

- Create provider profile
- Add equipment
- Set location
- Set availability
- Set hourly/daily rate
- Accept/reject rental requests
- Manage bookings
- Mark equipment unavailable
- View earnings/history

---

# 3. Product Architecture

Use a modular monolith initially.

Do NOT start with microservices.

Recommended architecture:

```text
                         ┌─────────────────────┐
                         │     Farmer PWA       │
                         │  Next.js App Router  │
                         └──────────┬──────────┘
                                    │
                         ┌──────────▼──────────┐
                         │     Next.js API      │
                         │ Route Handlers /     │
                         │ Server Actions       │
                         └───────┬─────┬────────┘
                                 │     │
              ┌──────────────────┘     └──────────────────┐
              │                                           │
      ┌───────▼────────┐                         ┌────────▼─────────┐
      │    Supabase    │                         │   Intelligence   │
      │ Auth + Postgres│                         │ Gemini + Weather │
      │ Storage + RT   │                         │ + Queue Engine   │
      └───────┬────────┘                         └────────┬─────────┘
              │                                           │
              └──────────────────┬────────────────────────┘
                                 │
                         ┌───────▼────────┐
                         │ Notifications  │
                         │ Twilio SMS      │
                         │ In-app / Push   │
                         └────────────────┘
```

---

# 4. Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Progressive Web App capabilities

## Backend

Use Next.js Route Handlers and Server Actions for the initial system.

Avoid creating a separate Express server unless a future requirement makes it necessary.

## Database

Supabase PostgreSQL.

Use:

- Supabase Auth
- PostgreSQL
- Row Level Security
- Storage
- Realtime
- PostGIS where location queries are required

## AI

Gemini API.

Use Gemini for:

- Voice intent extraction
- Hindi/Hinglish understanding
- Natural-language assistant
- Crop/name normalization
- Structured command interpretation
- Explanation generation

Do not allow Gemini to directly mutate critical application state.

Use:

```text
Voice/Text
   ↓
Gemini
   ↓
Structured Intent
   ↓
Validation
   ↓
Application Action
   ↓
Database
```

## Weather

Integrate the selected official weather provider/API.

For an India-focused deployment, prefer official IMD data where the required API/data is available.

The weather layer should expose normalized application data instead of leaking provider-specific APIs into UI components.

## SMS

Twilio.

Important India deployment consideration:

- Domestic SMS requires DLT-related registration/template configuration.
- Keep the notification provider behind an internal interface.
- Store templates centrally.
- Do not hard-code Twilio calls throughout the application.

Example:

```text
NotificationService
 ├── sendSMS()
 ├── sendWhatsApp() [future]
 ├── sendPush() [future]
 └── createInAppNotification()
```

---

# 5. Repository Structure

Recommended structure:

```text
crop-bazaar/
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── farmer/
│   │   ├── dashboard/
│   │   ├── crops/
│   │   ├── slots/
│   │   ├── queue/
│   │   ├── procurement/
│   │   ├── payments/
│   │   ├── prices/
│   │   ├── rentals/
│   │   └── assistant/
│   ├── centre/
│   │   ├── dashboard/
│   │   ├── queue/
│   │   ├── slots/
│   │   └── procurement/
│   ├── admin/
│   ├── api/
│   │   ├── ai/
│   │   ├── weather/
│   │   ├── notifications/
│   │   ├── queue/
│   │   ├── rentals/
│   │   └── prices/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── farmer/
│   ├── centre/
│   ├── queue/
│   ├── rentals/
│   ├── weather/
│   ├── voice/
│   └── charts/
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── ai/
│   │   ├── gemini.ts
│   │   ├── intents.ts
│   │   └── router.ts
│   ├── queue/
│   │   ├── engine.ts
│   │   ├── eta.ts
│   │   └── capacity.ts
│   ├── weather/
│   │   ├── provider.ts
│   │   └── normalize.ts
│   ├── notifications/
│   │   ├── service.ts
│   │   └── twilio.ts
│   ├── rentals/
│   │   ├── matching.ts
│   │   └── availability.ts
│   ├── prices/
│   ├── validation/
│   ├── permissions/
│   └── utils/
│
├── types/
├── hooks/
├── constants/
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── config.toml
│
├── public/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── middleware.ts
├── next.config.ts
├── package.json
└── README.md
```

---

# 6. Database Design

Core tables:

## Identity

### profiles

```text
id
auth_user_id
role
full_name
phone
preferred_language
avatar_url
created_at
updated_at
```

Roles:

```text
farmer
centre_operator
admin
rental_provider
```

### farmer_profiles

```text
id
profile_id
farmer_id
village
district
state
latitude
longitude
land_area
created_at
updated_at
```

---

# 7. Procurement Centre Schema

## procurement_centres

```text
id
name
code
address
district
state
latitude
longitude
status
operating_start
operating_end
daily_capacity
created_at
updated_at
```

## centre_counters

```text
id
centre_id
name
counter_number
status
processing_rate
active
```

## centre_capacity

```text
id
centre_id
date
total_slots
available_slots
booked_slots
completed_slots
blocked_slots
```

---

# 8. Slot System

## procurement_slots

```text
id
centre_id
slot_date
start_time
end_time
capacity
booked_count
status
created_at
updated_at
```

Possible status:

```text
open
full
blocked
completed
cancelled
```

## slot_bookings

```text
id
slot_id
farmer_id
crop_id
expected_quantity
booking_reference
token_number
status
arrival_time
check_in_time
created_at
updated_at
```

Booking status:

```text
booked
confirmed
checked_in
waiting
called
processing
completed
no_show
cancelled
```

---

# 9. Queue System

## queue_tokens

```text
id
booking_id
centre_id
token_number
priority
queue_position
estimated_wait_minutes
status
created_at
called_at
completed_at
```

## queue_events

```text
id
token_id
event_type
metadata
created_at
created_by
```

Event examples:

```text
BOOKED
CHECKED_IN
QUEUE_JOINED
CALLED
PROCESSING_STARTED
PROCESSING_COMPLETED
NO_SHOW
CANCELLED
```

The queue must be event-driven enough to reconstruct what happened.

---

# 10. Procurement Tracking

## procurement_records

```text
id
booking_id
farmer_id
centre_id
crop_id
expected_quantity
received_quantity
quality_grade
procurement_amount
procurement_date
status
created_at
updated_at
```

Status:

```text
scheduled
arrived
quality_check
weighment
procured
payment_pending
paid
cancelled
```

## payments

```text
id
procurement_id
farmer_id
amount
status
payment_reference
payment_method
paid_at
created_at
```

---

# 11. Crop System

## crops

```text
id
name
local_names
category
unit
created_at
```

## farmer_crop_listings

```text
id
farmer_id
crop_id
quantity
unit
harvest_date
quality
location
status
created_at
updated_at
```

---

# 12. Price Intelligence

## crop_prices

```text
id
crop_id
market_name
market_code
district
state
min_price
max_price
modal_price
arrival_date
source
source_timestamp
created_at
```

Never present stale price data as live.

Every displayed external data point should have:

- source
- timestamp
- freshness indicator

---

# 13. Weather System

## weather_observations

```text
id
location_key
latitude
longitude
temperature
rain_probability
rainfall
humidity
wind_speed
weather_condition
observed_at
source
```

## weather_alerts

```text
id
location_key
alert_type
severity
title
description
start_time
end_time
source
created_at
```

Weather should influence scheduling only through deterministic rules.

Example:

```text
Weather API
    ↓
Normalize
    ↓
Weather Risk Score
    ↓
Scheduling Rules
    ↓
Recommended Slot / Alert
```

---

# 14. Queue Prediction Engine

This is one of the most important parts of Crop Bazaar.

Inputs:

- farmers booked
- farmers checked in
- current queue
- active counters
- average processing time
- quantity being processed
- historical processing rate
- no-show rate
- current time
- remaining slot capacity

Output:

```text
estimated_wait_minutes
estimated_service_time
estimated_completion_time
recommended_arrival_time
congestion_level
```

Example:

```text
Current token: 48
Currently serving: 32
Active counters: 3
Average processing time: 11 minutes

Predicted wait:
~58 minutes
```

Do not initially use an opaque ML model.

Start with a deterministic queue model.

Later add historical prediction models.

---

# 15. Dynamic Slot Recommendation

The system should recommend:

> "Your slot is 2:00 PM. Based on the current queue, you should leave around 12:55 PM."

Calculation can use:

```text
recommended_departure =
slot/check-in target
- travel time
- safety buffer
```

Then adjust using:

- queue conditions
- weather
- road/travel conditions when available

---

# 16. Voice System

Voice is an accessibility and navigation layer, not merely a search box.

Example commands:

```text
"Mera procurement slot dikhao"
"Meri queue kitni hai?"
"Mera token number kya hai?"
"Agla slot kab hai?"
"Mera payment status batao"
"Kal mausam kaisa rahega?"
"Mujhe tractor rent karna hai"
"Market mein gehun ka rate kya hai?"
"Dashboard kholo"
"Queue page kholo"
```

Use a structured intent contract.

Example:

```json
{
  "intent": "VIEW_QUEUE",
  "entities": {},
  "confidence": 0.97
}
```

For navigation:

```json
{
  "intent": "NAVIGATE",
  "target": "/farmer/queue",
  "confidence": 0.99
}
```

For actions:

```json
{
  "intent": "BOOK_SLOT",
  "entities": {
    "crop": "wheat",
    "quantity": 50,
    "date": "2026-09-08"
  }
}
```

Critical actions must require confirmation.

Example:

```text
User: "Mera slot book kar do."

System:
"I found a slot at 2:00 PM on 8 September.
Should I confirm this booking?"
```

Only after confirmation should the backend execute the mutation.

---

# 17. Gemini Architecture

Use Gemini as an interpretation/reasoning layer.

Do NOT:

```text
User → Gemini → Database mutation
```

Use:

```text
User
 ↓
Speech-to-text
 ↓
Gemini intent extraction
 ↓
Zod/schema validation
 ↓
Authorization
 ↓
Action router
 ↓
Business logic
 ↓
Supabase
 ↓
Response
```

Recommended intent groups:

```text
NAVIGATE
VIEW_QUEUE
VIEW_SLOT
BOOK_SLOT
CANCEL_SLOT
VIEW_PAYMENT
VIEW_WEATHER
VIEW_PRICE
FIND_RENTAL
CREATE_RENTAL_REQUEST
VIEW_PROCUREMENT
HELP
```

---

# 18. Equipment Rental

Keep rentals connected to agricultural workflows.

Do not make it a generic equipment marketplace.

## rental_providers

```text
id
profile_id
business_name
phone
location
latitude
longitude
verification_status
rating
created_at
```

## equipment

```text
id
provider_id
name
category
description
rate_per_hour
rate_per_day
location
latitude
longitude
status
created_at
```

Categories:

```text
tractor
tractor_trolley
harvester
rotavator
seed_drill
thresher
sprayer
cultivator
pump
```

## rental_bookings

```text
id
farmer_id
equipment_id
start_time
end_time
status
estimated_cost
final_cost
created_at
updated_at
```

---

# 19. Procurement-Aware Rental Matching

This should be a differentiating feature.

Example:

```text
Farmer:
"Mera wheat procurement slot kal 2 baje hai.
Mujhe tractor trolley chahiye."
```

System:

1. Finds farmer's booking.
2. Finds nearby rental providers.
3. Checks equipment availability.
4. Estimates travel time.
5. Suggests rental window.
6. Calculates estimated cost.
7. Shows options.

Example:

```text
Recommended

Tractor + Trolley
4.2 km away
Available: 10:00 AM – 1:00 PM
Estimated cost: ₹1,800
Suitable for your 2:00 PM procurement slot
```

---

# 20. Notifications

Create a centralized notification system.

Events:

```text
SLOT_BOOKED
SLOT_REMINDER
QUEUE_UPDATED
ARRIVAL_RECOMMENDATION_CHANGED
WEATHER_ALERT
PROCUREMENT_STARTED
PROCUREMENT_COMPLETED
PAYMENT_PENDING
PAYMENT_COMPLETED
RENTAL_CONFIRMED
```

Channels:

```text
in_app
sms
push
```

Start with:

- In-app
- SMS

Add push later.

Twilio should be isolated behind a provider interface.

---

# 21. Realtime

Supabase Realtime can be used for:

- queue position
- current token
- centre status
- booking updates
- procurement status
- notifications

Example:

```text
Centre operator updates token
        ↓
Supabase database
        ↓
Realtime event
        ↓
Farmer dashboard
        ↓
Queue updates automatically
```

---

# 22. Authentication

Use Supabase Auth.

Recommended initial flow:

```text
Phone / OTP
```

If OTP implementation becomes a bottleneck for the prototype, email/password can be used during internal development.

Role must never be trusted from client-side state.

Always resolve authorization from authenticated server-side identity + database role.

---

# 23. Supabase Security

Every sensitive table should use RLS.

Examples:

Farmer:

- can read/update own profile
- can read own bookings
- can read own queue data
- can read own payments
- can create rental requests

Centre operator:

- can access only their assigned centre
- can manage centre queue
- can update procurement records for that centre

Admin:

- platform-wide access

Rental provider:

- can manage only their equipment/bookings

Never expose the Supabase service-role key to the browser.

Use server-only environment variables for privileged operations.

---

# 24. Environment Variables

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

SUPABASE_SERVICE_ROLE_KEY=

GEMINI_API_KEY=

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

WEATHER_API_KEY=
WEATHER_API_BASE_URL=

NEXT_PUBLIC_APP_URL=
```

Only variables beginning with `NEXT_PUBLIC_` should be considered browser-exposed.

Never expose:

```text
SUPABASE_SERVICE_ROLE_KEY
GEMINI_API_KEY
TWILIO_AUTH_TOKEN
```

to client-side code.

---

# 25. API Boundaries

Recommended endpoints:

```text
/api/ai/intent
/api/ai/assistant

/api/weather/current
/api/weather/forecast

/api/prices/current
/api/prices/history

/api/queue/status
/api/queue/estimate

/api/slots
/api/slots/book
/api/slots/cancel

/api/procurement/status

/api/notifications/send

/api/rentals/search
/api/rentals/book
/api/rentals/cancel
```

Critical mutations should also be available through server-side business functions rather than allowing arbitrary database writes.

---

# 26. Service Layer

Create business logic outside UI components.

Example:

```text
lib/services/
├── booking-service.ts
├── queue-service.ts
├── procurement-service.ts
├── payment-service.ts
├── rental-service.ts
├── weather-service.ts
├── price-service.ts
├── notification-service.ts
└── voice-service.ts
```

A page should not contain 200 lines of business logic.

---

# 27. Data Validation

Use Zod for:

- API input
- Gemini structured output
- booking requests
- rental requests
- profile updates
- notification payloads

Never trust AI output without validation.

---

# 28. Caching

Cache external data where appropriate.

Weather:

- short TTL
- location based

Prices:

- cache based on source update frequency

Gemini:

- do not cache sensitive personalized responses blindly

Database:

- use indexed queries

---

# 29. Database Indexes

Important indexes:

```text
procurement_slots(centre_id, slot_date)
slot_bookings(slot_id)
slot_bookings(farmer_id)
queue_tokens(centre_id, status)
queue_tokens(booking_id)
procurement_records(farmer_id)
procurement_records(centre_id)
crop_prices(crop_id, arrival_date)
equipment(category, status)
equipment(latitude, longitude)
rental_bookings(equipment_id, start_time, end_time)
notifications(profile_id, created_at)
```

Use PostGIS indexes for geographic queries.

---

# 30. Background Jobs

Do not make long-running tasks block user requests.

Future/background tasks:

- weather refresh
- price data ingestion
- reminder notifications
- queue recalculation
- analytics aggregation
- rental availability cleanup

For the SIH MVP, scheduled tasks can initially be implemented using the deployment platform's cron/scheduled functions or Supabase-compatible scheduled jobs.

Do not introduce Redis/Celery unless scale actually requires it.

---

# 31. External Data Integration

External data should follow:

```text
Provider API
 ↓
Adapter
 ↓
Validation
 ↓
Normalization
 ↓
Database/cache
 ↓
Application
```

Never couple UI directly to external APIs.

Store:

```text
source
source_id
source_timestamp
fetched_at
```

for externally sourced records.

---

# 32. SIH Demo Mode

Create a controlled demo/simulation mode.

Demo data:

- 100+ farmers
- multiple procurement centres
- multiple counters
- realistic bookings
- live queue
- sample weather
- equipment providers

Show:

```text
Before:
High congestion
Long waiting time
Manual status tracking

After:
Scheduled arrival
Predictable queue
Live status
Automated notifications
```

Clearly label simulated metrics as simulation/demo metrics.

---

# 33. Key Dashboard Metrics

Centre dashboard:

```text
Today's farmers
Booked
Checked-in
Waiting
Processing
Completed
No-show
Average processing time
Estimated peak queue
Current congestion
```

Farmer dashboard:

```text
Next procurement
Token
Queue position
Estimated wait
Recommended departure
Weather
Expected procurement value
Payment status
```

Admin:

```text
Active farmers
Active centres
Daily procurements
Average wait
Completion rate
No-show rate
Centre utilization
Notification delivery
```

---

# 34. UX Principles

The farmer UI should prioritize:

1. Large touch targets
2. Hindi/Hinglish support
3. Minimal typing
4. Clear status indicators
5. Voice controls
6. Low-bandwidth-friendly pages
7. Simple terminology
8. Strong visual hierarchy

The main farmer dashboard should answer immediately:

```text
What is my next action?
Where do I need to go?
When should I leave?
What is my queue?
When will I get paid?
```

---

# 35. PWA / Mobile Strategy

Build as a responsive Next.js PWA first.

Prioritize mobile.

Useful capabilities:

- installable PWA
- offline shell
- cached static UI
- reconnect handling
- notification permission
- microphone permission
- location permission

Do not promise full offline transactions.

Critical operations must require a confirmed server connection.

---

# 36. Error Handling

Every external integration should have:

- timeout
- retry where safe
- fallback
- structured error
- logging

Examples:

If Gemini fails:

```text
Voice unavailable.
Use text search instead.
```

If weather API fails:

```text
Weather data temporarily unavailable.
```

Do not fabricate weather.

If Twilio fails:

```text
In-app notification remains available.
```

---

# 37. Observability

Add structured logging for:

```text
authentication
booking
queue events
procurement
payments
AI requests
AI intent validation failures
weather API failures
SMS failures
rental bookings
```

Never log:

- API keys
- authentication tokens
- OTPs
- full sensitive user data

---

# 38. Testing Strategy

## Unit tests

Test:

- queue calculation
- ETA
- slot capacity
- booking rules
- rental matching
- weather risk rules
- intent validation

## Integration tests

Test:

- Supabase queries
- RLS
- booking workflow
- queue updates
- notification triggers

## E2E

Test:

```text
Register
→ Add crop
→ Select centre
→ Book slot
→ Receive token
→ Check queue
→ Check-in
→ Procurement
→ Payment
```

Also:

```text
Voice command
→ intent
→ confirmation
→ action
```

---

# 39. Development Phases

## Phase 0 — Foundation

- Next.js setup
- TypeScript
- Tailwind/shadcn
- Supabase
- Auth
- project structure
- environment configuration
- database migrations
- RLS

## Phase 1 — SIH Core

- farmer profile
- centre management
- crop registration
- slots
- token generation
- queue
- centre dashboard
- procurement tracking
- payment status

## Phase 2 — Realtime + Notifications

- Supabase Realtime
- live queue
- in-app notifications
- Twilio SMS
- slot reminders
- queue updates

## Phase 3 — Intelligence

- queue prediction
- ETA
- congestion score
- dynamic recommendations
- weather integration
- weather-aware scheduling
- price intelligence

## Phase 4 — Voice

- speech-to-text
- Gemini intent extraction
- navigation commands
- status queries
- voice search
- confirmation workflow
- Hindi/Hinglish responses

## Phase 5 — Rentals

- provider onboarding
- equipment listings
- availability
- nearby search
- rental booking
- procurement-aware recommendations

## Phase 6 — Polish

- PWA
- accessibility
- loading states
- error states
- analytics
- demo simulator
- E2E tests
- security review
- SIH presentation/demo flow

---

# 40. MVP Priority

## Must Have

- Farmer registration
- Procurement centre
- Slot booking
- Digital token
- Live queue
- Centre operator dashboard
- Procurement status
- Payment status
- SMS notification

## High Priority

- Queue prediction
- ETA
- Weather
- Voice navigation
- Hindi/Hinglish voice
- Realtime updates

## Medium Priority

- Price intelligence
- Rental marketplace
- Procurement-aware rentals
- Advanced analytics

## Later

- Buyer marketplace
- Advanced logistics
- Forecasting models
- Large-scale service marketplace
- Advanced settlement

---

# 41. Deployment

Recommended initial deployment:

```text
GitHub
   ↓
Vercel
   ↓
Next.js application

Supabase
   ├── Auth
   ├── PostgreSQL
   ├── Storage
   └── Realtime

External
   ├── Gemini
   ├── Weather provider
   └── Twilio
```

Use separate:

```text
development
preview
production
```

environment variables.

Do not use production secrets locally.

---

# 42. Security Checklist

Before demo:

- RLS enabled
- service-role key server-only
- Gemini key server-only
- Twilio credentials server-only
- input validation
- rate limiting on AI endpoints
- rate limiting on OTP/auth flows
- authorization checks
- no arbitrary client-side role switching
- no direct unrestricted database writes
- webhook verification where applicable
- external API timeouts
- audit logs for important mutations

---

# 43. Core Product Differentiator

The strongest story is not:

> "Crop Bazaar has AI, weather, voice and rentals."

The stronger story is:

> "Crop Bazaar coordinates the entire journey from a farmer preparing a crop to completing procurement."

The connected workflow is:

```text
Crop
 ↓
Procurement Centre
 ↓
Slot
 ↓
Queue
 ↓
Weather
 ↓
Travel
 ↓
Equipment
 ↓
Procurement
 ↓
Payment
```

Voice becomes the easiest way to operate this system.

---

# 44. SIH Demo Story

Example:

A farmer has 50 quintals of wheat.

He opens Crop Bazaar and says:

> "Mere gehun ke liye procurement slot chahiye."

Crop Bazaar:

1. Identifies wheat.
2. Shows nearby procurement centres.
3. Shows available slots.
4. Farmer selects a slot.
5. System generates token.
6. Queue becomes live.

Later:

> "Meri queue kitni hai?"

System:

> "Aapke aage 12 farmers hain. Estimated wait 52 minutes."

Then:

> "Mujhe kab nikalna chahiye?"

System considers:

- queue
- slot
- travel time
- weather

and recommends a departure time.

Farmer:

> "Mujhe tractor trolley bhi chahiye."

Crop Bazaar finds available nearby equipment matching the procurement schedule.

At the centre:

- QR check-in
- live queue
- operator processes farmer
- procurement status updates

Finally:

> "Mera payment aaya?"

System shows payment status.

This is the complete product story.

---

# 45. Architecture Principle

Keep the system deterministic wherever money, queue position, booking, procurement or permissions are involved.

AI should interpret human language.

Business logic should make decisions.

Database should store state.

External APIs should provide verified data.

Realtime should distribute state changes.

Notifications should communicate state changes.

That separation will make Crop Bazaar safer, easier to debug and much easier to demonstrate.
