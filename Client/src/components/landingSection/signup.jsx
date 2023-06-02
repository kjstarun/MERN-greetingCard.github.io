import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [formDetails, setFormDetails] = useState(initialData);
  console.log("register", formDetails);

  const handleRegister = async () => {
    if (formDetails.email === "") {
      return setIsEmailError(true);
    } else if (formDetails.password === "") {
      return setIsPasswordError(true);
    }
    const emailRegex =
      /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailRegex.test(formDetails.email);
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{9,29}$/;
    const isPasswordValid = passwordRegex.test(formDetails.password);

    if (!isEmailValid) {
      return setIsEmailError(true);
    }
    if (!isPasswordValid) {
      return setIsPasswordError(true);
    }

    let response = await axios.post("http://localhost:1001/user/register", {
      email: formDetails.email,
      password: formDetails.password,
    });

    console.log("Message", response);

    if (response.data.message) {
      toast.success("User registered successfully, please login to continue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormDetails(initialData);
    }
  };
  return (
    <form>
      <TextField
        label="Email"
        sx={{ fontFamily: "cursive!important" }}
        error={isEmailError}
        helperText={isEmailError ? "Incorrect entry." : ""}
        value={formDetails.email}
        onChange={(e) => {
          setFormDetails((prev) => {
            return { ...prev, email: e.target.value };
          });
          setIsEmailError(false);
        }}
        id="custom-css-outlined-input"
      />
      <TextField
        label="Password"
        error={isPasswordError}
        helperText={isPasswordError ? "Incorrect entry." : ""}
        value={formDetails.password}
        onChange={(e) => {
          setFormDetails((prev) => {
            return { ...prev, password: e.target.value };
          });
          setIsPasswordError(false);
        }}
        id="custom-css-outlined-input"
      />
      <Button
        variant="secondary"
        className="share-button"
        onClick={handleRegister}>
        Register
      </Button>
    </form>
  );
};

export default Signup;
