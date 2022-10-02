// import LocalStorageKey from '../constant/LocalStorageKey'
// Logined User Config
import React from 'react'

export const localStorageConfig = () => {
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

export const localStorageConfig_LoginGoogle = () => {
    localStorage.setItem('access_token',
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWFuZ2h1eWhpaGkxMjhAZ21haWwuY29tIiwicGF5bG9hZCI6eyJyb2xlTmFtZSI6IkNhbmRpZGF0ZSJ9LCJpc3MiOiJIUl9URUFNIiwiZXhwIjoxNjY0NjE3MDk0LCJpYXQiOjE2NjQ2MDk4OTR9.d82CwWGQLqSTFY6LrdvWMprpxbjlphvs9j6WdefzGlnTDJfJbkhIR7ccmDgdpn5xcdadUBpfyzkNP_oOu45agQ");
    localStorage.setItem('user', JSON.stringify({
        "id": "cf299937-9dd2-4917-90dd-ea5967ed853a",
        "username": "quanghuyhihi128@gmail.com",
        "roleName": "Candidate",
        "firstName": "Quang",
        "lastName": "Huy Nguyá»…n ",
        "urlImg": "https://lh3.googleusercontent.com/a-/ACNPEu_XKGxCtTNZ5xOe6-73p1XOIBWxdy3HVn82mXhliQ=s96-c",
        "email": "quanghuyhihi128@gmail.com",
        "phone": "",
        "gender": true,
        "status": true,
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWFuZ2h1eWhpaGkxMjhAZ21haWwuY29tIiwicGF5bG9hZCI6eyJyb2xlTmFtZSI6IkNhbmRpZGF0ZSJ9LCJpc3MiOiJIUl9URUFNIiwiZXhwIjoxNjY0NjE3MDk0LCJpYXQiOjE2NjQ2MDk4OTR9.d82CwWGQLqSTFY6LrdvWMprpxbjlphvs9j6WdefzGlnTDJfJbkhIR7ccmDgdpn5xcdadUBpfyzkNP_oOu45agQ",
        "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWFuZ2h1eWhpaGkxMjhAZ21haWwuY29tIiwicGF5bG9hZCI6eyJyb2xlTmFtZSI6IkNhbmRpZGF0ZSJ9LCJpc3MiOiJIUl9URUFNIiwiZXhwIjoxNjY0NzgyNjk0LCJpYXQiOjE2NjQ2MDk4OTR9.Ie2h-VKYmygHyLdD0xqwiJdW5HO6e7M_FgsDy5rCeySqldJi-7CMGwxletv8BI7P30hC7LrDyfKsVH3gwya-qw"
    }));
}