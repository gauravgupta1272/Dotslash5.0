import React from "react";
import { Card } from "./Card";

export const Diet = () => {
  let riceTitle = "Rice";
  let riceCal = 130;
  let riceCarb = "53.4gm";
  let riceVit = "B6";
  let riceFat = "0.4gm";

  let dalTitle = "Dal";
  let dalCal = 90450;
  let dalCarb = "10.18gm";
  let dalVit = "B2, B6, B9, D2";
  let dalFat = "3.24gm";

  let chapatiTitle = "Chapati";
  let chapatiCal = 104;
  let chapatiCarb = "15.17gm";
  let chapatiVit = "B, E";
  let chapatiFat = "0.4gm";

  return (
      <>
        <Card title1={riceTitle} title2={dalTitle} title3={chapatiTitle}
        cal1={riceCal} cal2={dalCal} cal3={chapatiCal}
        carb1={riceCarb} carb2={dalCarb} carb3={chapatiCarb}
        vit1={riceVit} vit2={dalVit} vit3={chapatiVit}
        fat1={riceFat} fat2={dalFat} fat3={chapatiFat}
        />
        
    
    
    </>
  );
};
