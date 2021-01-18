import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = true;

const Home = () => {
  const [users, setUser] = useState([]);

  // const loadUsers = async () =>{
  //     const result = await axios.get("http://127.0.0.1:8000/api/Profiles/");
  //     console.log(result.data,'aaaaaaaaaaa');
  //     setUser(result.data)
  // }
  useEffect(() => {
    axios
      .get(`/Profiles/`)
      .then((response) => {
        // settitle(response.data)
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const deleteuser = async id =>{
  //             await axios.delete(`http://localhost:3002/users/${id}`);
  //             loadUsers();
  // }

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">skill</th>
              <th scope="col">photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.skill}</td>
                <td><image values={user.post_image}></image></td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/editUser/${user.id}`}
                  >
                    Edit
                  </Link>
                  {/* <Link class='btn btn-danger' onClick={() => deleteuser(user.id)}>Delete</Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
