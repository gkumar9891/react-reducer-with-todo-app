import { useState } from "react";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const [isEdit, setEdit] = useState(Array(tasks.length).fill(false));

  function toggleEdit(index) {
    const newEditStates = [...isEdit];
    newEditStates[index] = !isEdit[index];
    setEdit(newEditStates);
  }

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            {isEdit[index] ? (
              <>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => editTask(index, e.target.value)}
                />
                <button onClick={() => toggleEdit(index)}>save</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => toggleEdit(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
