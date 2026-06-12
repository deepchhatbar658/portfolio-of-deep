# Pushtisanskar Pathshala
### Dual-Role LMS & Operations Platform for Religious Education

## Overview

A mobile platform built for a Pushtimarg religious-education institution, serving two distinct user bases: students enrolled in pathshala courses, and sanchalaks (teachers/administrators) managing batches, attendance, and examinations. The app consolidates learning management, institutional operations, and e-commerce into a single React Native codebase.

## Core Features

- **Dual-role authentication** — Students log in via GR number; sanchalaks authenticate with mobile + pathshala code. Both flows use OTP verification.
- **Course enrollment & lesson tracking** — Students browse courses, complete lessons, take quizzes, and earn completion certificates.
- **Batch & attendance management** — Sanchalaks mark daily attendance, view historical records by date range, and manage temporary or permanent batch transfers.
- **Examination & marks entry** — Quarterly exam scheduling with marks capture and submission per student.
- **Doubt discussions** — Categorized Q&A forum for lesson doubts, homework, exam prep, and general guidance.
- **E-commerce shop** — Browse religious study materials, manage cart/wishlist, checkout with Razorpay, track orders, and process returns with photo uploads.
- **Multi-language support** — Interface available in English, Hindi, and Gujarati via runtime locale switching.
- **Linked student switching** — Parents can switch between linked student accounts without re-authenticating.

## Technical Highlights

The app is backed by a Frappe/ERPNext instance that exposes both the institutional LMS APIs and the e-commerce order pipeline. Rather than relying on standard REST conventions, the backend uses a custom RPC-style endpoint structure under a single `api.method` namespace. This shaped the front-end architecture: a custom Redux middleware intercepts a generic `apiCallBegan` action, constructs the axios request, injects auth tokens and CSRF headers from the Frappe session, and dispatches success/failure back to slice-specific reducers. The middleware also handles FormData, URL-encoded, and JSON payloads transparently, and surfaces network-level errors as toast messages without leaking implementation details into UI code.

State persistence is a deliberate hybrid. Redux state is persisted via MMKV (not AsyncStorage) for faster startup and synchronous reads, while sensitive tokens live in the platform keychain. A dedicated middleware wipes the persisted Redux store on logout, ensuring no session residue survives across accounts. The student-switching feature takes advantage of this: switching a linked child account swaps the auth token and CSRF state in Redux, then re-fetches the student profile, all while keeping the same app session alive.

The shop module is the most complex user flow. It implements a full e-commerce lifecycle — cart, address book, Razorpay checkout, order confirmation, Shiprocket tracking, and return requests with photo evidence. The front-end isolates API response normalization into a formatter layer, so the UI only sees stable `CartProduct`, `CartAddress`, and `Order` shapes regardless of how the backend nests data. Payment uses the native Razorpay SDK with a two-phase order handshake: initiate a server-side order, open the Razorpay checkout, then confirm or fail the payment via a second API call. The flow defensively guards against duplicate payment callbacks and duplicate place-order dispatches using ref-based idempotency checks.

The bottom navigation is role-aware. Students and sanchalaks see different profile tabs, and the home screen conditionally renders either student-centric modules (courses, certificates, shop) or sanchalak-centric centre operations (students, batches, attendance, exams). The custom tab bar is built on Reanimated for layout transitions, and the entire navigation graph is a single native-stack navigator with a conditional bottom-tabs root.

## Platform & Stack Signals

- **Platforms**: iOS & Android (React Native 0.85, React 19)
- **State & API**: Redux Toolkit with custom middleware, redux-persist over MMKV
- **Backend**: Frappe/ERPNext custom REST API
- **Payments**: Razorpay native SDK
- **Notable native integrations**: Keychain secure storage, Firebase Cloud Messaging, PDF rendering, WebView, image picker, file upload, calendar, Razorpay, screen capture protection

## Status

In active development; institutional pilot deployment with shop module in mock-to-API transition phase.
