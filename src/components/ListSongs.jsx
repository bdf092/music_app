import { useState } from "react";

function ListSongs() {
  let songs = ["When We Were Young", "Someone Like You", "Hello", "Rolling in the Deep", "Set Fire to the Rain"];
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>List of Songs </h1>
      {songs.length === 0 && <p>No song found</p>}
      <ul className="list-group">
        {songs.map((song, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={song}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {song}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListSongs;
