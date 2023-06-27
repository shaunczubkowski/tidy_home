import axios from 'axios';

const TASK_API_REST_URL = 'http://localhost:8080/api/v0/tasks';

const addTask = (task) => {
    return axios.post(TASK_API_REST_URL, task, {
        headers: {
            "Content-Type": 'application/json'
        }
    });
}

const deleteTaskById = (id) => {
    return axios.delete(id);
};

const getTasks = () => {
    return axios.get(TASK_API_REST_URL);
};

const taskService = {
    addTask,
    deleteTaskById,
    getTasks,
}

export default taskService;