import { useEffect, useState } from "react";
import styled from "styled-components";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Dob, setDob] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);

  console.log(name, age, Dob, phoneNum, bio);

  const [storeProfile, setstoreProfile] = useState(() => {
    const saveInfo = localStorage.getItem("storeProfile");
    return saveInfo ? JSON.parse(saveInfo) : [{}];
  });

  const createNewProfile = () => {
    const avatarURL = URL.createObjectURL(avatar);

    setstoreProfile([
      ...storeProfile,
      { name, age, Dob, phoneNum, bio, avatar: avatarURL },
    ]);
    setAge("");
    setBio("");
    setDob("");
    setName("");
    setphoneNum("");
    setAvatar(null);
  };
  const clearData = () => {
    localStorage.removeItem("storeProfile")
    setstoreProfile([])
  }
  useEffect(() => {
    localStorage.setItem("storeProfile", JSON.stringify(storeProfile));
  }, [storeProfile]);
  // {/* create a simple profile with a name, age, gender, DOB, phoneNum, bio, Profile Picture
  return (
    <Container>
      <div>
        <section>
          <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        </section>
        <section>
          <input
            type="text"
            placeholder="Enter Your Name:"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>

        <select
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        >
          <option value="15-20">21-26</option>
          <option value="31-36">41-46</option>
          <option value="51-56">61-66</option>
          <option value="70">and above</option>
        </select>
        <section>
          <input
            type="date"
            placeholder="Enter Your DOB:"
            value={Dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </section>
        <section>
          <input
            type="number"
            placeholder="PhoneNum:"
            value={phoneNum}
            onChange={(e) => {
              setphoneNum(e.target.value);
            }}
          />
          <section>
            <textarea
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
              placeholder="Bio"
            ></textarea>
          </section>
        </section>
        <section>
          <span>Male</span>
          <input type="radio" />
          <span>FeMale</span>
          <input type="radio" />
        </section>
        <section>
          <button onClick={createNewProfile}>Submmit</button>
          <button onClick={clearData}>Claer Info</button>
        </section>
      </div>
      <Data>
        {storeProfile.map((data, index) => (
          <Card key={index}>
            <h3> {data.name} </h3>
            <p> {data.age} </p>
            {/* <p> {data.date} </p> */}
            <p>{data.phoneNum}</p>
            <p> {data.bio} </p>
            {/* <p>Gender</p> */}
            <img src={data.avatar} alt={data.name} width="100" height="100" />
          </Card>
        ))}
      </Data>
    </Container>
  );
};

export default Profile;
const Container = styled.div`
  margin: 30px;
  justify-content: space-around;
  display: flex;
`;

const Data = styled.div``;
const Card = styled.div``;
