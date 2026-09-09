# Testing

## Login

| Test | Expected Result | Status |
|---|---|---|
| Valid credentials | Dashboard opens | Pass |
| Invalid credentials | Error displayed | Pass |
| Empty email | Validation displayed | Pass |
| Empty password | Validation displayed | Pass |

## Send Money

| Test | Expected Result | Status |
|---|---|---|
| Empty recipient | Validation displayed | Pass |
| Invalid recipient | Validation displayed | Pass |
| Empty amount | Validation displayed | Pass |
| Zero amount | Validation displayed | Pass |
| Amount above balance | Insufficient funds | Pass |
| Valid transfer | Confirmation opens | Pass |

## Transaction Flow

| Test | Expected Result | Status |
|---|---|---|
| Confirm transfer | Processing screen | Pass |
| Processing | User informed | Pass |
| Successful transaction | Success screen | Pass |
| Failed transaction | Failure screen | Pass |

## Transaction History

| Test | Expected Result | Status |
|---|---|---|
| View history | Transactions displayed | Pass |
| Search | Matching transactions displayed | Pass |
| Status filter | Correct status displayed | Pass |
| Type filter | Sent/received filtered | Pass |
| No matching transaction | Empty state displayed | Pass |

## Session

| Test | Expected Result | Status |
|---|---|---|
| Access protected page without session | Session expired page | Pass |
| Logout | Session removed | Pass |