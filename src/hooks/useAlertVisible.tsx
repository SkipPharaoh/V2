import { useState } from "react";

const useAlertVisible = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  return { isAlertVisible, setAlertVisible, handleAlertClose };
};

export default useAlertVisible;
