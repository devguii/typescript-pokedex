import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../card/index";
import { Container } from "./styles";
import { isConstructorDeclaration } from "typescript";

interface IList {
  results: [{ name: string; url: string }] | undefined;
}
export const List = ({ results }: IList) => {
  const [listPokemon, setListPokemon] = useState([]);

  //useEffect(() => {}, [results]);

  return (
    <Container>
      <Grid
        templateColumns="repeat(4,1fr)"
        style={{ width: "100%", height: "95%" }}
        gap={15}
      >
        {results &&
          results.map((item, index) => <Card data={item} key={index} />)}
      </Grid>
    </Container>
  );
};

export default List;
