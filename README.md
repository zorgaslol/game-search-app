# Game Search App

This project is a full-stack web application built as an internship assignment.
It demonstrates a searchable game listing interface inspired by Eneba's design, using React for the frontend and PHP + MySQL for the backend API.

This is a non-commercial demo project created for educational purposes only.

## Features

- Game list fetched from a backend API
- Live search (partial / fuzzy text search)
- Responsive grid layout
- Eneba-inspired UI and styling
- Hover effects and animations
- Like (heart) button UI interaction
- Mobile-friendly navigation behavior

## Tech Stack

### Frontend

- React (Vite)
- JavaScript (ES6+)
- CSS (Grid & Flexbox)
- Fetch API

### Backend

- PHP
- MySQL
- JSON API endpoints

## Project Structure

```
game-app/
├── backend/
│   ├── list.php
│   └── images/
│
├── frontend/
│   └── react-search-app/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

## API Endpoints

**Get all games**
```
GET /game-api/list.php
```

**Search games**
```
GET /game-api/list.php?search=<query>
```

**Example JSON response:**
```json
[
  {
    "id": 1,
    "title": "Red Dead Redemption 2",
    "price": 19.99,
    "image_url": "http://localhost/game-api/images/rdr2.jpg"
  }
]
```

## How to Run Locally

### Backend (PHP + MySQL)

1. Place the `backend` folder inside `xampp/htdocs`
2. Start Apache and MySQL using XAMPP
3. Create a MySQL database (example: `game_search`)
4. Create a `games` table and insert sample data
5. The API will be available at:
   ```
   http://localhost/game-api/list.php
   ```

### Frontend (React)

1. Open terminal
2. Navigate to `frontend/react-search-app`
3. Run `npm install`
4. Run `npm run dev`
5. The frontend will be available at:
   ```
   http://localhost:5173
   ```

## Notes

- The frontend fetches game data from the backend API
- Search filtering is performed on the frontend for instant feedback
- The backend also supports searching via query parameters
- Images are served statically from the backend
- No authentication, cart, or payment system is implemented (out of scope)

## AI Usage

AI tools were used to assist with:

- Learning React basics and hooks
- Debugging frontend and backend issues
- Understanding frontend–backend communication
- Improving CSS layout and responsiveness

All final code was reviewed, understood, and adapted by the author.

## Disclaimer

This project was created for educational purposes only as part of an internship application.
The UI design was inspired by Eneba.
This project is not affiliated with or endorsed by Eneba.
