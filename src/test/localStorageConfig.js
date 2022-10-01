// import LocalStorageKey from '../constant/LocalStorageKey'
// Logined User Config
import React from 'react'

const localStorageConfig = () => {
    localStorage.setItem('access_token', 
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aHVvbmduZ28iLCJwYXlsb2FkIjp7InJvbGVOYW1lIjoiQ2FuZGlkYXRlIn0sImlzcyI6IkhSX1RFQU0iLCJleHAiOjE2NjQ2MTY4NTQsImlhdCI6MTY2NDYwOTY1NH0.rFCZZW1ZPK455t5BiuJ4uTbNtvGfSWn_LYru3g44F8dd5PFzI7Wrm5AqG33TseW5UOJXytApGNOM2U0ay_GxQw");
    localStorage.setItem('user', JSON.stringify({
        "id": "SE160605",
        "username": "thuongngo",
        "roleName": "Candidate",
        "firstName": "ngo",
        "lastName": "thuong",
        "urlImg": "abcdefgh",
        "email": "thuongmc2k2@gmail.com",
        "phone": "0963245204",
        "gender": true,
        "status": true,
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aHVvbmduZ28iLCJwYXlsb2FkIjp7InJvbGVOYW1lIjoiQ2FuZGlkYXRlIn0sImlzcyI6IkhSX1RFQU0iLCJleHAiOjE2NjQ2MTY4NTQsImlhdCI6MTY2NDYwOTY1NH0.rFCZZW1ZPK455t5BiuJ4uTbNtvGfSWn_LYru3g44F8dd5PFzI7Wrm5AqG33TseW5UOJXytApGNOM2U0ay_GxQw",
        "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aHVvbmduZ28iLCJwYXlsb2FkIjp7InJvbGVOYW1lIjoiQ2FuZGlkYXRlIn0sImlzcyI6IkhSX1RFQU0iLCJleHAiOjE2NjQ3ODI0NTQsImlhdCI6MTY2NDYwOTY1NH0.aRz5vkD6jOrzLw76N_00f3bY8Nq0HRcUuYSWZuKu3kdvUHiiAcVc69eQHH_tDEtvyp3Da2RVq3z-oNoStgLw4Q"
    }));
}

export default localStorageConfig
