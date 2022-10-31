import { useEffect, useState } from "react";
import { Card, Header, List, SearchBar } from "../../components/";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <List />
    </>
  );
};

export default Home;
