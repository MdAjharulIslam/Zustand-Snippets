import React, { useState } from "react";
import { useUserStore } from "./store/UserStore";

const UserProfile = () => {
  const { name, age, setName, setAge, resetUser,count,setCount} = useUserStore();
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
 
  


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>count:{count}</p>
      

      <div style={{ margin: "10px" }}>
        <input
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={() => setName(newName)}>Update Name</button>
      </div>

      <div style={{ margin: "10px" }}>
        <input
          type="number"
          placeholder="New Age"
          value={newAge}
          onChange={(e) => setNewAge(Number(e.target.value))}
        />
        <button onClick={() => setAge(newAge)}>Update Age</button>
      </div>

      <button onClick={resetUser} style={{ marginTop: "10px" }}>
        Reset User
      </button>
      <button onClick={setCount}>count+</button>
    </div>
  );
};

export default UserProfile;
