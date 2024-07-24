import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [storeNames, setstoreNames] = useState(() => {
    const saveName = localStorage.getItem("storeNames");
    return saveName ? JSON.parse(saveName) : [{ userName: "Kunle" }, {userName: "Jide"}];
  });
  const newName = () => {
    setstoreNames([...storeNames, { userName: name }]);
    setName("");
  };

  //   console.log(name);
  const clearName = () => {
    localStorage.removeItem("storeNames")
    setstoreNames([])
  }

  useEffect(() => {
    localStorage.setItem("storeNames", JSON.stringify(storeNames));
  }, [storeNames]);
  return (
    <div>
      <h1>Welcom To My InfoPage</h1>

      <section>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <button onClick={newName}>Enter</button>
      </section>
      <section>
        <h2>List Of My Names</h2>
        <ul>
          {storeNames.map((data, index) => (
            <li key={index}> {data.userName}</li>
          ))}
        </ul>
      </section>
      <section>
        <button onClick={clearName}>Clear Your Info</button>
      </section>
    </div>
  );
};

export default Info;
