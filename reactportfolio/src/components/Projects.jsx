import React from "react";
import ProjectItem from "./ProjectItem";
import spotifyTn from '../assets/spotify.png';
import cookwiseTn from '../assets/cookwise.png';


const Projects = () => {
    return ( 
    <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
   <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
   <p className="text-center py-8">I'm a UX designer with strong visual skills,
    who wants to work with all parts of the design process,
     take a look on how I tackled some projects and togheter with my
      team found solutions that reached both the user and business goals. 
   </p>
   <div className="grid sm:grid-cols-2 gap-12">
<ProjectItem img={spotifyTn} title='Spotify' />
<ProjectItem img={cookwiseTn} title='Cookwise' />
   </div>
    </div> );
}
 
export default Projects;