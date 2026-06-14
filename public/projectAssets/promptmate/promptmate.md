# PromptMate
### Workforce & Field Service Operations Platform

## Overview

PromptMate is a dual-domain mobile application that unites employee self-service (attendance, payroll, leave, expenses) with field service management (service calls, spare parts, stock operations, and technical helpdesk) into a single native experience. Built for a distributed workforce of service engineers and HR personnel, it replaces fragmented paperwork and desktop ERP workflows with real-time, location-aware mobile operations.

## Core Features

- **Attendance & Shift Management** — Geo-tagged check-in/check-out, shift requests, week-off changes, and attendance regularization with calendar visualization.
- **Leave & Payroll Access** — Leave balance tracking, application workflows, holiday calendars, and downloadable salary slips with full earnings/deductions breakdown.
- **Expense & Travel Claims** — Multi-line expense creation with vehicle tracking, travel itinerary management, and advance settlement against claims.
- **Field Service Lifecycle** — End-to-end service call creation, assignment, field visit tracking, symptom diagnosis, checklist completion, and closure.
- **Spare Parts & Inventory** — Serial-number-tracked spare replacement, consumption logging, stock balance lookups, material requests, and warehouse transfers.
- **Technical Helpdesk & Approvals** — Ticket reassignment between engineers and helpdesk personnel, plus manager approval workflows for attendance, leave, and shift requests.
- **Push Notifications** — Real-time alerts for approvals, service call assignments, and system updates via push messaging with local notification rendering.

## Technical Highlights

The application is built around a custom Redux middleware layer that transforms API calls into declarative, lifecycle-aware actions. Rather than scattering `axios` calls across components, every network request is dispatched as a Redux action with `onStart`, `onSuccess`, `onFailed`, and `onReset` hooks. The middleware intercepts these actions, injects authentication headers (including CSRF tokens), normalizes error responses, and handles session expiry automatically — redirecting to login on 401/CSRF errors without any component-level intervention. This architecture makes the entire API surface self-documenting and testable from a single interception point.

State persistence uses MMKV instead of AsyncStorage, bridged into Redux Persist through a custom storage adapter. The choice was deliberate: with over 100 feature-specific reducers spanning HR and field service domains, hydration speed directly impacts cold-start perception. MMKV's synchronous reads and zero-serialization overhead mean the app restores its full state before the first render cycle completes.

The app integrates deeply with native hardware across both domains. Vision Camera handles QR-based service call assignment and photo capture for field documentation. Geolocation is wired into attendance and field visit start/end flows. Signature capture, audio recording, and document picker support the claim and service call attachment workflows. This isn't a web view wrapper — it's a native app that uses device capabilities as first-class workflow primitives.

Error observability is handled through an error-tracking service with automatic exception capture in the API middleware. The middleware also logs structured error metadata to the backend, creating a closed loop between client failures and server-side visibility. Combined with Notifee for local notification display and a push messaging service, the app maintains user engagement even when backgrounded or offline.

## Platform & Stack Signals

- **Platforms**: iOS & Android (React Native 0.79.2, React 19)
- **State Management**: Redux Toolkit + Redux Persist with MMKV storage
- **Navigation**: React Navigation (Native Stack + Drawer)
- **Native Integrations**: Vision Camera, Push Messaging, Notifee, Geolocation, App Auth (OAuth), Signature Canvas, Reanimated, Gesture Handler
- **Backend**: ERP-based REST API with custom endpoints for HR and FSM modules

## Status

Shipped — production builds distributed via APK and App Store release channels.
