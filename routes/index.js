//1. 할일 추가      post /tasks
//2. 할일 보여주기  get /tasks
//3. 할일 수정하기  put /tasks/:id
//4. 할일 삭제하기  delete /tasks/:id

const express = require('express');
const router = express.Router();
const taskApi = require('./task.api');

router.use('/tasks', taskApi);

module.exports = router;
