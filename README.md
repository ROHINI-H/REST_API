# REST_API – User Management (Node.js + Express)

This project is a simple RESTful API built using **Node.js** and **Express.js** for managing a list of users. It was created as part of an assignment to demonstrate key backend development concepts including routing, middleware, validation, error handling, and HTTP methods.

GitHub link: https://github.com/ROHINI-H/REST_API.git

## 🛸 Features

- Fetch all users
- Fetch user by ID
- Add a new user
- Update an existing user
- Delete a user by ID
- Request logging middleware
- Input validation middleware
- Proper error handling with meaningful responses

## 🛠️ Tech Stack

- Node.js
- Express.js

## 🗃️ Project Structure
<pre>
REST_API/
├── index.js 
├── package.json 
├── README.md 
└── Screenshots/
  ├── GET method - all users.png
  ├── GET method using 1st id.png
  ├── GET method using invalid id.png
  ├── GET method using id.png
  ├── POST Method - missing age field.png
  ├── POST Method - missing hobby field.png
  ├── POST Method.png
  ├── PUT Method.png
  ├── get the users after updating.png
  ├── DELETE Method.png
  └── test logs.png
</pre>

## 💻 Getting Started

1. **Clone the repository**:
  ```bash
  git clone https://github.com/ROHINI-H/REST_API.git
  cd REST_API
  ```
2. **Install Dependencies**:
  ```bash
  npm install
  ```
3. **Start the Server**:
  ```bash
  node index.js
```
The server will start on `http://localhost:2912`

## 🎆 API Endpoints
### ✅ GET /users
Returns a list of all users.

**Response:**
```
[
  {
    "id": "1",
    "name": "Rohini",
    "age": 25,
    "hobby": "Reading"
  },
  ...
]
```
### ✅ GET /users/:id
Fetch a specific user by their ID.

**Response (200 OK):**
```
{
  "id": "1",
  "name": "Rohini",
  "age": 25,
  "hobby": "Reading"
}
```
**Error (404 Not Found):**
```
{
  "message": "User does not exist"
}
```
### ✅ POST /user
Add a new user.

**Request Body:**
```
{
  "name": "Raji",
  "age": 28,
  "hobby": "Cycling"
}
```
**Validation Error (400):**
```
{
  "message": "Missing age field: Please enter your age"
}
```
### ✅ PUT /user/:id
Update an existing user.

**Request Body:**
```
{
  "name": "Raji",
  "age": 28,
  "hobby": "Cycling"
}
```
**Response:**
```
{
  "id": "2",
  "name": "Raji",
  "age": 28,
  "hobby": "Cycling"
}
```
### ✅ DELETE /user/:id
Delete a user by ID.

**Response (200):**
```
{
  "id": "3",
  "name": "Shamya",
  "age": 17,
  "hobby": "Playing"
}
```
**Error (404):**
```
{
  "message": "User does not exist"
}
```

## 🧪Testing
- API was tested using `ThunderClient` extension in VS code.
- Test result screenshots are included in the screenshots/ folder.

## 🫱🏼‍🫲🏼Contributing
If you'd like to contribute to this project, please fork this repository and submit a pull request. You can also report issues or suggest improvements by opening an issue.

## 🔏License
This project is licensed under the MIT License.

## 🙇🏻‍♀️Acknowledgments
Special thanks to Internshala trainings for providing the training to learn NodeJS and ExpressJS. This helped me to develop this project.

## 🚀Connect with me
If you'd like to learn more about my work or connect professionally, you can find me on LinkedIn: www.linkedin.com/in/rohini-h
