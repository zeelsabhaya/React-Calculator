import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=",].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className={`button ${["AC", "DEL", "%"].includes(char)
                ? "gray"
                : ["/", "*", "-", "+", "="].includes(char)
                  ? "orange"
                  : "dark-gray"
                } ${char === "0" ? "zero" : ""}`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
