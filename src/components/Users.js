import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Users = ({ users, onAdd, onDelete, show }) => {
  const [name, setName] = useState("");

  const usersList = users.map((user) => (
    <li key={user.id} className="list-group-item fw-700">
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          show(user.id);
        }}
      >
        {user.name}
      </span>
      <FaTimes
        style={{ color: "red", cursor: "pointer", float: "right" }}
        onClick={() => {
          onDelete(user.id);
        }}
      />
    </li>
  ));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("please add user");
      return;
    }

    onAdd({ name });
    setName("");
  };

  return (
    <div className="col-md-4">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value=""
                placeholder="Add User"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            {/* <Button color='btn-success' text="Add" functionality="addUsers"/> */}
            <input type="submit" className="btn btn-success" value="Add" />
          </div>
        </div>
      </form>

      {users.length > 0 ? (
        <ul className="list-group"> {usersList} </ul>
      ) : (
        <p className="lead">No Users Found</p>
      )}
    </div>
  );
};

export default Users;
