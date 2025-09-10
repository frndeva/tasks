# 📋 API Liste de tâche (Express.js)

Une petite API REST en **Node.js + Express** pour gérer des tâches.  
Ce projet sert d’exemple pour apprendre à créer et tester une API avec Bruno.

## Installation

1. Clone le projet :
   git clone https://github.com/frndeva/tasks.git
   cd tasks
   
2. Installe les dépendances :
   npm install

3. Lance le serveur :
   npm start

## ➕ Créer une tâche
POST /tasks
Body json 
{
  "title": "Apprendre Express",
  "state": "en cours"
}

## 📋 Récupérer toutes les tâches
GET /tasks

## 🔍 Filtrer les tâches par état
GET /tasks?state=completed

## ✏️ Modifier une tâche
PUT /tasks/:id
Body json
{
  "title": "Apprendre Express.js",
  "state": "terminée"
}

## 🗑️ Supprimer une tâche
DELETE /tasks/:id
