import { useState } from "react";

export default function usePosition(passedNames) {
  const [position, setPosition] = useState();

  const findPosition = (input) => {
    setPosition(NaN);
    for (let i = 0; i < passedNames.length; i++) {
      if (input === passedNames[i]) return setPosition(i + 1);
    }
  };

  return [position, findPosition];
}
