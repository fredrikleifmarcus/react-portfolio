import React from 'react'
import Project from './Project'
import Header from './Header'

const Projects = ({projects}) => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects

