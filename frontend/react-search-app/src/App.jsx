import { useState, useEffect} from "react";
import Navbar from "./Navbar";
import Results from "./Results";
import "./App.css"

function App(){
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost/game-api/list.php")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, [search]);

  const filtered = games.filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  return(
    <div className="page">
      <Navbar search={search} setSearch={setSearch} />

      <main className="container">
        <p className="resultsCount">Results found: {filtered.length}</p>
        <Results games={filtered} />
      </main>
    </div>
  );
}

export default App;