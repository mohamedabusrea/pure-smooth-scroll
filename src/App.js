import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState(1);

  const [verticalAlign, setVerticalAlign] = React.useState("start");

  const [horizontalAlign, setHorizontalAlign] = React.useState("start");

  const verticalAlignValues = [
    {
      value: "start",
      label: "Start of the page"
    },
    {
      value: "center",
      label: "Center of the page"
    },
    {
      value: "end",
      label: "End of the page"
    }
  ];

  const handleVerticalAlignChange = (event) => {
    setVerticalAlign(event.target.value);
  };

  const handleHorizontallAlignChange = (event) => {
    setHorizontalAlign(event.target.value);
  };

  const arrayLength = 400;

  const changeValue = (e) => {
    if (!isNaN(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const scrollTo = () => {
    const el = document.querySelector(`#el${inputValue}`);
    el.scrollIntoView({
      behavior: "smooth",
      block: verticalAlign,
      inline: horizontalAlign
    });
  };

  const shouldHighlight = (id) => {
    if (parseInt(inputValue) === id + 1) {
      return "box--isActive";
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <TextField
          id="standard-number"
          label="Scroll to"
          type="number"
          value={inputValue}
          onChange={changeValue}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
          onKeyPress={(ev) => ev.key === "Enter" && scrollTo()}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Vertical align"
          value={verticalAlign}
          onChange={handleVerticalAlignChange}
          variant="filled"
        >
          {verticalAlignValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency"
          select
          label="Horizontal align"
          value={horizontalAlign}
          onChange={handleHorizontallAlignChange}
          variant="filled"
        >
          {verticalAlignValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" color="primary" onClick={scrollTo}>
          Scroll
        </Button>
      </header>
      <ul className="listContent">
        {Array(arrayLength)
          .fill(0)
          .map((value, index) => (
            <div
              className={`box ${shouldHighlight(index)}`}
              id={`el${index + 1}`}
              key={index}
            >
              {index + 1}
            </div>
          ))}
      </ul>
    </div>
  );
}
