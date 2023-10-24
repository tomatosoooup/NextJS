import { ITask } from "@/types/tasks";
import { FaEdit, FaTrash } from "react-icons/fa";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td className="flex gap-5">
        <FaEdit size={25} />
        <FaTrash size={25} />
      </td>
    </tr>
  );
};

export default Task;
