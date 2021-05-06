import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [num, setNum] = useState();
    const [name,setName]=useState();
    const [move,setMoves]=useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <h1> you have Choose <span style={{color:"red"}}>{num}</span> value </h1>
      <h1> My name is <span style={{color:"red"}}>{name}</span> value </h1>
      <h1> I have<span style={{color:"red"}}>{move}</span> moves </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};

export default List;
