import { useState, useEffect } from "react";
import "./pop.css";
import axios from "axios";

function UserForm(props) {
  const baseURL = "http://127.0.0.1:5000/";
  const regex = /^[a-zA-Z0-9-]+$/;

  function handleLogin(e) {
    e.preventDefault();
    // Code to handle login goes here
    props.toggle();
  }
  const [inputs, setInputs] = useState({});
  const [api, setapis] = useState({});

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (regex.test(value) !== true) alert("No Special charecters are allwoed");
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const fetchData = async (event) => {
    event.preventDefault();
    try {
      console.log(inputs.username);
      const response = await axios.get(baseURL + "?" + inputs.username);
      setapis(response.data);
    } catch (error) {
      console.error("There was an error fetching the data", error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={fetchData}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <button onClick={props.toggle}>Close</button>
      </div>
    </div>
  );
}

export default UserForm;
