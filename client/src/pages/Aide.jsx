import React ,{ useState }from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import "../login.css";
import axios from "axios";

function Aide() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    comment: "",
  });
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const navigate = useNavigate();
  function validation(Data) {
    let errors = {};
    if (!Data.comment) {
      errors.comment = "Comment is required";
    } else {
      errors.comment = "";
    }
    return errors}
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);  
    if (err.password === "" && err.email === "") {
      axios.post("http://localhost:3001/login", values)
        .then(res => {
          if (res.data === "success") {
            navigate("/");
            alert("Welcome");
          } else {
            alert("no record");
          }
        })
        
       .catch(err => alert("errors",err));
    }
  };
  return (
    <div className="back">
      <Header />
      <div className="box ">
      <form action="" onSubmit={handleSubmit}>
        <div className="cont">
          <h3>Welcome!</h3>
          <div className="mb-3">
            <div className="wrapper">
              <div className="input-data">
                <textarea
                  name="aide"
                  id="aide"
                  autoComplete="off"
                  className="name-input1"
                  placeholder=""
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
export default Aide;
