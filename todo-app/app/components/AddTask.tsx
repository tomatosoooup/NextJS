"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { saveNewTodo } from "@/api";
import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState("");

  const handleOpen = () => {
    setModalOpen(!modalOpen);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await saveNewTodo({
      id: uuidv4(),
      text: newTodo,
    });
    setNewTodo("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button className="btn btn-primary w-full" onClick={handleOpen}>
        Add new task <AiOutlinePlus className="ml-2" size={12}></AiOutlinePlus>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
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
    </div>
  );
};

export default AddTask;
