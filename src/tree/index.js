import React, { useState } from "react";
import data from "./data.json";
import "./index.css";

const Twig = ({ branch }) => {
  const [localBranch, setLocalBranch] = useState(branch);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newBranch = {
      ...localBranch,
      branches: [
        ...localBranch.branches,
        {
          name: event.target[0].value,
          branches: [],
        },
      ],
    };
    event.target[0].value = "";
    setLocalBranch(newBranch);
  };

  return (
    <>
      <li>
        {localBranch.name}
        <form onSubmit={handleOnSubmit}>
          <input type="text" />
        </form>
      </li>
      {localBranch.branches.length > 0 && (
        <li>
          <Branch branches={localBranch.branches} />
        </li>
      )}
    </>
  );
};

const Branch = ({ branches }) => {
  return (
    <ul>
      {branches.map((branch) => (
        <Twig key={branch.name} branch={branch} />
      ))}
    </ul>
  );
};

export default function Tree() {
  return (
    <div className="tree">
      <Branch branches={data} />
    </div>
  );
}
