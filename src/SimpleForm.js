import React, { useState } from "react";

function SimpleForm({ options }) {
  const [inputText, updateInputText] = useState("");
  return (
    <div>
      <form>
        <label>
          {options.label}
          <input
            type="text"
            value={inputText}
            onChange={(e) => updateInputText(e.target.value)}
          />
          <input
            type="submit"
            value={options.submitText}
            onClick={() => {
              options.submitFunc(inputText);
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default SimpleForm;
