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

  let teaTitle = "Tea";
  let teaCal = 10;
  let teaCarb = "0.2gm";
  let teaVit = "-";
  let teaFat = "0";

  let coffeeTitle = "Coffee";
  let coffeeCal = 31;
  let coffeeCarb = "0gm";
  let coffeeVit = "-";
  let coffeeFat = "0gm";

  let milkTitle = "Milk";
  let milkCal = 496;
  let milkCarb = "38.42gm";
  let milkVit = "C,D,A";
  let milkFat = "26.71gm";

  let noodlesTitle = "Noodles";
  let noodlesCal = 137;
  let noodlesCarb = "25gm";
  let noodlesVit = "B";
  let noodlesFat = "2.06";

  let pastaTitle = "Pasta";
  let pastaCal = 131;
  let pastaCarb = "25gm";
  let pastaVit = "B";
  let pastaFat = "2gm";

  let chipsTitle = "Chips";
  let chipsCal = 547;
  let chipsCarb = "53gm";
  let chipsVit = "C";
  let chipsFat = "37gm";



  let breadTitle = "Bread";
  let breadCal = 266;
  let breadCarb = "49gm";
  let breadVit = "B,E";
  let breadFat = "3.2gm";

  let pizzaTitle = "Pizza";
  let pizzaCal = 266;
  let pizzaCarb = "33gm";
  let pizzaVit = "-";
  let pizzaFat = "10gm";

  let burgerTitle = "Burger";
  let burgerCal = 295;
  let burgerCarb = "24gm";
  let burgerVit = "-";
  let burgerFat = "35gm";

  let appleTitle = "Apple";
  let appleCal = 52;
  let appleCarb = "14gm";
  let appleVit = "C,K,B6";
  let appleFat = "0.2";

  let orangeTitle = "Orange";
  let orangeCal = 47;
  let orangeCarb = "12gm";
  let orangeVit = "A,C";
  let orangeFat = "0.1gm";

  let bananaTitle = "Banana";
  let bananaCal = 89;
  let bananaCarb = "23gm";
  let bananaVit = "C,B6";
  let bananaFat = "0.3gm";

  let curdTitle = "Curd";
  let curdCal = 98;
  let curdCarb = "3.4gm";
  let curdVit = "B6";
  let curdFat = "24.3";

  let paneerTitle = "Paneer";
  let paneerCal = 296;
  let paneerCarb = "4.5gm";
  let paneerVit = "B12,D";
  let paneerFat = "22gm";

  let sweetsTitle = "Sweets";
  let sweetsCal = 500;
  let sweetsCarb = "40gm";
  let sweetsVit = "C,D,A";
  let sweetsFat = "30gm";



  let chickenTitle = "Chicken";
  let chickenCal = 165;
  let chickenCarb = "0gm";
  let chickenVit = "E,B6";
  let chickenFat = "3.6gm";

  let eggTitle = "Egg";
  let eggCal = 131;
  let eggCarb = "-";
  let eggVit = "B2";
  let eggFat = "9gm";

  let fishTitle = "Fish";
  let fishCal = 206;
  let fishCarb = "";
  let fishVit = "B6,C";
  let fishFat = "12gm";

  let muttonTitle = "Mutton";
  let muttonCal = 294;
  let muttonCarb = "-";
  let muttonVit = "B6";
  let muttonFat = "21g";

  let pomoTitle = "Pomogranate";
  let pomoCal = 83;
  let pomoCarb = "14gm";
  let pomoVit = "C,K";
  let pomoFat = "1gm";

  let potatoTitle = "Potato";
  let potatoCal = 87;
  let potatoCarb = "17gm";
  let potatoVit = "C,B1,B3,B6";
  let potatoFat = "0gm";

  let cabbageTitle = "Cabbage";
  let cabbageCal = 25;
  let cabbageCarb = "6gm";
  let cabbageVit = "C,K,B6";
  let cabbageFat = "0.1g";

  let cdTitle = "Cold Drink";
  let cdCal = 37;
  let cdCarb = "9.56gm";
  let cdVit = "-";
  let cdFat = "0.02gm";

  let saladTitle = "Salad";
  let saladCal = 17;
  let saladCarb = "2.9gm";
  let saladVit = "C,D,A";
  let saladFat = "0.24gm";




  return (
      <div>
        <Card title1={riceTitle} title2={dalTitle} title3={chapatiTitle}
        cal1={riceCal} cal2={dalCal} cal3={chapatiCal}
        carb1={riceCarb} carb2={dalCarb} carb3={chapatiCarb}
        vit1={riceVit} vit2={dalVit} vit3={chapatiVit}
        fat1={riceFat} fat2={dalFat} fat3={chapatiFat}
        />
        <Card title1={teaTitle} title2={coffeeTitle} title3={milkTitle}
        cal1={teaCal} cal2={coffeeCal} cal3={milkCal}
        carb1={teaCarb} carb2={coffeeCarb} carb3={milkCarb}
        vit1={teaVit} vit2={coffeeVit} vit3={milkVit}
        fat1={teaFat} fat2={coffeeFat} fat3={milkFat}
        />
        <Card title1={noodlesTitle} title2={pastaTitle} title3={chipsTitle}
        cal1={noodlesCal} cal2={pastaCal} cal3={chipsCal}
        carb1={noodlesCarb} carb2={pastaCarb} carb3={chipsCarb}
        vit1={noodlesVit} vit2={pastaVit} vit3={chipsVit}
        fat1={noodlesFat} fat2={pastaFat} fat3={chipsFat}
        />

        <Card title1={breadTitle} title2={pizzaTitle} title3={burgerTitle}
        cal1={breadCal} cal2={pizzaCal} cal3={burgerCal}
        carb1={breadCarb} carb2={pizzaCarb} carb3={burgerCarb}
        vit1={breadVit} vit2={pizzaVit} vit3={burgerVit}
        fat1={breadFat} fat2={pizzaFat} fat3={burgerFat}
        />
        <Card title1={appleTitle} title2={orangeTitle} title3={bananaTitle}
        cal1={appleCal} cal2={orangeCal} cal3={bananaCal}
        carb1={appleCarb} carb2={orangeCarb} carb3={bananaCarb}
        vit1={appleVit} vit2={orangeVit} vit3={bananaVit}
        fat1={appleFat} fat2={orangeFat} fat3={bananaFat}
        />
        <Card title1={curdTitle} title2={paneerTitle} title3={sweetsTitle}
        cal1={curdCal} cal2={paneerCal} cal3={sweetsCal}
        carb1={curdCarb} carb2={paneerCarb} carb3={sweetsCarb}
        vit1={curdVit} vit2={paneerVit} vit3={sweetsVit}
        fat1={curdFat} fat2={paneerFat} fat3={sweetsFat}
        />
        <Card title1={cabbageTitle} title2={chickenTitle} title3={eggTitle}
        cal1={cabbageCal} cal2={chickenCal} cal3={eggCal}
        carb1={cabbageCarb} carb2={chickenCarb} carb3={eggCarb}
        vit1={cabbageVit} vit2={chickenVit} vit3={eggVit}
        fat1={cabbageFat} fat2={chickenFat} fat3={eggFat}
        />
        <Card title1={fishTitle} title2={muttonTitle} title3={pomoTitle}
        cal1={fishCal} cal2={muttonCal} cal3={pomoCal}
        carb1={fishCarb} carb2={muttonCarb} carb3={pomoCarb}
        vit1={fishVit} vit2={muttonVit} vit3={pomoVit}
        fat1={fishFat} fat2={muttonFat} fat3={pomoFat}
        />
        <Card title1={potatoTitle} title2={cdTitle} title3={saladTitle}
        cal1={potatoCal} cal2={cdCal} cal3={saladCal}
        carb1={potatoCarb} carb2={cdCarb} carb3={saladCarb}
        vit1={potatoVit} vit2={cdVit} vit3={saladVit}
        fat1={potatoFat} fat2={cdFat} fat3={saladFat}
        />

        

        
    
    
    </div>
  );
};
