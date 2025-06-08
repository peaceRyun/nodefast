const Task = require('../models/Task');

const taskController = {};

taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task({ task, isComplete });
        await newTask.save();
        return res.status(200).json({ status: 'success', data: newTask });
    } catch (error) {
        res.status(400).json({ status: 'fail', error });
    }
};

taskController.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); //mongoose 문서에 find와 같이 DB를 읽어들이는 메서드들을 공부 할 수 있다.;
        return res.status(200).json({ status: 'ok', data: tasks });
    } catch (error) {
        res.status(400).json({ status: 'fail', error });
    }
};
module.exports = taskController;
