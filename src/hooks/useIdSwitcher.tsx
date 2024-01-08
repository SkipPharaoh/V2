import { techData } from "@public/Tech";
import { useState } from "react";

const useIdSwitcher = () => {
  const [techId, setTechId] = useState<number>(0);

  const changeId = (id: number) => {
    setTechId(id);
  };

  const rightArrow = () => {
    if (techId + 1 >= techData.length) {
      setTechId(0);
    } else {
      setTechId(techId + 1);
    }
  };

  const leftArrow = () => {
    if (techId === 0) {
      setTechId(techData.length - 1);
    } else {
      setTechId(techId - 1);
    }
  };

  return { techId, changeId, rightArrow, leftArrow };
};

export default useIdSwitcher;
