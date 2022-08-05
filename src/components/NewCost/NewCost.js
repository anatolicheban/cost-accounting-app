import "./NewCost.css";
import "./CostForm";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostdataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false)
  }

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostdataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler}
        onCancel={cancelCostHandler} />}
    </div>
  );
};

export default NewCost;
