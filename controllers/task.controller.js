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

taskController.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, isComplete } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { task, isComplete },
            { new: true, runValidators: true } // new: true로 업데이트된 문서 반환
        );

        if (!updatedTask) {
            return res.status(404).json({ status: 'fail', message: '할일을 찾을 수 없습니다.' });
        }

        return res.status(200).json({ status: 'success', data: updatedTask });
    } catch (error) {
        res.status(400).json({ status: 'fail', error: error.message });
    }
};

taskController.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ status: 'fail', message: '할일을 찾을 수 없습니다.' });
        }

        return res.status(200).json({
            status: 'success',
            message: '할일이 삭제되었습니다.',
            data: deletedTask,
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', error: error.message });
    }
};
module.exports = taskController;
