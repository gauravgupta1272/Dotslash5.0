import React from "react";

export const Diet = () => {
  let h = 0;
  let w = 0;
  let bmi = 0;
  let gen = "";
  let totalCal = 0;
  let handleClickbmi = (e) => {
    e.preventDefault();
    h = document.getElementById("inputHeight").value;
    w = document.getElementById("inputWeight").value;
    bmi = (parseInt(w) * 10000) / (parseInt(h) * parseInt(h));
    document.getElementById("bmi").innerHTML = `${bmi}`;
    if (document.getElementById("inlineRadio1").checked) {
      gen = "Male";
    } else {
      gen = "Female";
    }
    console.log(gen);
  };

  let riceTitle = "Rice";
  let riceCal = 130;
  let riceCarb = "53.4gm";
  let riceVit = "B6";
  let riceFat = "0.4gm";
  let riceId= 1;

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
      <h1 className="m-4 p-2 display-5 title text-decoration-wavy">
        Diet Plan
      </h1>

      <div className="m-2 p-2 container-fluid">
        <section className="">
          <label htmlFor="gender" className="form-label gender-label">
            Select your gender
          </label>
          <span>
            <div className="form-check form-check-inline gender-sel mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </span>
        </section>

        <p>
          <label htmlFor="gender" className="form-label gender-label">
            Select your Age group
            <select
              className="input-group form-select gender my-2"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option value="l18">Below 18</option>
              <option value="18-60">Between 18 to 60</option>
              <option value="g60">Above 60</option>
            </select>
          </label>
        </p>
      </div>

      <div className="m-1 row gender-label">
        <label htmlFor="inputHeight" className="col-lg-2 col-form-label">
          Height(in cm)
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputHeight" />
        </div>
      </div>
      <div className="m-1 row gender-label">
        <label htmlFor="inputWeight" className="col-sm-2 col-form-label">
          Weight(in kg)
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputWeight" />
        </div>
      </div>
      <div className="m-1 row gender-label">
        <label htmlFor="inputWeight" className="col-sm-2 col-form-label">
          Your BMI is:
        </label>
        <span className="col-xl-10" id="bmi">
          0
        </span>
      </div>

      {/* Image and food items  */}
      <div className="d-img mb-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <img
              src="https://media.istockphoto.com/photos/classic-thai-food-dishes-picture-id1312283557?b=1&k=20&m=1312283557&s=170667a&w=0&h=hXAmitFiH9z0mK3GZdMDbkkcSl8Em84LIIlkHnVhpPE="
              className="card-img-top"
              width="2rem"
              height="500rem"
              alt="Error image Loading!!"
              m="10,20,30,40"
            />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      
      {/* first */}
      <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Rice</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">130</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>53.4gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.4gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Dal</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">90450</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>10.18gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B2, B6, B9, D2</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.24gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Chapati</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">104</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>15.17gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.4gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  

  {/* second */}
  <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Salad</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">17</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>2.9gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.24gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Tea</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>0.2gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Coffee</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* third */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Bread</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">266</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>49gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Noodles</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">137</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>25gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>2.06gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Pasta</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">131</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>25gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* forth */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Milk</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">496</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>38.42gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>26.71gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Curd</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">98</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>3.4gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>4.3gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Chips</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">547</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>53gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>37gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* five */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Cold Drink</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">37</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>9.56gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.02gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Chicken</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">165</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.6gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Egg</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">131</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B2</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>9gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* six */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Fish</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">206</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>12gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Mutton</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">294</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>21gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Pizza</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">266</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>33gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>10gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* seventh */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Burger</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">295</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>24gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>35gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Sweets</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">500</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>40gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>30gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Apple</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">52</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>14gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C,K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* eigth */} <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Orange</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">47</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>12gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Banana</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">84</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>23gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C,B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.3gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Pomogranate</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">83</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>14gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C, K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* nine */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />&nbsp;Paneer</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">296</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>4.5gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B12, D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>&nbsp;Potato</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">87</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>17gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B1, B3, B6, C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>&nbsp;Cabbage</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">25</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>6gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C,K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <br />
     <a className="final" onClick={handleClickbmi}>SUBMIT</a>
  
     <br />
    </div>
  );
};
