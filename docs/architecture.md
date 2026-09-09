# KudiFlow Architecture

## Current Version

The current submission is a frontend-only prototype.

The architecture is:

Browser
↓
HTML
↓
CSS
↓
JavaScript
↓
Session Storage / Mock Data

## Planned Production Architecture

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

## Financial Transaction Flow

User
↓
Enter recipient and amount
↓
Client-side validation
↓
Confirmation
↓
Processing
↓
Backend validation
↓
Atomic debit + credit
↓
Transaction status
↓
Frontend displays result