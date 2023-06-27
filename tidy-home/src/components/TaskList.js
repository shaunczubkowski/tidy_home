import Table from "./Table";
import taskService from '../services/TaskService';

function TaskList({tasks}) {
    const taskTableConfig = {
        name: "tasks",
        columnHeaders: [
            "Name",
            ""
        ],
        rowData: tasks,
        rowAction: [
            {
                actionName: "Edit",
                actionCallback: (id) => { console.log(id) }
            },
            {
                actionName: "Delete",
                actionCallback: (id) => handleDeleteTask(id)
            }
        ]
    }

    const handleDeleteTask = (id) => {
        console.log(id)
        taskService.deleteTaskById(id).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
            <div>
                <Table tableConfig={taskTableConfig}/>
            </div>
        </>
    );
}

export default TaskList;