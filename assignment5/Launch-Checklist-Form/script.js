// Write your JavaScript code here!

window.onload = () => {
   let launchForm = document.querySelector("form");

   launchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]").value;
      let copilotInput = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");

      let validInput = document.querySelectorAll(".textField");
      let missingFields = [];
      for (let i=0; i < validInput.length; i++) {
         if (validInput[i].value === "") {
            missingFields.push(validInput[i].name);
         } else if (["pilotName", "copilotName"].includes(event.target[i].name)){
            if (!isNaN(Number(validInput[i].value))) {
               missingFields.push(`${validInput[i].name} is a number`);
            } 
         } else {
            if (isNaN(validInput[i].value)) {
               // fuelLevel, cargoMass
               missingFields.push(`${validInput[i].name} is a string`);
            } else {

            }
         }
      }
      
      if (missingFields.length > 1) {
         alert(`All fields are required!\nMissing fields: ${JSON.stringify(missingFields)}`);
         // stop the form submission
         missingFields = [];
      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch`;
         if (fuelLevel < 10000) {
            fuel.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         }







      
      
      
      
      
      }
   });
}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
