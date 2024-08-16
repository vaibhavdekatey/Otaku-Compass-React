import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function RandomAnime(props) {
  return (
    <>
      <div className="px-[20vh] flex items-center h-[88vh] flex-col">
        <div className="m-auto flex flex-col ">
          <h1 className="text-3xl font-montserrat text-[#dbdbdb] align-center text-center">
            Take a chance and discover a new anime!
          </h1>

          <button className="mt-5 self-center  ">
            <NavLink
              className="text-[#dbdbdb] font-montserrat text-base h-[40px] w-24 flex border-2 px-2 py-1 rounded-md bg-white/10 hover:text-[#000000] hover:bg-white transition ease-in align-middle flex-col  justify-center"
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
      <Footer className="absolute bottom-0" />
    </>
  );
}

export default RandomAnime;
