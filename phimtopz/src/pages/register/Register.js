import { useState } from "react";
import FormInput from "./FormInput";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import axios from "axios";

const Register = () => {
  const [userList, setUserList] = useState([]);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  let navigate = useNavigate();

  const fetchUserList = async () => {
    try {
      // const params = { page, limit };
      const response = await userApi.getAll();
      setUserList(response);
      // console.log("success to fetch product list: ", response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://624bab2444505084bc54160d.mockapi.io/user`, values)
      .then(async (response) => {
        console.log("add succcess!", response);
        navigate(`/login`);
        await fetchUserList();
      });

    console.log(values);
  };

  const onChange = (e) => {
    // console.log({ [e.target.name]: e.target.value });
    // console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <Link to="/" className="link-item">
          <CgClose />
        </Link>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
