import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Footer from "./components/Footer";
import TaskDetails from "./components/TaskDetails";

function App() {
  const [showClose, setShowClose] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const fromServer = await fetchTasks();
      setTasks(fromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();
    return data;
  };
  // Single task fetch
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();
    return data;
  };

  const taskToggle = async (id) => {
    const getTask = await fetchTask(id);
    const updTask = { ...getTask, reminder: !getTask.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        id === task.id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "delete",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addForm = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
   
      <div className="container">
         <Router>
            <Header
              toggleButtonForm={() => setShowClose(!showClose)}
              showClose={showClose}
            />
            <Routes>
             
              <Route path = '/' element={
                <>    
                  {showClose && <AddForm add={addForm} />}      
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      toggleTask={taskToggle}
                      deleteTask={deleteTask}
                    />
                  ) : (
                    "Nothing to display"
                  )}
                </>

              } />
              <Route path = '/About' element={<About />} />
              <Route path = '/task/:id' element={<TaskDetails />} />

              <Route>404 Not found</Route>
              
            </Routes>
            <Footer />
        </Router>
        
      </div>
    
  );
}

export default App;
