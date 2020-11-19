import React, { useState, useContext, createContext } from "react";

const ColorContext = createContext();

function DemoInnerBoxContext() {
  const colors = useContext(ColorContext);

  return (
    <div>
      <button
        style={{
          color: colors.primary,
        }}
        onClick={() => {}}
      >
        Update title!
      </button>
    </div>
  );
}

function DemoInnerBox() {
  return (
    <ColorContext.Provider
      value={{
        primary: "red",
      }}
    >
      <DemoInnerBoxContext />
    </ColorContext.Provider>
  );
}

function DemoInner() {
  return <DemoInnerBox />;
}

export default function Demo() {
  const [title, setTitle] = useState("I am title");
  const [colors, setColors] = useState({
    primary: "#ff0000",
  });
  return (
    <ColorContext.Provider value={{ setColors, colors }}>
      <div>
        title: {title}
        <DemoInner setTitle={setTitle} />
        <button
          onClick={() => {
            setColors({
              primary: "#00ff00",
            });
          }}
        >
          Click me!
        </button>
      </div>
    </ColorContext.Provider>
  );
}
