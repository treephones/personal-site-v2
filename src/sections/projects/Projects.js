import { Grid } from '@mui/material';
import ProjectCard from "./ProjectCard.js";
import projects from "./projects.json";

const Projects = ({ innerRef }) => {

    return (
        <header id='projects' className='section' ref={innerRef}>
            <h1>Projects</h1>
            <p>
                Some of my side projects. All my code can be seen on my <a className='tl' href="https://github.com/treephones">Github</a>.
            </p>
            <div id='projcards' className='borda'>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    projects.map(project => {
                        return (
                            <Grid item xs={12} key={Date.now()+Math.random()*Math.random()}>
                                <ProjectCard name={project.name} description={project.description} tech={project.tech} links={project.links} />
                            </Grid>
                        )
                    })
                }
                </Grid>
            </div>
        </header>
    );
}

export default Projects;