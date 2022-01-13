import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
const Task = ({task, toggleTask, deleteTask}) => {
   
    return (
        <div className={`task ${task.reminder ? `reminder` : ``}` } onDoubleClick = {()=>toggleTask(task.id)} >
            <h3>{task.text} <FaTimes style = {{color:'red', cursor:'pointer'}} onClick = {()=>deleteTask(task.id)}/></h3>
            <p>{task.day}</p>
            <p><Link to = {`/task/${task.id}`}>View Detail</Link></p>
        </div>
    )
}

export default Task
