import "./styles.css";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { useReducer } from "react";

export default function App() {
  // const [tasks, setTask] = useState([]);
  const [tasks, dispatch] = useReducer(taskReducer, []);

  function addNewTask(taskString) {
    dispatch({
      type: "add",
      taskString,
    });
  }

  function deleteTask(taskId) {
    dispatch({
      type: "delete",
      taskId,
    });
  }

  function editTask(taskId, taskString) {
    dispatch({
      type: "edit",
      taskId,
      taskString,
    });
  }

  return (
    <div className="App">
      <h2>Prague itinerary</h2>
      <AddTask addNewTask={addNewTask}></AddTask>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      ></TaskList>
    </div>
  );

  function taskReducer(tasks, action) {
    debugger;
    if (action.type == "add") {
      return [...tasks, action.taskString];
    } else if (action.type == "delete") {
      return tasks.filter((task, index) => action.taskId != index);
    } else if (action.type == "edit") {
      tasks[action.taskId] = action.taskString;
      return [...tasks];
    }
  }
}
