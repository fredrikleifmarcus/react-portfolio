import Header from './Header';

const Project = ({project}) => {

    const onClick = (e) => {
        console.log(project.title);
    }

  return (

    <div className="container" onClick={onClick}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
    </div>
  )
}

export default Project
