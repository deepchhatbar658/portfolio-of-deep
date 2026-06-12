# Freshina
### Field-force CRM with live tracking

## Overview
A cross-platform mobile CRM for food-distribution field teams managing leads, orders, deliveries, fleet, and expenses. Sales representatives, drivers, and managers use it to run their daily operations while a Frappe/ERPNext backend serves as the system of record. Built for Android with an iOS companion, deployed to a workforce operating across urban and semi-urban territories.

## Core Features
- Lead capture and KYC verification with document upload and fieldwork workflows
- Sales order creation with real-time pricing, tax calculation, coupon application, and Razorpay checkout
- Delivery trip assignment with live driver location tracking and OTP-based delivery verification
- Fleet management including vehicle assignment, maintenance logs, and driver-vehicle matching
- Attendance with check-in/check-out, leave applications, expense claims, and advance requests
- Task management with multi-level approval chains, subtask delegation, and in-app messaging
- Dashboard analytics across leads, orders, cash collection, deliveries, surveys, and team performance
- Meeting scheduling with agenda creation, participant tracking, and document attachments

## Technical Highlights

### Continuous native location tracking across all app states
The Android app runs a foreground service that captures driver location every 60 seconds regardless of whether the app is in the foreground, background, or killed. The service uses FusedLocationProviderClient with a tiered accuracy strategy — requesting high-accuracy single-shot locations when fine permission is granted, falling back to balanced-power when only coarse is available, then to last-known location, then to a cached in-memory value. A WorkManager periodic job runs every 15 minutes as a recovery mechanism: if the OS terminates the foreground service, the worker checks whether tracking is still enabled and restarts it. The service also periodically checks the trip's backend status and auto-terminates itself when the trip is marked delivered. All configuration — trip ID, driver ID, auth tokens — is passed from the React Native layer to native via a bridge module and persisted in SharedPreferences, so the service operates completely independent of the JavaScript runtime.

### Offline location buffering with catch-up sync
When network is unavailable, captured location points are written to a Room database rather than discarded. On the next successful upload, the service drains the pending queue sequentially, posting each queued point to the backend in order. The queue clears only on confirmed server acknowledgment, and the service resets the entire offline cache whenever a new trip config is received (preventing stale data from a previous trip being uploaded against the current one). There is no explicit size cap, trading storage predictability for completeness during long offline windows in rural delivery routes.

### WebView-hosted interactive map with JS bridge
Instead of binding a native map SDK, the driver tracking screen renders an interactive map by injecting a self-contained HTML document into a React Native WebView. The document loads the Ola Maps Web SDK, initializes markers for the driver, start point, destination, and customer stops, and renders a polyline route with live driver-marker animation. Communication between the React Native layer and the embedded map happens over a structured JSON message protocol via `postMessage` — the RN side sends `INIT_MAP` and `DRIVER_UPDATE` payloads, while the map reports `MAP_READY` and `MAP_ERROR` back. This approach decouples the map rendering from the RN component lifecycle and allows the route-rendering logic (polyline decoding, OLA Directions API integration) to be entirely self-contained in the HTML bundle.

### Centralized API middleware with Redux action dispatch pattern
Every network call flows through a single Axios-based middleware that intercepts a custom action type. Screen hooks dispatch `apiCallBegan` actions carrying URL, method, payload, and three lifecycle action types (onStart, onSuccess, onFailed). The middleware reads auth tokens from the Redux store, constructs headers dynamically (Bearer token for most calls, cookie-based session tokens for native service calls, multipart headers for file uploads), executes the request, and dispatches the appropriate lifecycle action. This means no screen hook ever touches Axios directly, error serialization is centralized, and every API interaction produces Redux state transitions that any component can observe. Upload progress events are threaded through the middleware so screens can render progress bars without managing their own HTTP state.

### Git-based OTA hot-update pipeline
The app can pull JavaScript bundle updates directly from a Git repository using isomorphic-git and react-native-ota-hot-update. The OTA component checks for new commits on a platform-specific branch, clones or pulls the bundle, and prompts the user to restart. This bypasses the Play Store review cycle for JS-layer fixes, feature flags, and configuration changes. Firebase Crashlytics is integrated for crash reporting, and the app checks Play Store version on resume to nudge users toward native-layer updates when available.

## Platform & Stack Signals
- Targets Android (primary) and iOS, with Android-specific native modules for location tracking
- React Native 0.80, Redux Toolkit with Redux Persist, React Navigation v7 with stack/tab/drawer layout
- Frappe/ERPNext backend via custom REST APIs with token + session-based auth
- Firebase Cloud Messaging and Crashlytics, Notifee for local notification display
- Room (SQLite) for offline location persistence, OkHttp for native-side HTTP
- Ola Maps Web SDK for interactive routing maps, Razorpay for payment collection

## Status
Shipped — in production use by field sales teams.
