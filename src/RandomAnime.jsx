import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function RandomAnime(props) {
  return (
    <>
      <div className="px-[20vh] flex items-center justify-center flex-1 flex-col random">
        <div className="m-auto flex flex-col ">
          <h1 className="text-3xl font-croissant text-[#dbdbdb] align-center text-center">
            Take a chance and discover a new anime!
          </h1>

          <button className="mt-5 self-center  ">
            <NavLink
              className="text-[#dbdbdb] font-righteous text-base h-[40px] w-24 flex border-2 px-2 py-1 rounded-md bg-white/10 hover:text-[#fffffff] hover:bg-rose-800 transition ease-in align-middle flex-col  justify-center"
              to="/Random"
              onClick={() => {
                props.fetchRamdomAnime;
              }}
            >
              Random
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomAnime;
