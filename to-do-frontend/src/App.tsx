import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskAPI } from "./api/task.api";
import { TaskDTO } from "./api/dto/task.dto";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import Task from "./components/Task";
import CreateTaskModal from "./components/CreateTaskModal";
import EditTaskModal from "./components/EditTaskModal";

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  const [updateTaskModalOpen, setUpdateTaskModalOpen] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState<undefined | TaskDTO>(
    undefined
  );

  const addTask = (task: TaskDTO) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((x) => x.id !== taskId));
  };

  const updateTask = (task: TaskDTO) => {
    setTasks(
      tasks.map((x) => {
        if (x.id === task.id) return task;
        return x;
      })
    );
  };

  useEffect(() => {
    async function fetchAll() {
      const resp = await TaskAPI.getAll();

      setTasks(resp);
    }

    fetchAll();
  }, []);

  const onTaskEditBtnClicked = (task: TaskDTO) => {};

  return (
    <div className="App">
      <CreateTaskModal
        open={createTaskModalOpen}
        handleClose={() => setCreateTaskModalOpen(false)}
        onTaskCreated={addTask}
      />

      <EditTaskModal
        data={taskBeingEdited}
        open={updateTaskModalOpen}
        handleClose={() => setUpdateTaskModalOpen(false)}
        onTaskUpdate={updateTask}
      />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            To Do's Management
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCreateTaskModalOpen(true)}
          >
            Create Task
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={1} style={{ padding: 10 }}>
        {tasks.map((task) => {
          return (
            <Grid item xs={3}>
              <Task
                data={task}
                onTaskDelete={deleteTask}
                onTaskUpdate={(task: TaskDTO) => {
                  setTaskBeingEdited(task);
                  setUpdateTaskModalOpen(true);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;