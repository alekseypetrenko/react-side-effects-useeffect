import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainintTime, setRemainintTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set 123");
      setRemainintTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("timer clear");

      clearTimeout(interval);
    };
  }, []);

  useEffect(() => {
    console.log("timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, 1000);

    return () => {
      console.log("timer clear");

      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainintTime} max={TIMER} />
    </div>
  );
}
