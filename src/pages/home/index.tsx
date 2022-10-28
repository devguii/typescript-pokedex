import { useEffect, useState } from "react";
import { Card, Header, List, SearchBar } from "../../components/";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  const teste = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  ];

  return (
    <>
      <Header />
      <SearchBar />
      <List />
    </>
  );
};

export default Home;
