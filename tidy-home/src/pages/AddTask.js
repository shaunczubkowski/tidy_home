import AddForm from "../components/AddForm";
import SettingsHeader from "../components/SettingsHeader";
import taskService from "../services/TaskService";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const navigate = useNavigate();
    const addTask = (task) => {
        taskService.addTask(JSON.stringify(task)).then((data) => {
            // Display task added message.
            console.log(data);
        });
    }

    const handleBackClick = () => {
        navigate({pathname: '/settings/manage-tasks'});
    }

    return (
        <div>
            <SettingsHeader actionName="Back" onClickEvent={handleBackClick} />
            <AddForm placeholderText="add task" onAdd={(task) => addTask(task)}></AddForm>
        </div>
    );
}

export default AddTask;