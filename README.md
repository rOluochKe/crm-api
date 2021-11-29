# CRM Client side API

This is an api to create a CRM Ticket System with MERN

## Front End Repo

- [Frontend Repo](https://github.com/rOluochKe/crm-ui)
- [App Demo](https://mern-crm-app.netlify.app/)

## API Resources

### User API Resources

All the user API router follows `/v1/user/`

| #   | Routes                    | Verbs  | Is Private | Description                                      |
| --- | ------------------------- | ------ | ---------- | ------------------------------------------------ |
| 1   | `/v1/user`                | GET    | Yes        | Get user Info                                    |
| 2   | `/v1/user`                | POST   | No         | Create a user                                    |
| 3   | `/v1/user/login`          | POST   | No         | Verify user Authentication and return JWT        |
| 4   | `/v1/user/reset-password` | POST   | No         | Verify email and email pin to reset the password |
| 5   | `/v1/user/reset-password` | PATCH  | No         | Replace with new password                        |
| 6   | `/v1/user/logout`         | DELETE | Yes        | Delete user accessJWT                            |

### Ticket API Resources

All the user API router follows `/v1/ticket/`

| #   | Routes                         | Verbs | Is Private | Description                             |
| --- | ------------------------------ | ----- | ---------- | --------------------------------------- |
| 1   | `/v1/ticket`                   | GET   | Yes        | Get all ticket for the logined in user  |
| 2   | `/v1/ticket/{id}`              | GET   | Yes        | Get a ticket details                    |
| 3   | `/v1/ticket`                   | POST  | Yes        | Create a new ticket                     |
| 4   | `/v1/ticket/{id}`              | PUT   | Yes        | Update ticket details ie. reply message |
| 5   | `/v1/ticket/close-ticket/{id}` | PATCH | Yes        | Update ticket status to close           |
| 6   | `/v1/ticket/{id}`              | DELET | Yes        | Delete a ticket                         |

### Tokens API Resources

All the user API router follows `/v1/tokens`

| #   | Routes       | Verbs | Is Private | Description            |
| --- | ------------ | ----- | ---------- | ---------------------- |
| 1   | `/v1/tokens` | GET   | No         | Get a fresh access JWT |
