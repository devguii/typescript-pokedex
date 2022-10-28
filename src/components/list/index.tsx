import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../card/index";
import { Container } from "./styles";

interface IReq {
  count: number;
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

export const List = () => {
  const [pokemon, setPokemon] = useState<IReq>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <Container>
      <Grid
        templateColumns="repeat(4,1fr)"
        style={{ width: "100%", height: "95%" }}
        gap={15}
      >
        {pokemon &&
          pokemon.results.map((item, index) => (
            <Card data={item} key={index} />
          ))}
      </Grid>
    </Container>
  );
};

export default List;
