import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/features/cardSlice";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [formDetails, setFormDetails] = useState(initialData);
  console.log("login", formDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
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

    let response = await axios.post("http://localhost:1001/user/login", {
      email: formDetails.email,
      password: formDetails.password,
    });
    if (response.data.message !== true) {
      toast.error("Invalid credentials", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (response.data.message) {
      const user = formDetails.email.slice(0, formDetails.email.indexOf("@"));
      console.log("user", user);
      dispatch(setCurrentUser(user));
      toast.success(`Welcome ${user}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormDetails(initialData);
      navigate("/home");
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
        onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default Login;
