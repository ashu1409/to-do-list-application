import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onComplete }) => {
  const [filter, setFilter] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="task-list">
      <input
        type="text"
        placeholder="Search tasks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <TransitionGroup component={null}>
        {filteredTasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="fade">
            <Task task={task} onDelete={onDelete} onComplete={onComplete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TaskList;