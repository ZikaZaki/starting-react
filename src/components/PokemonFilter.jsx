import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  
  return (
    <Input
        type="text"
        value={filter}
        onChange={e => dispatch({
          type: "SET_FILTER",
          payload: e.target.value,
        })}
    />
  )
}

export default PokemonFilter;