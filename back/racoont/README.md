# 🔶 racoont-back 🔶

📅 started in September 2021  
✅ finish

## racoont-front

https://github.com/frmi2018/racoont-back/tree/main/client

## About

Realized by following a tutorial on Youtube by Fromscratch.  
Link to the video tutoriel : https://www.youtube.com/watch?v=SUPDFHuvhRc&t=0s

## API

<br>
🔶 🔶 User 🔶 🔶
<br>
<br>

### Route : api/user/register

Method : POST  
inscription

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `pseudo`   | string | Yes      |
| `email`    | string | Yes      |
| `password` | string | Yes      |

<br>
<br>

### Route : api/user/login

Method : POST  
connection

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

<br>
<br>

### Route : api/user/logout

Method : GET  
Déconnection

<br>
<br>

### Route : api/user/

Method : GET  
Affiche la liste des utilisateurs

<br>
<br>

### Route : api/user/:id

Method : GET  
Affiche les infos d'un utilisateur

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | Yes      |

<br>
<br>

### Route : api/user/:id

Method : PUT  
Mise à jour d'un utilisateur

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | Yes      |

| Body  | Type   | Required |
| ----- | ------ | -------- |
| `bio` | string | Yes      |

<br>
<br>

### Route : api/user/:id

Method : DELETE  
Suppression d'un utilisateur

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | Yes      |

<br>
<br>

### Route : api/user/upload

Method : POST  
Ajouter une photo de profil

| form-data | Type | Required |
| --------- | ---- | -------- |
| `pseudo`  | text | Yes      |
| `file`    | file | Yes      |

<br>
🔶 🔶 Follow / unfollow 🔶 🔶
<br>
<br>

### Route : api/user/:id

Method : PATCH  
Suivre un utilisateur

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | Yes      |

| Body         | Type   | Required |
| ------------ | ------ | -------- |
| `idToFollow` | string | Yes      |

<br>
<br>

### Route : api/user/:id

Method : PATCH  
Arréter de suivre un utilisteur

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | Yes      |

| Body           | Type   | Required |
| -------------- | ------ | -------- |
| `idToUnfollow` | string | Yes      |

<br>
🔶 🔶 Post 🔶 🔶
<br>
<br>

### Route : api/post/

Method : GET  
Affiche la liste des posts

<br>
<br>

### Route : api/post/

Method : POST  
enregistre un post

| form-data  | Type   | Required |
| ---------- | ------ | -------- |
| `posterId` | string | Yes      |
| `message`  | string | No       |
| `video`    | string | No       |
| `image`    | file   | No       |

<br>
<br>

### Route : api/post/:id

Method : PUT  
Mise à jour d'un post

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body      | Type   | Required |
| --------- | ------ | -------- |
| `message` | string | Yes      |

<br>
<br>

### Route : api/post/:id

Method : DELETE  
Suppression d'un post

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

<br>
🔶 🔶 Like / unlike 🔶 🔶
<br>
<br>

### Route : api/post/like-post/:id

Method : PATCH  
like un post

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body     | Type   | Required | Comment |
| -------- | ------ | -------- | ------- |
| `likers` | string | Yes      | id user |

<br>
<br>

### Route : api/post/unlike-post/:id

Method : PATCH  
unlike un post

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body     | Type   | Required | Comment |
| -------- | ------ | -------- | ------- |
| `likers` | string | Yes      | id user |

<br>
🔶 🔶 Comment post 🔶 🔶
<br>
<br>

### Route : api/post/comment-post/:id

Method : PATCH  
ajouter un commentaire

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body              | Type   | Required |
| ----------------- | ------ | -------- |
| `commenterId`     | string | Yes      |
| `commenterPseudo` | string | Yes      |
| `text`            | string | Yes      |

<br>
<br>

### Route : api/post/edit-comment-post/:id

Method : PATCH  
editer un commentaire

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body          | Type   | Required |
| ------------- | ------ | -------- |
| `commenterId` | string | Yes      |
| `text`        | string | Yes      |

<br>
<br>

### Route : api/post/delete-comment-post/:id

Method : PATCH  
supprimer un commentaire

| Params | Type   | Required | Comment    |
| ------ | ------ | -------- | ---------- |
| `id`   | string | Yes      | id du post |

| Body          | Type   | Required |
| ------------- | ------ | -------- |
| `commenterId` | string | Yes      |

<br>
<br>
