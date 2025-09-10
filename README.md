# 📋 Task List API (Express.js)

A small REST API in Node.js + Express for managing tasks.
This project serves as an example for learning how to create and test an API with Bruno.

## Installation

1. Clone the project: :
   git clone https://github.com/frndeva/tasks.git
   cd tasks
   
2. Install dependencies :
   npm install

3. Start the server :
   npm start

## ➕ Create a task
POST /tasks
Body json 
{
  "title": "Git",
  "state": "not completed"
}

## 📋 Retrieve all tasks
GET /tasks

## ✏️ Edit a task
PUT /tasks/:id
Body json
{
  "title": "Git",
  "state": "completed"
}

## 🗑️ Delete a task
DELETE /tasks/:id
