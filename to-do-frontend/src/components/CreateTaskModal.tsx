import React, { useState } from "react";
import { Modal, makeStyles, TextField, Button } from "@material-ui/core";
import { TaskAPI } from "../api/task.api";
import { TaskDTO } from "../api/dto/task.dto";

interface Props {
  open: boolean;
  handleClose: () => void;
  onTaskCreated: (task: TaskDTO) => void;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CreateTaskModal = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
      width: "100%",
    },
    createBtn: {
      width: "100%",
      marginTop: 10,
    },
  }));
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] =useState<undefined | string>(undefined);

  const createTask = async () => {
    const resp = await TaskAPI.createOne({
      title,
      description,
    });

    props.onTaskCreated(resp);

    console.log("New Task", resp);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Create New Task</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <TextField
        placeholder="Title"
        variant="filled"
        className={classes.textField}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        placeholder="Description"
        variant="filled"
        className={classes.textField}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        className={classes.createBtn}
        onClick={createTask}
      >
        Create New Task
      </Button>
    </div>
  );

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default CreateTaskModal;
