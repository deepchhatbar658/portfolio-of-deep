# TraknTrac
### Live weight capture for production floors

## Overview
TraknTrac is a React Native field application for industrial batch-processing operations. Floor supervisors use it to track production lots through sequential processing stages, capture crate weights via connected IoT scales, and assign workers by scanning QR badges. It replaces paper-based weight logs and manual data entry in environments where precision and traceability are critical.

## Core Features
- Scan worker and lot QR codes to assign teams and track batch ownership across shifts.
- Capture live weight readings from BLE or WiFi-connected industrial scales with automatic crate logging.
- Operate through multi-stage production workflows with role-based access control per processing stage.
- Review, edit, and remove captured crates before finalizing a lot for the next stage.
- Save and close lots with threshold validation to prevent weight discrepancies.
- Continue working offline; locally queued crate data syncs automatically when connectivity returns.

## Technical Highlights

The app connects to industrial weight scales over both Bluetooth Low Energy and WiFi TCP sockets. Rather than scattering protocol-specific logic across screens, a unified connectivity layer exposes a single interface for scanning, connecting, and receiving weight streams. The layer delegates to dedicated BLE or WiFi services based on a configurable connection type, which simplifies UI code and makes the hardware layer testable independently of business logic.

Weight scales send continuous, often noisy, data streams. The app subscribes to live weight callbacks, applies an 800ms stability timer to avoid capturing transient readings, and deduplicates values using tag-and-weight hashing. When a stable reading arrives, it is validated against lot-level thresholds to flag overweight crates before they are committed to the queue. This prevents bad data from entering the production record.

Connectivity on production floors is unreliable. The app stores captured crate data in a local queue when the network is down. A sync mechanism monitors connection state and pushes queued crates to the backend one at a time, removing successfully synced entries without blocking the UI. This means workers can keep weighing and logging even in dead zones.

The backend models four distinct production stages, each with different lot fields, validation rules, and API surfaces. The frontend normalizes this into a unified state layer where reducers handle stage-specific responses while screens remain agnostic to the underlying stage. A custom middleware layer intercepts API calls, injects auth headers, and enforces global timeout and session-expiry handling.

Both BLE and WiFi require runtime permissions that vary significantly by Android API level. Android 12+ needs dedicated Bluetooth scan and connect permissions, while older versions rely on location permissions. The app centralizes permission checks in a monitoring service that emits state changes to listeners, so UI components can react to adapter toggles without polling.

## Platform & Stack Signals
Targets iOS and Android. Built on React Native 0.82 with Redux Toolkit, Redux Persist, and react-native-vision-camera for QR scanning. Uses react-native-ble-manager, react-native-ble-plx, and react-native-tcp-socket for hardware connectivity.

## Status
In development — internal production-floor tool.
