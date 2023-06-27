import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import SettingsHeader from "../components/SettingsHeader";
import taskService from '../services/TaskService';
import { useNavigate } from "react-router-dom";

function ManageTasks() {
    const [listOfTasks, setListOfTasks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        taskService.getTasks().then(({data}) => {
            setListOfTasks(data)
        })
        .catch((e) => {
            console.error(e.message);
        });
    }, []);
    
    const handleAddTaskClick = () => {
        navigate({pathname: "/settings/manage-tasks/add"});
    }

    return(
        <>
            <div style={Container}>
                <SettingsHeader title="Tasks" actionName="Add Task" onClickEvent={handleAddTaskClick} />
                <TaskList tasks={listOfTasks}/>
            </div>
        </>
    );
}
export default ManageTasks;

// Styles
const Container = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }