const btn = document.querySelector("#btn"),
    result = document.querySelector("#result-bmi"),
    remark = document.querySelector("#remark")

function calculateBMI(){
    result.innerHTML = ""
    remark.innerHTML = ""

    let heightInpt = document.getElementById("height").value;
    let weightInpt = document.getElementById("weight").value;

    if (height === "" || isNaN(heightInpt)){
        remark.innerHTML = "Invalid Input";
    } else if (weight === "" || isNaN(weightInpt)){
        remark.innerHTML = "Invalid Input";
    } else {
        height = (heightInpt / 100) * (heightInpt / 100);
        let bmi = (weightInpt / height).toFixed(2);
        
        result.innerHTML = bmi;
        
        if (bmi < 18.5){
            remark.innerHTML = "Under Weight";

        } else if ( bmi < 18.5) {
            remark.innerHTML = "Normal";

        } else if ( bmi < 25) {
            remark.innerHTML = "Over Weight";

        } else if ( bmi < 30) {
            remark.innerHTML = "Obesity (class I)";
            
        } else if ( bmi < 40) {
            remark.innerHTML = "Obesity (class II)";

        } else if ( bmi > 40) {
            remark.innerHTML = "Extrene Obesity";
        }
    }



}



btn.addEventListener("click", calculateBMI);