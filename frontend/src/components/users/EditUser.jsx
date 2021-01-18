import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
  
    name: "",
    age: "",
    skill: "",
    post_image:null
  });

  const { name, age, skill } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  useEffect(() => {
    loadUser();
  }, []);


  function onSubmit(e) {
    let url = `http://127.0.0.1:8000/api/Profiles/${id}/`;
    e.preventDefault();

    Axios.put(url, user).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Not allowed");
      }
      history.push("/");
    });
  }

  const loadUser = async () => {
    const result = await Axios.get(`http://127.0.0.1:8000/api/Profiles/${id}`);
    setUser(result.data);
  }

    // changeEditMode=()=>{
    //     console.log('aa')
    // }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
           
          </div>
          <div className="form-group">
            <input
              type="number"
              class="form-control"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              class="form-control"
              name="skill"
              placeholder="skill"
              value={skill}
              onChange={(e) => onInputChange(e)}
            />
          </div >


          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
