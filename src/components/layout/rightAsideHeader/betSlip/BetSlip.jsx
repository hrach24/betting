import React from "react";
import SelecedBet from "./selectedBet/SelecedBet";
import BetSlipSwitch from "./betSlipSwitch/BetSlipSwitch";
// import BetSlipBlock from "./betSlipBlock/BetSlipBlock";
const BetSlip = () => {
  return (
    <>
      <BetSlipSwitch />
      <SelecedBet />
      {/*<BetSlipBlock />*/}
    </>
  );
};

export default BetSlip;
