import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation;

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();
      setTask(data);
      setLoading(false);

      if (res.status === 404) {
        navigate("/");
      }
    };

    fetchTask();
  }, []);

  return (
    <div className="task">
      <p>{pathname}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button
        color="orange"
        title="Go Back"
        onClick={() => {
          console.log('I am clicked')
        }}
      />
    </div>
  );
};

export default TaskDetails;
