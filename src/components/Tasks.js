import Task from "./Task"


const Tasks = ({tasks, toggleTask, deleteTask}) => {
    return (
        <>
            {tasks.map((task) => 
                <Task key = {task.id} task = {task} toggleTask = {toggleTask} deleteTask = {deleteTask}/>
            )}
        </>
    )
}

export default Tasks
