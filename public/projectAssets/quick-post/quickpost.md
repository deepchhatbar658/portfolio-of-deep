# QuickPost
### Social Media Posters for Businesses

## Overview
QuickPost is a cross-platform mobile app that helps small businesses and brands discover, customize, and share social media posters for festivals, holidays, and brand promotions. Rather than designing posts from scratch, users browse a categorized library of pre-made designs organized by occasion and industry, generate captions, and share directly to Instagram, WhatsApp, or their device gallery.

## Core Features
- Browse categorized poster libraries organized by festivals, national days, industries, and brand affiliations
- Preview posts in a full-screen modal with caption suggestions that can be shuffled or regenerated
- Share posts directly to Instagram and WhatsApp, download to device, or copy captions to clipboard
- Manage multiple business profiles, each with its own logo, tagline, and contact details
- Multi-step business registration wizard that collects industry, contact info, and brand assets
- Phone number authentication with auto-read OTP verification

## Technical Highlights

The app uses a custom Redux middleware layer as the sole conduit for all API communication. Every network request is dispatched as a Redux action with an embedded lifecycle contract — `onStart`, `onSuccess`, and `onFailed` action types. The middleware injects authentication headers (derived from OTP verification), handles 401 responses by resetting login state, and manages multipart form data uploads. This pattern means individual slices never touch axios directly; they declare intent, and the middleware resolves it.

Token-based authentication uses a dual-key scheme where the OTP verification response returns both an API key and secret, which are concatenated as a single Authorization header on all subsequent requests. Tokens are held in Redux state and persisted via redux-persist backed by AsyncStorage, so sessions survive app restarts. The auth flow is gated by a three-state navigation router — splash, auth, registration, and main app — each with its own stack navigator, determined by inspecting persisted login and registration completion flags.

The multi-step registration funnel accumulates form state by forwarding navigation params through each screen: language preference, industry selection, business details (with dynamic multi-input fields for emails and phone numbers), logo upload with crop, and a plan selection screen. Rather than using a global registration store, each screen merges its data into the params bag and passes it forward, keeping registration state scoped to the navigation stack until the final submission.

The UI is built on a component library of reusable primitives — a custom text component that enforces the font family and weight scale, container wrappers that handle safe area insets and scroll behavior, and card variants tailored to different feed layouts. FlatLists are tuned per-use-case with window sizing, initial render batch counts, and scroll direction optimizations. Bottom sheet modals, provided by Gorhom's library, are used for post previews, sharing flows, and detail views rather than pushing new screens, keeping the feed interactions fast and non-disorienting.

Internationalization is wired through i18next with separate namespace JSON files. The share modal includes a "Change Language" action, suggesting captions can be generated or translated across the supported locales. The app also bundles voice input and clipboard support, pointing toward plans for voice-to-text caption creation and clipboard-based sharing shortcuts.

## Platform & Stack Signals
Targets iOS and Android via React Native (0.79). State managed with Redux Toolkit and persisted with redux-persist. Navigation uses React Navigation v7 with native stack and bottom tabs. Image handling includes crop, color matrix filters, dominant color extraction, and screenshot capture. Auth uses phone + OTP with auto-read via native SMS APIs.

## Status
In active development — UI components and navigation flows are built out with dummy data; API wiring and the frame editor UI are underway.
