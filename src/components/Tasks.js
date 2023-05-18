import { useState } from "react";







const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "girlboss",
            day: "Feb 2 1.30pm",
            reminder: true
        },
        {
            id: 2,
            text: "gaslight",
            day: "Feb 3 2.00pm",
            reminder: true
        },
        {
            id: 3,
            text: "gatekeep",
            day: "Feb 4 3.45am",
            reminder: false
        }
    ])

  return (
    <div>
      {tasks.map((task) => (
        <h3 key= {task.id}>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
