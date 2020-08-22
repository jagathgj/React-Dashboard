import React from "react";

const TextArea = () => {
  return (
    <>
      <div className="textarea-container my-3 flex-fill">
        <textarea
          className="form-control"
          id="TextAreaContent"
          rows="3"
          autocomplete="off"
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
