import React from "react";
import useStore  from "../store";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  
  return (
    <Input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
    />
  )
}

export default PokemonFilter;