import List from "../components/List";
import SettingsHeader from "../components/SettingsHeader";

function ManageTasks() {
    const listOfTasks = [
        'Clean Toilet',
        'Wash Bedding',
        'Dust Shelves',
        'Vacuum'
    ];

    return(
        <div>
            <SettingsHeader title="Tasks" actionName="Add Task"/>
            <List items={listOfTasks}/>
        </div>
    );
}

export default ManageTasks;