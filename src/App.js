import Hobbies from "./components/Hobbies";
import Users from "./components/Users";
import { useState, useEffect } from "react";
import $ from "jquery";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Umar",
    },
    {
      id: 2,
      name: "Saad",
    },
    {
      id: 3,
      name: "Asad",
    },
  ]);

  useEffect(() => {
    // fetch('http://localhost:4000/users')
    //  .then(resp => resp.json())
    //  .then(response => setUsers(response.data))
    //  fetch('http://localhost:4000/hobbies', {method: "GET", })
    //  .then(resp => resp.json())
    //  .then(response => setUsers(response.data))
  }, []);

  const addUser = (user) => {
    console.log(user);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    console.log("id:: ", id);
    setUsers(users.filter((usr) => usr.id !== id));
  };

  const hobbiesArray = [
    {
      id: 1,
      passion: "Basketball",
      name: "Umar",
      year: "1993",
      userId: 1,
    },
    {
      id: 2,
      passion: "Basketball",
      name: "Umar",
      year: "1993",
      userId: 1,
    },
    {
      id: 3,
      passion: "Basketball",
      name: "Umar",
      year: "1993",
      userId: 3,
    },
  ];

  const [hobbies, setHobbies] = useState([]);
  const [userHobbyId, setHobbyUserIdForAdding] = useState("");

  const addHobby = (hobby) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newHobby = { id, ...hobby };
    setHobbies([...hobbies, newHobby]);
    hobbiesArray.push(newHobby);
  };

  const deleteHobby = (id) => {
    console.log("id:: ", id);
    setHobbies(hobbies.filter((hby) => hby.id !== id));
  };

  const showUserHobbies = (id) => {
    console.log("show this users hobby --> ", id);
    setHobbies(
      hobbiesArray.filter((hby) => {
        return hby.userId === id;
      })
    );
    setHobbyUserIdForAdding(id);
    console.log(hobbies);
  };

  return (
    <div className="container">
      <div className="card card-primary custom-block">
        <div className="card-header">
          <h4>User Hobbies</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <Users
              users={users}
              onAdd={addUser}
              onDelete={deleteUser}
              show={showUserHobbies}
            />
            <Hobbies
              hobbies={hobbies}
              onAdd={addHobby}
              onDelete={deleteHobby}
              userId={userHobbyId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
