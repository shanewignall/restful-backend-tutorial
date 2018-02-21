// import todoList from '../controllers/todoListController';

export default (app) => {
    const todoList = require('../controllers/todoListController');

    app.route('/tasks')
        .get(todoList.getAllTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.completeTask)
        .delete(todoList.deleteTask);
};
