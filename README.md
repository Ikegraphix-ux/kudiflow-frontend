# KudiFlow

## Secure Digital Money Transfer Platform

KudiFlow is an educational financial-system prototype demonstrating how a digital money-transfer application can handle authentication, balances, transfers, transaction states, history, and transaction details.

> **Important:** KudiFlow is a virtual-money educational prototype. It does not process real money and does not connect to real bank, mobile-money, or payment accounts.

## 🎯 Project Goal

The goal is to model financial-system behavior rather than build a simple CRUD interface.

The project focuses on:

- Secure authentication
- Account and balance views
- Transfer workflows
- Transaction state management
- Retry-safe transaction behavior
- Auditability and traceability
- Clear financial UX

## ✨ Frontend Features

- Login and registration
- Dashboard and balance display
- Send-money workflow
- Transfer confirmation
- Processing, success and failure states
- Transaction history
- Transaction details
- Search and filtering
- Responsive interface
- Session handling
- Form validation

## 🔄 Transfer Flow

```text
Login
  ↓
Dashboard
  ↓
Send Money
  ↓
Validate
  ↓
Confirm
  ↓
Process
  ↓
Success / Failure
  ↓
Transaction History
  ↓
Transaction Details
```

## 🏗️ Planned Production Architecture

```text
Frontend
   ↓
REST API
   ↓
Authentication Middleware
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
PostgreSQL
```

The service layer would own transfer rules while repositories handle database operations.

## 🔐 Backend Engineering Concepts

The planned backend uses concepts such as:

- JWT authentication
- Password hashing with bcrypt
- Decimal monetary values
- Database transactions
- Atomic debit/credit operations
- Row locking
- Deterministic lock ordering
- Idempotency keys
- Audit logs
- Transaction events
- Database constraints
- Automated tests

## 🛠️ Frontend Technology

- HTML5
- CSS3
- JavaScript
- Browser session storage for prototype state
- Responsive CSS

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
├── css/
├── js/
└── docs/
```

## ⚠️ Current Limitations

This frontend prototype does not provide:

- Real authentication
- A production backend connection
- A production database
- Real account balances
- Real financial transactions
- Payment or mobile-money integration
- Server-side authorization
- Production transaction locking

## 🚧 Status

**Frontend prototype complete — backend integration planned.**

## 🤖 AI Disclosure

AI tools were used as development and learning assistants. The implementation was reviewed and adapted by the developer, who remains responsible for understanding and maintaining the project.
