# Gamepad

📅 started in april 2021 during my training at https://www.lereacteur.io/  
🚧 in progress...

🌐 see online at https://frmi-gamepad.netlify.app/

## Frontend

https://github.com/frmi2018/react/tree/main/front/gamepad

# 🔶 API 🔶

## 🔶 User

### /user/signup (POST)

Create a new user

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |
| `username` | string | Yes      |

### /user/login (POST)

Log a user

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

## 🔶 Reviews

### /user/postreview (POST)

Create a new review

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `title`    | string | Yes      |
| `text`     | string | Yes      |
| `author`   | string | Yes      |
| `username` | string | Yes      |

### /user/getreview (GET)

Get a review

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `gameId`    | string | Yes     |

## 🔶 Favoris

### /user/postfavoris (POST)

Add a favori

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `userId`   | string | Yes      |
| `gameId`   | string | Yes      |

### /user/getfavoris (GET)

Get favoris

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `userId`   | string | Yes      |
| `gameId`   | string | Yes      |
