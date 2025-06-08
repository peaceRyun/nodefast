const express = require('express');
const { createTask, getTasks } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
// router.put("/:id", 할일 삭제 함수 실행)
// router.delete("/:id", 할일 삭제)

module.exports = router;
