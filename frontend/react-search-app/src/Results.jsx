import { useState } from "react";

function Results({ games }) {
  return (
    <div className="grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

function GameCard({ game }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <div className="imageWrap">
        <img src={game.image_url} alt={game.title} />
      </div>

      <div className="infoPanel">
        <div className="panelTop">
          <div className="cardTitle">{game.title}</div>
          <div className="cardPrice">€{game.price}</div>

          <button
            className={`heartBtn ${liked ? "liked" : ""}`}
            type="button"
            onClick={() => setLiked(!liked)}
          >
            {liked ? "♥" : "♡"}
          </button>
        </div>

        <div className="panelExtra">
          <button className="btnPrimary">Add to cart</button>
          <button className="btnGhost">Other offers</button>
        </div>
      </div>
    </div>
  );
}

export default Results;
