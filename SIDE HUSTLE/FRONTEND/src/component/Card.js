import React from "react";
import styled from "styled-components";
const Cd = styled.div`
  display: flex;
`;
const Cppq = styled.div`
  width: 200px;
  height: 200px;
  margin: 1em;
  padding: 1em;
  background: green;
  color: white;
`;
const Card = () => {
  return (
    <Cd>
      <Cppq>
        <h2>Card</h2>
        <h1>Title</h1>
        <p>body</p>
      </Cppq>
    </Cd>
  );
};

export default Card;
