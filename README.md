![banner](banner.webp)
# Tixly - Manage Your Tickets Easily

Currently in development

## Tech Tree
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Clone Repository
```
git clone https://github.com/bora-sen/tixly-app
```

### Navigate to backend Folder
```
cd backend
```

### Start Backend Development Server
```
npm run dev
```
### Navigate to client Folder
```
cd client
```

### Start Client Development Server
```
npm run dev
```

[comment]: <> (TODO: fix navigating folders.)

## Back-End

### .env Variables

| Variable           | Description                       |
| ------------------ | --------------------------------- |
| MONGODB_CONN_URI   | MongoDB Connection Text           |
| JWT_ACCESS_SECRET  | Json Web Token Access Key Secret  |
| JWT_REFRESH_SECRET | Json Web Token Refresh Key Secret |

### Auth Endpoints

| METHOD | Endpoint       | Description                                                                    |
| ------ | -------------- | ------------------------------------------------------------------------------ |
| POST   | /auth/register | Register user with {username,displayName,password} object                      |
| POST   | /auth/login    | Login user with {username,password} object (returns access and refresh tokens) |
| POST   | /auth/refresh  | Get new accessToken                                                            |

### Events Endpoints

| METHOD | Endpoint       | Description                                                                 |
| ------ | -------------- | --------------------------------------------------------------------------- |
| GET    | /              | Gets All Events                                                             |
| POST   | /events/create | Create event with Auth Header, requires {title,description,maxPeople} props |
| DELETE | /events/delete | Delete event with Auth Header, requires {eventId} prop                      |

### Tickets Endpoints

| METHOD | Endpoint          | Description                                                        |
| ------ | ----------------- | ------------------------------------------------------------------ |
| GET    | /                 | Get All tickets (requires Auth Header)                             |
| POST   | /tickets/generate | Generate ticket with Auth Header, requires {eventId} prop          |
| POST   | /tickets/validate | Validates ticket with Auth Header, requires {eventId,public} props |
| DELETE | /tickets/delete   | Deletes ticket with Auth Header, requires {public} props           |
