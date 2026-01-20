import './Projects.css';
import { useState } from 'react';
import timetableBuilder from '../../assets/images/timetableBuilder.png';
import JasonsDemo from '../../assets/videos/JasonsDemo.mp4';
import columnsDemo from '../../assets/videos/columns_demo.mp4';
import columnsPic from '../../assets/images/columns.png';
import pickmechooseme from '../../assets/images/pickmechoosemewatchme.png';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Jason's Extravagant Timetable Builder",
      description: "A flexible timetable builder for UofT students. Enhanced with features such as working on multiple timetables at once in a \"workbook\", saving and loading these workbooks, walk time estimates between classes, locking courses and autogenerating timetables, and RateMyProf ratings.",
      shortDescription: "Advanced timetable builder with workbook functionality and smart scheduling features.",
      image: timetableBuilder,
      technologies: ["Java", "GraphQl", "Java Swing"],
      githubUrl: "https://github.com/SeriousGuy888/csc207-team-project",
      videoUrl: JasonsDemo
    },
    {
      id: 2,
      title: "Victoria Hub",
      description: "A personal portfolio website built with React and TypeScript.",
      shortDescription: "Personal portfolio website showcasing projects and artwork.",
      image: "/src/assets/images/logoBIG.png",
      technologies: ["React", "TypeScript", "CSS", "Vite"],
      githubUrl: "https://github.com/Victoriaecai/victoria-hub",
      liveUrl: "https://victoriaecai.github.io/victoria-hub/"
    },
    {
      id: 3,
      title: "Pick Me Choose Me Watch Me",
      description: "Online streaming has granted us access to millions of movies on demand. However, faced with the seemingly unlimited choices, a new problem arises where none of the movies stand out. You don’t want to watch Crazy Rich Asiansfor the 20th time, so you scroll and scroll Netflix, but nothing peaks your interest. PickMeWatchMe outputs to the user a set of recommended films/shows titles based either on their an actor they want to watch OR based on their desired genre and runtime.",
      shortDescription: "A web prototype that reccomends users movies based on their interests in actors, genres, etc.",
      image: pickmechooseme,
      technologies: ["Python", "Tkinter"],
      githubUrl: "https://github.com/isabellazhong/Cinematch-"
    },
    {
      id: 4,
      title: "Columns",
      description: "Remake of Columns Game using MIPS Assembly Language.",
      shortDescription: "Classic Columns game recreated in MIPS Assembly.",
      image: columnsPic,
      technologies: ["MIPS Assembly"],
      githubUrl: "https://github.com/Victoriaecai/Columns-Game",
      videoUrl: columnsDemo
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="projects">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                  {project.videoUrl && (
                    <button onClick={() => openModal(project)} className="project-link live">
                      Expand
                    </button>
                  )}
                  {project.liveUrl && !project.videoUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      Expand
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {selectedProject && (
        <motion.div
          className="modal-overlay"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <div className="modal-video-container">
              <video
                src={selectedProject.videoUrl}
                controls
                autoPlay
                className="modal-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-technologies">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {selectedProject.githubUrl && (
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-github-link">
                View on GitHub
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Projects;
