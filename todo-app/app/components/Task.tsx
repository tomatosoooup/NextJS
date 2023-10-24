"use client";

import { ITask } from "@/types/tasks";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskToEdit,
    });

    setTaskToEdit(taskToEdit);
    setOpenModalEdit(false);

    router.refresh();
  };

  const handleSubmitDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit
          className="text-blue-500 cursor-pointer"
          onClick={() => setOpenModalEdit(true)}
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="New task"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FaTrash
          className="text-red-500 cursor-pointer"
          onClick={() => setOpenModalDelete(true)}
          size={25}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <form>
            <h3 className="font-bold text-lg">Delete task</h3>
            <h1 className="flex-grow">
              Are you sure you want to delete this task ?
            </h1>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => handleSubmitDeleteTodo(task.id)}
              >
                Delete
              </button>
            </div>
          </form>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
