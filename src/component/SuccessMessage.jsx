// components/SuccessMessage.jsx
import React, { useEffect, useState } from "react";

export default function SuccessMessage({ message, onClose }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500); // Start fade at 4.5s
    const hideTimer = setTimeout(onClose, 5000); // Hide at 5s
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-start z-50 transition-opacity duration-500 mt-5 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded shadow-lg w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Success</h2>
          <button
            onClick={onClose}
            className="text-green-700 font-bold hover:text-green-900"
          >
            ×
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
