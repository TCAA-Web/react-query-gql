import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { allPlanets } from "./queries/allPlanets";

function App() {
  const baseUrl = `https://swapi-graphql.netlify.app/.netlify/functions/index`;

  const {
    data: planets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allplanets"],
    queryFn: async () => request(baseUrl, allPlanets),
  });

  if (isLoading) {
    return <span>Loading......</span>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Hello world</h1>
      {planets.allPlanets.planets.map((planet) => {
        return (
          <div>
            <h5>{planet.name}</h5>
          </div>
        );
      })}
    </>
  );
}

export default App;
