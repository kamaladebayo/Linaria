import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AuthNav from "./AuthNav";
import Task from "./Task";
import './css/Tasks.css'

const Tasks = () => {
    return ( 
        <div className="tasks">
            <AuthNav />
            <main>
                <h1>Daily Tasks</h1>
                <div className="tasks__container">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </main>
            <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 25, right: 25 }}>
                <AddIcon />
            </Fab>
        </div>
     );
}
 
export default Tasks;