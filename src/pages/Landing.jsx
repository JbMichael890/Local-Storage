import { useEffect, useState } from "react";

const Landing = () => {
  const [name, setName] = useState("");
  const [storeNames, setStoreNames] = useState(() =>{
    const saveName =localStorage.getItem("storeNames")
    return saveName ? JSON.parse (saveName) :[
      {userName: "Ainyele"},
      {userName: "Michael"},
      {userName: "Boluwatife"},
    ]
  }

  )
  
  console.log(name);
  const newName  = () => {
    setStoreNames ([...storeNames,{userName:name}])
    setName()
  }
  useEffect 
  return (
    <div>
      <section>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />

        <br />

        <button onClick={newName}>Enter</button>
      </section>
      <section>
        <h1>List Of Names</h1>
        <ul>
          {storeNames.map((data, index) =>(
            <li key={index}>{data.userName}</li>
          ))}
        </ul>
      </section>
      <section>
        <button>Clear Data</button>
      </section>
    </div>
  );
};

export default Landing;
