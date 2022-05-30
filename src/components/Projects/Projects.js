import React from "react";
import Cards from "./Cards/Cards";
import "./Projects.scss";
import podcast_channel_screenshot from "../../assets/images/podcast_channel_screenshot.png";
import moviedb_screenshot from "../../assets/images/moviedb_screenshot.png";
import pokedex_screenshot from "../../assets/images/pokedex_screenshot.png";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <Zoom>
        <div className="projects_container" id="projects">
          <Cards
            image={podcast_channel_screenshot}
            title={"Podcast Channel"}
            description={
              "Fantasy landing page for a Spotify Podcast Channel. Created with HTML + CSS + Sass."
            }
            demo={"https://martinsantiagobarraza.github.io/"}
            github={
              "https://github.com/MartinSantiagoBarraza/martinsantiagobarraza.github.io"
            }
          />
          <Cards
            image={moviedb_screenshot}
            title={"Movies Database"}
            description={
              "Your source for all your favourites movies! Created with HTML + CSS + JS."
            }
            demo={"https://cinemadb.netlify.app/"}
            github={"https://github.com/MartinSantiagoBarraza/cinema-db"}
          />
          <Cards
            image={pokedex_screenshot}
            title={"Pokedex App"}
            description={
              "Fantasy app to look for any Pokemon using the PokeAPI. Created with HTML + CSS + JS."
            }
            demo={"https://pokemonindex.netlify.app/"}
            github={"https://github.com/MartinSantiagoBarraza/pokedex-app"}
          />
          <Cards
            image={pokedex_screenshot}
            title={"Pokedex App"}
            description={
              "Fantasy app to look for any Pokemon using the PokeAPI. Created with HTML + CSS + JS."
            }
            demo={"https://pokemonindex.netlify.app/"}
            github={"https://github.com/MartinSantiagoBarraza/pokedex-app"}
          />
        </div>
      </Zoom>
    </div>
  );
};

export default Projects;
