import { useEffect, useState } from "react";
import { Card, Header, List, Pagination, SearchBar } from "../../components/";

interface IReq {
  count: number;
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

const Home = () => {
  const [data, setData] = useState<IReq>();
  const [page, setPage] = useState(1);

  function handlePage(click: number) {
    setPage(page + click);
  }

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 40}&limit=40`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [page]);

  useEffect(() => {
    console.log(`render home`);
  }, data?.results);
  return (
    <>
      <Header />
      <SearchBar />
      <Pagination
        page={page}
        handleClick={(click: number) => handlePage(click)}
      />
      <List results={data && data.results} />
    </>
  );
};

export default Home;
