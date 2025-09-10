const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let idCounter = 1;

// Ajoute une nouvelle tâche
app.post('/tasks', (req, res) => {
    const { title, state } = req.body;
    const task = { id: idCounter++, title, state: state ?? "en cours" };
    tasks.push(task);
    res.send("ok");
});

// Récupère la liste complète des tâches
app.get('/tasks', (req, res) => {
    res.json(tasks)
});

// Modifie une tâche spécifique
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, state } = req.body;

    const task = tasks.find(t => t.id === parseInt(id));

    if (title !== undefined) task.title = title;
    if (state !== undefined) task.state = state;

    res.json(task);
});

// Supprime une tâche spécifique
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));

    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
});

// Marquage de la tâche (complétée ou non complétée)
app.patch('/tasks/:id/completed', (req, res) => {
    const  { id } = req.params;
    const  { state } = req.body;

    const task = tasks.find(t => t.id === parseInt(id));

    if (state !== undefined) task.state = state;

    res.json(talk);
});

app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur http://localhost:${port}`);
})
