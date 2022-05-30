import React from "react";
import Cards from "./Cards/Cards";
import "./Projects.scss";
import podcast_channel_screenshot from "../../assets/images/podcast_channel_screenshot.png";
import todosapp from "../../assets/images/todosapp.png";
import githubfinderapp from "../../assets/images/githubfinderapp.png";
import notesapp from "../../assets/images/notesapp.png";
import reacttodoapp from "../../assets/images/reacttodoapp.png";
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
              "Fantasy landing page for a Spotify Podcast Channel. Created with HTML & Sass."
            }
            demo={"https://podcastchannelapp.netlify.app/"}
            github={"https://github.com/kloppista/podcast-channel"}
          />
          <Cards
            image={githubfinderapp}
            title={"Github Finder"}
            description={
              "App that fetchs data from any user using the Github API. Created with HTML, Sass & JS"
            }
            demo={"https://gh-profile-app.netlify.app/"}
            github={"https://github.com/kloppista/github-finder"}
          />
          <Cards
            image={notesapp}
            title={"Notes App"}
            description={
              "Take notes and save them using this app. Created with HTML + SASS & JS."
            }
            demo={"https://notetakingapp-sbarraza.netlify.app/"}
            github={"https://github.com/kloppista/notes-app"}
          />
          <Cards
            image={reacttodoapp}
            title={"Todo App"}
            description={
              "To do app to add, save and delete tasks. Created using React & Material UI."
            }
            demo={"https://react-todo-app-mu-two.vercel.app/"}
            github={"https://github.com/kloppista/react-todo-app.git"}
          />
        </div>
      </Zoom>
    </div>
  );
};

export default Projects;
