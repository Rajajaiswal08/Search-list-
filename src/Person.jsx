import { useState } from "react";

function Person() {
  const [name, setName] = useState([]);

  const tableRows = name.map((n, i) => (
    <tr key={i}>
      <td>{n}</td>
    </tr>
  ));

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const newName = [...name, userName];

    setName(newName);
    e.target.reset();
  };

  const containerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
  };

  const tableStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#ffffff",
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
  };

  const inputStyle = {
    width: "100%",
    height: "40px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#e9ecef",
    border: "1px solid #ced4da",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
  };

  return (
    <div className="row border mt-4 p-5" style={containerStyle}>
      <div className="col-lg-8">
        <>
          <h2>Names List</h2>
          <table className="table table-striped" style={tableStyle}>
            <thead>
              <tr>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </>
      </div>
      <div className="col-lg-4">
        <>
          <h2>User Registration</h2>
          <form onSubmit={formSubmitHandler} style={formStyle}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                style={inputStyle}
              />
            </div>
            <button type="submit" style={buttonStyle}>
              Register
            </button>
          </form>
        </>
      </div>
    </div>
  );
}

export default Person;
