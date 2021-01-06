import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [firstname, setfirstName] = useState("");
  const [choice, setchoice] = useState("");
  const [size, setsize] = useState("");
  const [users, setUsers] = useState([]);
  const [fname, setfName] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/select")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const addOrder = () => {
    Axios.post("http://localhost:3001/insert", {
      firstname: firstname,
      choice: choice,
      size: size,
    }).then(() => {
      console.log("success");
    });
  };

  const updateOrder = () => {
    Axios.post("http://localhost:3001/update", {
      name: name,
    }).then(() => {
      console.log("success");
    });
  };

  const removeOrder = () => {
    Axios.post("http://localhost:3001/delete", {
      fname: fname,
    }).then(() => {
      console.log("success");
    });
  };

  const displayUsers = users.map((user) => (
    <div key={user.ID}>
      <div class="span">
        <h>
          <p> </p>
          {user.name}
          <br />
          {user.status}
        </h>
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div className="information">
        <div
          id="inputs"
          width="100%"
          height="100%"
          class="input-group input-group-sm mb-3"
        >
          <form name="input">
            <h1>Customer</h1>
            First name:{" "}
            <input
              type="text"
              name="firstname"
              placeholder="..."
              id="firstname"
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
            />
            <p>Coffee choices (Type in your order)</p>
            {displayUsers}
            <ul>
              <input
                type="text"
                name="choice"
                onChange={(event) => {
                  setchoice(event.target.value);
                }}
              />

              <br />
              <br />

              <input
                type="text"
                name="choice"
                onChange={(event) => {
                  setchoice(event.target.value);
                }}
              />

              <br />
              <br />

              <input
                type="text"
                name="choice"
                onChange={(event) => {
                  setchoice(event.target.value);
                }}
              />

              <br />
              <br />

              <input
                type="text"
                name="choice"
                onChange={(event) => {
                  setchoice(event.target.value);
                }}
              />
            </ul>
            <label for="Size">Choose a Size:</label>
            <select
              id="size"
              name="Size"
              class="form-select"
              onChange={(event) => {
                setsize(event.target.value);
              }}
            >
              <option value="Small">Small</option>
              <option value="Regular">Regular</option>
              <option value="Large">Large</option>
            </select>
            <br />
            <br />
            <button onClick={addOrder}>Submit Order</button>
            <br />
            <br />
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={(event) => {
                setfName(event.target.value);
              }}
            />
            <button onClick={removeOrder}>Cancel Order</button>
          </form>
        </div>

        <div id="menu">
          <br />
          <br />
          <br />
          <br />

          <ul id="dynamic-list">
            <h1>Menu</h1>
            <li>
              <h2>Expresso ....... $1.20</h2>
            </li>
            <li>
              <h2>Macho ....... $1.20</h2>
            </li>
            <li>
              <h2>Black Coffee ....... $1.20</h2>
            </li>
          </ul>
          <br />
          <br />
          <br />

          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button onClick={updateOrder}>Change Status</button>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
