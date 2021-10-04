import React from "react";
import { useState } from "react";

const Hobbies = ({ hobbies, onAdd, onDelete, userId }) => {
  const [passion, setHobbyPassion] = useState("");
  const [name, setHobbyName] = useState("");
  const [year, setHobbyYear] = useState("");

  const hobbiesList = hobbies.map((hobby) => (
    <tr key={hobby.id}>
      <td>{hobby.passion}</td>
      <td>{hobby.name}</td>
      <td>{hobby.year}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDelete(hobby.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !passion || !year || userId === "") {
      console.log("userHobbyId ---> ", userId);
      if (userId === "") {
        alert("please select user first");
        return;
      }
      alert("please add all data");
      return;
    }

    onAdd({ passion, name, year, userId });
    setHobbyPassion("");
    setHobbyName("");
    setHobbyYear("");
  };

  return (
    <div className="col-md-8">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Select Passion"
                value={passion}
                onChange={(e) => setHobbyPassion(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter User Hobby"
                value={name}
                onChange={(e) => setHobbyName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setHobbyYear(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="btn btn-success w-100"
              value="Add"
            />
          </div>
        </div>
      </form>

      {hobbies.length > 0 ? (
        <table className="table table-striped table-bordered">
          <tbody>{hobbiesList}</tbody>
        </table>
      ) : (
        <p className="lead">No Hobbies Found</p>
      )}
    </div>
  );
};

export default Hobbies;
