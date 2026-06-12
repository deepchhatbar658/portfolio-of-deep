# JNK Dairy
### Workforce Attendance Platform

## Overview
A React Native mobile application for workforce attendance and HR operations at a large dairy cooperative. Field employees check in and out with GPS-verified location, submit leave and shift change requests, and track attendance history — all backed by a Frappe/ERPNext instance serving as the HR system of record. Designed for workers spread across rural collection centers where network conditions are inconsistent.

## Core Features
- GPS-verified check-in and check-out with indoor/outdoor awareness and accuracy validation
- Calendar-based attendance view with color-coded daily status indicators
- Filterable attendance summary with date-range and status filters, served through a bottom sheet
- Leave applications with leave balance visibility, comp-off validation, and multi-day ML leave support
- Manual punch correction requests, shift change requests, and off-day work requests — each with approval workflow
- Role-based module visibility: the dashboard grid and navigation hide features the user does not have permission to access

## Technical Highlights

**Location acquisition with fallback strategy.** The check-in/check-out flow depends on GPS coordinates, but workers are often indoors or in areas with poor satellite reception. Rather than a single `getCurrentPosition` call, the app runs three parallel location watchers: a high-accuracy GPS stream, a fast network-based location request, and a continuous low-power watch for gradual accuracy improvement. If no reading meets the 200-meter target within the configured window, the system escalates to an indoor mode prompt where the user can accept the best available accuracy or wait longer. Accuracy thresholds, retry counts, and timeout durations are all configurable per invocation. This parallel-race-then-prompt pattern avoids both the "spinner forever" and "silently bad data" failure modes common in location-dependent apps.

**Backend-driven permission model adapted for mobile.** The backend exposes Frappe doctype permissions as two flat lists: `doc_list` (visible modules) and `permissions` strings in `module_action` format. The mobile layer normalizes these into a lookup map and exposes a `can(module, action)` API consumed by both a `withPermission` higher-order component for screen-level gating and an inline hook for conditional UI. Screens wrapped with `withPermission` render a generic access-denied view instead of the protected screen when permissions are absent, so navigation never reveals features the user should not see. Dashboard module tiles are filtered the same way before layout, so the grid never shows dead-end tiles.

**Single middleware for all API orchestration.** All network calls go through one Redux middleware that dispatches declarative `apiCallBegan` actions. The middleware attaches Frappe auth tokens and CSRF headers automatically, normalizes the backend's `success: false` within HTTP 200 responses as API-level failures, and handles session expiry edge cases — 401 responses and `CSRFTokenError` on 400 both trigger a full credential wipe and redirect to login. This centralization means individual feature slices never touch auth headers or error taxonomy directly, keeping the ~30 Redux slices focused on their domain logic.

**Workflow action queue with deduplication.** Leave requests, shift changes, and other submissions flow through an approval workflow on the backend. The app fetches available workflow transitions per document (approve/reject) and exposes them through a hook that prevents concurrent fetches for different documents by queuing subsequent calls. It also guards against double-apply by tracking in-flight action state with refs, so rapid taps on an approve button cannot submit the same action twice. When a fetch completes, the hook automatically drains the queue if a newer document was requested while the previous fetch was in flight.

**OTA JavaScript bundle updates bypassing app store review.** Using `react-native-ota-hot-update`, the app checks a git repository at launch and on foreground for updated JS bundles. When a new bundle is available, it downloads and hot-swaps the bundle without a full app store update, then restarts the app to apply changes. This is meaningful in an environment where HR policy changes (new leave types, adjusted attendance rules) require rapid UI updates across a distributed workforce.

## Platform & Stack Signals
Targeted at Android and iOS via React Native 0.82. Redux Toolkit with Redux Persist backed by AsyncStorage for state and offline resilience. Frappe/ERPNext as the backend, communicating through a custom mobile API layer (`jkmpcl_hr.api.mobile.*`). Navigation via React Navigation native stack. UI uses Gorhom bottom sheets, Reanimated for animations, and i18next for localization scaffolding.

## Status
Shipped and in active use.
