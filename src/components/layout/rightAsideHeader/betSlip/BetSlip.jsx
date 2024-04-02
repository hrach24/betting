import React from "react";
import SelecedBet from "./selectedBet/SelecedBet";
import BetSlipSwitch from "./betSlipSwitch/BetSlipSwitch";
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
