import React from "react";

export const Card = ({title1,title2,title3,cal1,cal2,cal3,carb1,carb2,carb3,vit1,vit2,vit3,fat1,fat2,fat3}) => {
  return (
    
      <>
       <div className="row align-items start">
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className>{title1}</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">{cal1}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>{carb1}</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>{vit1}</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{fat1}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className>{title2}</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">{cal2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>{carb2}</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>{vit2}</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{fat2}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className>{title3}</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">{cal3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>{carb3}</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>{vit3}</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{fat3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </>
    
  );
};
