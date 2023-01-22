// Generate recipies
function changeString(str) {
    return str.replace(/ /g, "+");
}

function generaterecipies() {

ingredient = document.getElementById("ingredients").value;
ingredient = changeString(ingredient);
console.log(ingredient)

fetch('http://localhost:3001/getrecipedata', 
{method: "POST", body : JSON.stringify({ingredient}), headers:{'content-type': 'application/json'}})
.then(response => response.json()).then ((finalrecipe) => {
  console.log(finalrecipe);

  
  let para = document.getElementById('para');

  
  para.innerHTML = finalrecipe.title;
  

})


}