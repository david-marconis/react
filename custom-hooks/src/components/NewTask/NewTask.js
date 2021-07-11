import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const tasksUrl =
  "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

const NewTask = props => {
  const { isLoading, error, sendRequest: postTask } = useHttp(tasksUrl);

  const enterTaskHandler = taskText => {
    postTask({
      init: {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      consumeData: data => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        props.onAddTask(createdTask);
      }
    });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
