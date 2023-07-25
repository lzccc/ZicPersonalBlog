import { useState, useRef, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import strings from "@/src/utils/globalString";
import { AuthContext } from "@/src/components/AuthContext";

function FileUpload({ setMdContent }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async () => {
    const file = fileInputRef.current.files[0];
    //console.log(file);
    const reader = new FileReader();
    reader.onloadend = (event) => {
      const fileContents = event.target.result;
      setMdContent(fileContents);
    };
    if (file) {
      reader.readAsText(file);
    }
    setSelectedFile(file);
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null; // Reset the file input value
  };

  return (
    <div>
      <input
        type="file"
        style={{ width: "90%" }}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".md"
      />
      {selectedFile && (
        <CloseIcon onClick={handleFileDelete}>Delete File</CloseIcon>
      )}
    </div>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "#d9832e",
  color: "white",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  fontFamily: "Poppins",
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CustomDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  justifyContent: "flex-end",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

function PlusButton({ handleClickOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "fixed",
    bottom: "2vw",
    right: "2vw",
    backgroundColor: "#d9832e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "26px",
    fontSize: isHovered ? "28px" : "26px",
    cursor: "pointer",
    transition: "transform 0.3s",
    outline: "none",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClickOpen}
    >
      +
    </button>
  );
}

export const ConfirmDialog = ({
  open,
  setOpen,
  toDelete,
  setDataAfterDelete,
  currentData,
}) => {
  const { username, password } = useContext(AuthContext);
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    console.log("to delete: " + toDelete);
    fetch(strings.serverURL + `/api/mdfile/${toDelete}`, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("An error occurred while deleting the content.");
          setOpen(false);
          return;
        }
        setDataAfterDelete(
          currentData.filter((item) => item.blogId !== toDelete)
        );
        setOpen(false);
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <BootstrapDialog
      fullWidth={true}
      maxWidth={"sm"}
      aria-labelledby="customized-dialog-title"
      open={open}
      onClose={handleClose}
    >
      <CustomDialogTitle id="customized-dialog-title">
        {"Delete the post?"}
      </CustomDialogTitle>
      <CustomDialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          Delete this post? This operation cannot be reverted.
        </DialogContentText>
      </CustomDialogContent>
      <CustomDialogActions>
        <Button style={{ color: "red" }} autoFocus onClick={handleDelete}>
          Confirm
        </Button>
      </CustomDialogActions>
    </BootstrapDialog>
  );
};

export const CustomizedDialogs = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [tagValue, setTagValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");
  const [mdContent, setMdContent] = useState("");
  const { username, password } = useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setError(false);
    setError2(false);
    setError3(false);
  };

  const handleTitleChange = (event) => {
    setTextValue(event.target.value);
    setError(false);
  };

  const handleTagChange = (event) => {
    if (event.target.value.length > 20) {
      setError2(true);
      return;
    }
    setError2(false);
    setTagValue(event.target.value);
  };

  const handleAboutChange = (event) => {
    if (event.target.value.length > 100) {
      setError3(true);
      return;
    }
    setError3(false);
    setAboutValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error2 || error3) {
      console.error("Form input error");
      return;
    }
    if (textValue.trim() === "") {
      setError(true);
    } else {
      // Perform your desired action here (e.g., submit the form)
      console.log("Form submitted");
      try {
        const response = await fetch(
          strings.serverURL + `/api/mdfile/createblog/user1`,
          {
            method: "POST",
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password),
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              link: textValue,
              meta: tagValue,
              text: aboutValue,
              fileContent: mdContent,
            }),
          }
        );

        if (response.ok) {
          alert("Document record created successfully!");
          const text = await response.text();
          handleClose();
          router.push(`/blogDisplayer?id=${text}`);
        } else {
          throw new Error("An error occurred while creating the content.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while creating the content.");
      }
    }
  };

  return (
    <div>
      <PlusButton handleClickOpen={handleClickOpen} />
      <BootstrapDialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Blog
        </CustomDialogTitle>
        <CustomDialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            required
            value={textValue}
            onChange={handleTitleChange}
            error={error}
            helperText={error ? "Field cannot be empty" : ""}
          />
        </CustomDialogContent>
        <CustomDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tags"
            type="text"
            fullWidth
            onChange={handleTagChange}
            variant="standard"
            error={error2}
            helperText={error2 ? "Length must less than 20" : ""}
          />
        </CustomDialogContent>
        <CustomDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="About"
            type="text"
            fullWidth
            onChange={handleAboutChange}
            variant="standard"
            error={error3}
            helperText={error3 ? "Length must less than 100" : ""}
          />
        </CustomDialogContent>
        <CustomDialogContent dividers>
          <FileUpload setMdContent={setMdContent} />
        </CustomDialogContent>
        <CustomDialogActions>
          <CustomButton autoFocus onClick={handleSubmit}>
            Start Writing!
          </CustomButton>
        </CustomDialogActions>
      </BootstrapDialog>
    </div>
  );
};

export const LoginDialog = ({ login, setLogin }) => {
  const { setUsername, setPassword } = useContext(AuthContext);
  const [userNameError, setUserNameError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  const [passWordValue, setPassWordValue] = useState("");

  const handleClose = () => {
    setLogin(false);
    setUserNameError(false);
    setPassWordError(false);
  };

  const handleUserNameChange = (event) => {
    if (event.target.value.length > 20) {
      setUserNameError(true);
      return;
    }
    setUserNameError(false);
    setUserNameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    if (event.target.value.length > 100) {
      setPassWordError(true);
      return;
    }
    setPassWordError(false);
    setPassWordValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userNameError || passWordError) {
      console.error("Form input error");
      return;
    }
    setUsername(userNameValue);
    setPassword(passWordValue);
    setLogin(false);
  };

  return (
    <div>
      <BootstrapDialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={login}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Login
        </CustomDialogTitle>

        <CustomDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            onChange={handleUserNameChange}
            variant="standard"
            error={userNameError}
            helperText={userNameError ? "Length must less than 20" : ""}
          />
        </CustomDialogContent>
        <CustomDialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="text"
            fullWidth
            onChange={handlePasswordChange}
            variant="standard"
            error={passWordError}
            helperText={passWordError ? "Length must less than 100" : ""}
          />
        </CustomDialogContent>
        <CustomDialogActions>
          <CustomButton autoFocus onClick={handleSubmit}>
            Comfirm
          </CustomButton>
        </CustomDialogActions>
      </BootstrapDialog>
    </div>
  );
};
