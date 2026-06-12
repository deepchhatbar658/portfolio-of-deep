# Pushtisanskar Dham
### Spiritual Content & Commerce Platform

## Overview
A React Native mobile app serving a spiritual community with multilingual content (audio discourses, video events, digital books, live streams), community engagement tools (volunteer registration, event management, Q&A), and a full ecommerce flow with donations. Targets Android and iOS users in India, with the entire backend powered by a Frappe ERP instance.

## Core Features
- Browse and stream audio discourses organized by category, with background playback and user-curated playlists
- Watch video galleries, live event streams, and on-demand spiritual content
- Read digital books and magazines with offline PDF downloads and reading progress tracking
- Register as a volunteer, browse volunteer events, bookmark sessions, and manage attendance
- Shop physical merchandise with cart, wishlist, address management, order tracking, cancellations, and photo-attached returns
- Make monetary donations through categorized giving options with CCAvenue payment processing

## Technical Highlights

**Unified API middleware over the Redux dispatch pipeline.** Instead of using thunks, sagas, or React Query, every API interaction in the app flows through a single custom middleware that intercepts a generic `apiCallBegan` action. Each feature slice defines its own request/response/rejection reducers, and the middleware handles auth token injection, content-type negotiation, and error normalization across all ~60 API endpoints. This eliminates per-endpoint boilerplate while keeping the dispatch surface predictable: screens dispatch a single action, and the middleware fans out start/success/failure actions to the relevant slice. The same middleware also handles local Redux state changes through an `onChange` contract, so state like the current audio track or language preference uses the exact same dispatch shape as network calls.

**Dual payment gateway integration with hybrid native-WebView detection.** The app runs two separate payment flows for different use cases. The shop module integrates the Razorpay native SDK, building checkout options from server-returned order data and handling both success and structured error payloads through the same API middleware pipeline. The donations module uses CCAvenue, which redirects to an external hosted payment page inside a WebView. Since CCAvenue's encrypted response (`encResp`) arrives through form submissions or URL redirects within the WebView, the app injects JavaScript that scans the DOM and URL query parameters for the encrypted payload, posts it back to React Native via `postMessage`, and handles the full lifecycle — including external bank redirects via `Linking.openURL` — without exposing the payment flow to the user as a browser escape hatch. Both paths converge on a common confirmation pattern: payment result data is structured into a backend payload and dispatched through the same Frappe API contract.

**Background audio service with notification center integration.** Audio playback runs through a registered track-player background service that survives app backgrounding and handles lock screen controls (play, pause, skip, seek) via the platform's remote control events. Track state (current track, queue, playback position) is stored in Redux and synchronized with the native player on each play action. The app also supports playlist alarms — a scheduling feature that lets users set reminders on custom playlists, persisted server-side, so playback can be triggered at designated times.

**Offline-first file management with Android API-level awareness.** PDF books, magazines, and other digital content are downloaded using the device filesystem rather than a document cache. The download layer checks the current Android API level to decide whether to request legacy `WRITE_EXTERNAL_STORAGE` (API 28 and below) or rely on scoped storage (API 29+), avoiding unnecessary permission prompts. Before initiating a download, the app checks both the current and a legacy download directory for existing files to avoid redundant fetches, and validates file integrity by stat-ing saved files for nonzero size rather than trusting existence alone.

**Multi-language persistence across the auth boundary.** The app supports English, Hindi, and Gujarati through i18next, with translations loaded from static JSON bundles. Language preference is not purely a client-side setting — after OTP verification, the backend returns the user's preferred language, which the app applies to the i18n engine and persists in Redux. If the backend response is missing the language field, the app falls back to a secondary API call that retrieves it by user ID. On logout, the entire Redux store is cleared except for two slices: the logout state flag (to redirect the auth navigator to login instead of onboarding) and the current language preference (so the auth screens render in the user's last known language). This selective persistence avoids the jarring experience of auth screens flipping to a default language on each logout.

## Platform & Stack Signals
- Target: Android and iOS, built with React Native CLI (not Expo)
- State: Redux Toolkit with custom middleware replacing thunks/sagas, persisted via redux-persist and AsyncStorage
- Notable integrations: Frappe CMS backend, Razorpay native SDK, CCAvenue via WebView bridge, Firebase Cloud Messaging with Notifee foreground notifications, react-native-track-player background audio service

## Status
In active development — staging build with a growing feature set across content, community, and commerce modules.
