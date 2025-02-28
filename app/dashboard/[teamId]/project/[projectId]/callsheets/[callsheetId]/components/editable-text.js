"use client"
import React, { useState, useRef, useEffect } from "react";

export default function EditableText({ initialText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);


    const handleDoubleClick = () => {
        setIsEditing(true);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleBlur = () => {
        setIsEditing(false);
    }



  return (
    <div onDoubleClick={handleDoubleClick} className="text-left flex-1 w-full hover:underline group cursor-pointer">
      {isEditing ? (
        <input
          type="text"
          value={text}
          autoFocus
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 w-full px-1"
        />
      ) : (
        <span className="group:hover:text-[#0000FF] px-1">{text}</span>
      )}
    </div>
  );
}
