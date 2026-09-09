# KudiFlow

## Secure Digital Money Transfer Platform

KudiFlow is a responsive frontend prototype for a fictional digital financial platform. It demonstrates how a financial interface can keep users informed while viewing balances, initiating transfers, confirming transactions, and reviewing transaction history.

> **Important:** This submission is frontend-only. No real money is transferred and no real bank, mobile-money provider, or payment gateway is connected.

## Features

### Authentication
- Login interface with validation and loading state
- Registration interface with validation
- Password visibility controls
- Simulated authentication using browser session storage
- Session protection for authenticated pages

**Demo login**
- Email: `demo@kudiflow.com`
- Password: `password123`

### Dashboard
- Available balance
- Account number and currency
- Hide/show balance
- Quick actions
- Recent transactions
- Responsive layout

### Money Transfer
- Recipient account validation (`KDF` + 6 digits)
- Amount validation
- Insufficient-funds feedback
- Transfer confirmation screen
- Processing state
- Success and failure state designs
- Transaction reference generation

### Transaction History
- Sent and received transactions
- Success, failed, and processing states
- Search by transaction ID, account number, or name
- Status and type filters
- Empty state
- Loading state

### Transaction Details
- Transaction ID
- Recipient/sender
- Amount
- Date and time
- Transaction fee
- Status
- Transaction timeline

### System States
- Invalid input
- Insufficient funds
- Loading
- Empty history
- Network error
- Expired session
- Processing
- Success
- Failure

## Project Structure

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
│   └── style.css
├── js/
│   ├── auth.js
│   ├── session.js
│   ├── dashboard.js
│   ├── transfer.js
│   ├── transactions.js
│   └── transaction-details.js
└── docs/
    ├── architecture.md
    ├── technical-decisions.md
    └── testing.md
```

## Technology

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Browser `sessionStorage`

No backend API is connected in this version.

## Transaction Flow

```text
Login
  ↓
Dashboard
  ↓
Send Money
  ↓
Validate Recipient & Amount
  ↓
Confirmation
  ↓
Processing
  ↓
Success / Failure
  ↓
Transaction History
  ↓
Transaction Details
```

## Financial UX Approach

The interface deliberately separates transaction stages instead of treating a transfer as an instant CRUD action:

- **Initiated:** the user has entered and submitted a transfer.
- **Confirmation:** the recipient, amount, fee, and total are shown before submission.
- **Processing:** the user is told that the transfer is being handled and not to submit again.
- **Successful:** the interface shows the amount, recipient, reference, and status.
- **Failed:** the interface provides a failure reason, reference, and recovery action.

Transaction history and details provide traceability after the transaction.

## Technical Decisions

### Frontend-only prototype
The submission intentionally focuses on the frontend because the current challenge stage is frontend development. Backend integration is planned separately.

### Session storage
`sessionStorage` is used to simulate authentication state, transfer information, selected transactions, transaction references, and other demo state.

### Mock data
Transaction history uses fixed mock data so the interface can demonstrate success, failed, and processing states without a real financial service.

### Responsive design
The interface is designed for desktop, tablet, and mobile layouts using responsive CSS.

## Limitations

This prototype does not provide:

- Real authentication
- A backend API
- A database
- Real account balances
- Real financial transactions
- Payment or mobile-money integration
- Server-side authorization
- Real transaction locking or idempotency

These controls would be implemented in the production backend.

## Planned Backend

The planned production architecture is:

```text
Frontend
   ↓
REST API
   ↓
Authentication Middleware
   ↓
Routes / Controllers
   ↓
Services
   ↓
Repositories
   ↓
PostgreSQL
```

The backend would add atomic debit/credit processing, idempotency protection, authorization, audit logging, database constraints, concurrency protection, and automated tests.

## AI Disclosure

AI tools were used as a development and learning assistant during the project. The submitted work was reviewed and adapted by the developer, who remains responsible for the architecture, implementation, testing, design decisions, and understanding of the project.

## Project Status

**Frontend prototype complete — backend integration planned.**