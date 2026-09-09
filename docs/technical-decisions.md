# Technical Decisions

## 1. Frontend-only implementation

I intentionally kept Round One focused on the frontend.

This allowed me to concentrate on the user experience and transaction states without pretending that the application was connected to a real financial institution.

## 2. HTML, CSS and JavaScript

I selected standard web technologies because they are lightweight, easy to run and sufficient for demonstrating the required financial dashboard.

## 3. Session Storage

Session Storage is used to simulate authentication state and temporarily pass transaction information between pages.

In production, authentication and transaction data would be managed by the backend.

## 4. Explicit Transaction States

The interface separates:

- Confirmation
- Processing
- Success
- Failure

This prevents the user from assuming that a transaction has succeeded before its outcome is known.

## 5. Validation

The frontend validates:

- Recipient account number
- Transaction amount
- Available balance
- Required fields

Server-side validation would still be required in production.

## 6. Responsive Design

The interface was designed to work across desktop, tablet and mobile screen sizes.

## 7. Mock Data

Mock transaction data is used to demonstrate:

- Sent transactions
- Received transactions
- Successful transactions
- Failed transactions
- Processing transactions

No real money is transferred.