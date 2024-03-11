import { useState } from "react";
import "./style.css";
function Task({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex">
      <input type="checkbox" onClick={handleCheck} />
      <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {task}
      </p>
      <button>Delete</button>
    </div>
  );
}

export default Task;
