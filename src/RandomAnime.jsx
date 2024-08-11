import { NavLink } from "react-router-dom";

function RandomAnime(props) {
  return (
    <>
      <NavLink
        to="/Random"
        onClick={() => {
          props.fetchRamdomAnime;
        }}
      >
        <button>Random</button>
      </NavLink>
    </>
  );
}

export default RandomAnime;
