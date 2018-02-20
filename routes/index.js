import todoList from '../controllers/todoListController';

export default (app) => {
    app.route('/todo')
        .get(todoList.getAllTasks)
        .post(todoList.createTask);

    app.route('/todo/:taskId')
        .get(todoList.getTask)
        .put(todoList.completeTask)
        .delete(todoList.deleteTask);
};
