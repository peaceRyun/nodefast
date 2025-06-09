const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
