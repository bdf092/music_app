import { useState } from "react";
import '../App.css'

function ListArtists() {
  let artists = ["Adele", "Genre: Pop Soul", "Description: Adele, a name that has become synonymous with soul-stirring melodies and heart-wrenching lyrics, stands as one of the most influential and beloved artists of our time. With a voice that possesses both the power to command an arena and the tenderness to evoke deep emotions, Adele has captivated the hearts of millions around the world."];
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>Favorite Artist </h1>
      {artists.length === 0 && <p>No artist found</p>}
      <ul className="list-group">
        {artists.map((artist, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={artist}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {artist}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListArtists;
