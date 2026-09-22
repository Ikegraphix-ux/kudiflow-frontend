# KudiFlow

## Secure Digital Money Transfer Platform

KudiFlow is a **frontend educational prototype** that models the user experience and workflow of a digital money-transfer platform.

It demonstrates authentication screens, account balances, transfer validation, transaction states, transaction history, and transaction details using standard web technologies.

> **Important:** KudiFlow does not process real money and does not connect to real bank, mobile-money, card, or payment accounts.

## 🎯 Project Objective

The project is designed to demonstrate **financial-system thinking**, not just CRUD screens.

Key concepts represented in the interface include:

- Authentication and session handling
- Account and balance views
- Transfer validation
- Transaction confirmation
- Processing, success, and failure states
- Transaction history and filtering
- Transaction details and status
- Retry-safe workflow concepts
- Auditability and traceability
- Responsive financial UX

## 🔄 User Flow

```text
Login / Register
      ↓
   Dashboard
      ↓
   Send Money
      ↓
    Validate
      ↓
   Confirm
      ↓
   Processing
      ↓
Success / Failure
      ↓
Transaction History
      ↓
Transaction Details
```

## 🧩 Current Implementation

The current repository is intentionally **frontend-only**.

```text
Browser
  ↓
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
Session Storage / Local Storage / Mock Data
```

The prototype uses browser storage and seeded data to simulate application state.

## 🏗️ Planned Backend Architecture

The frontend is designed to be connected to a REST API in a later phase.

```text
Frontend
   ↓
REST API
   ↓
Authentication Middleware
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
PostgreSQL
```

The planned service layer would own financial business rules, while repositories would handle database access.

## 🔐 Planned Financial-System Concepts

The backend design is intended to support:

- JWT authentication
- Password hashing with bcrypt
- Exact decimal monetary values
- Atomic database transactions
- Debit/credit consistency
- Row locking and deterministic lock ordering
- Idempotency keys
- Transaction events
- Audit logs
- Database constraints
- Automated tests

These concepts are **planned backend capabilities**, not claims that they are currently implemented in this frontend repository.

## ✨ Frontend Features

- Login and registration interfaces
- Demo authentication flow
- Dashboard and balance display
- Send-money workflow
- Transfer confirmation
- Processing state
- Success and failure states
- Transaction history
- Search and filtering
- Transaction details
- Session-expired handling
- Network-error state
- Form validation
- Responsive interface
- Accessibility-focused interaction states

## 📁 Project Structure

```text
kudiflow-frontend/
├── index.html
├── register.html
├── dashboard.html
├── send-money.html
├── confirmation.html
├── processing.html
├── success.html
├── failure.html
├── network-error.html
├── session-expired.html
├── transactions.html
├── transaction-details.html
│
├── css/
│   ├── style.css
│   └── transactions.css
│
├── js/
│   ├── auth.js
│   ├── session.js
│   ├── dashboard.js
│   ├── transfer.js
│   ├── transactions.js
│   └── transaction-details.js
│
└── docs/
    ├── README.md
    ├── architecture.md
    ├── technical-decisions.md
    └── testing.md
```

## 🧪 Testing

The prototype has been manually tested across:

- Login validation
- Transfer validation
- Insufficient-balance handling
- Transaction confirmation
- Success/failure/processing states
- Transaction search
- Status and type filtering
- Session protection
- Logout behavior

See [docs/testing.md](docs/testing.md) for the test cases.

## 📚 Documentation

- [Documentation Guide](docs/README.md)
- [Architecture](docs/architecture.md)
- [Technical Decisions](docs/technical-decisions.md)
- [Testing](docs/testing.md)

## ⚠️ Current Limitations

This repository does **not** currently provide:

- Real user authentication
- Server-side authorization
- A production REST API
- A production database
- Real account balances
- Real financial transactions
- Payment or mobile-money integration
- Production transaction locking
- Production-grade idempotency
- Server-side validation

The browser-side demo should therefore not be treated as a financial service.

## 🚧 Status

**Frontend prototype complete. Backend integration is the next development phase.**

## 🛠️ Technology

- HTML5
- CSS3
- JavaScript
- Browser Session Storage
- Browser Local Storage

## 🤖 AI Disclosure

AI tools were used as development and learning assistants during the project. The implementation was reviewed and adapted by the developer, who remains responsible for understanding and maintaining the project.

## 👨‍💻 Developer

**Isaac Asumadu Agyei**

Software Engineering Student · Full-Stack Developer · Ghana
