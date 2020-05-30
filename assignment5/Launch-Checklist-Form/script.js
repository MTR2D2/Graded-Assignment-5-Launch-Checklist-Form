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
      let wrongEntry = [];

      for (let i = 0; i < 4; i++) {
         if (validInput[i].value === "") {
            missingFields.push(validInput[i].name);

         } else if (["pilotName", "copilotName"].includes(event.target[i].name)) {
            if (!isNaN(Number(validInput[i].value))) {
               wrongEntry.push(`${validInput[i].name} needs to be a name!`);
            }
         } else if (["fuelLevel", "cargoMass"].includes(event.target[i].name)) {
            if (isNaN(Number(validInput[i].value))) {
               wrongEntry.push(`${validInput[i].name} needs to be a number`);
            }
         }
      }
      /*
               if (validInput[i].value === "") {
                  missingFields.push(validInput[i].name);

               } else if (["pilotName", "copilotName"].includes(event.target[i].name)) {
                  if (!isNaN(Number(validInput[i].value))) {
                     missingFields.push(`${validInput[i].name} is a number`);
                  }
               } else if (["fuelLevel", "cargoMass"].includes(event.target[i].name)) {
                  if (isNaN(Number(validInput[i].value))) {
                     missingFields.push(`${validInput[i].name} is a string`);
                  }
               } else {
                  if (isNaN(validInput[i].value)) {
                     // fuelLevel, cargoMass
                     missingFields.push(`${validInput[i].name} is a string`);

                  }
               }
            }
      */
      if (missingFields.length > 0) {
         launchStatus.innerHTML = "Awaiting Information for Launch";
         launchStatus.style.color = "red";
         document.getElementById("faultyItems").style.visibility = "hidden";
         alert(`All fields are required!\nMissing fields: ${JSON.stringify(missingFields)}`);
         // stop the form submission
         missingFields = [];

      } else if (wrongEntry.length > 0) {
         launchStatus.innerHTML = "Awaiting Information for Launch";
         launchStatus.style.color = "red";
         document.getElementById("faultyItems").style.visibility = "hidden";
         alert(`WARNING!\nIncorrect Data Type: ${JSON.stringify(wrongEntry)}`);
         // stop the form submission
         wrongEntry = [];

      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch`;
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         fuel.innerHTML = "Fuel level high enough for launch";
         fuel.style.color = "green";
         cargo.innerHTML = "Cargo mass low enough for launch";
         cargo.style.color = "green";

         if (fuelLevel < 10000) {
            fuel.innerHTML = "Not enough fuel for the journey";
            fuel.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         }
         if (cargoLevel > 10000) {
            cargo.innerHTML = "Too much mass for the shuttle to take off";
            cargo.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         }

      }

      document.getElementById("missionTarget").style.visibility = "visible";

   });
};

//let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let requestURL = 'https://handlers.education.launchcode.org/static/planets.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
   const missionDestination = request.response;
   //populateHeader(missionDestination);
   showPlanetInformation(missionDestination);
   //console.log(missionDestination);
};

function showPlanetInformation(jsonObj) {
   const destinationArray = jsonObj[0];
   console.log(destinationArray);
   //for (let i = 0; i < destinationArray.length; i++) {
   const myArticle = document.createElement('article');
   const myImage = document.createElement('img');
   //const myPara2 = document.createElement('p');
   //const myPara3 = document.createElement('p');
   const myList = document.createElement('ol');

   //myH2.textContent = heroes[i].name;
   myImage.src = destinationArray.image;
   //myPara2.textContent = 'Age: ' + heroes[i].age;
   //myPara3.textContent = 'Superpowers:';

   //const destinationInfo = destinationArray[i];
   /*for (let j = 0; j < destinationInfo.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = destinationInfo[j];
      myList.appendChild(listItem);
   }
*/
   const listName = document.createElement('li');
   listName.textContent = 'Name: ' + destinationArray.name;
   myList.appendChild(listName);

   const listDiameter = document.createElement('li');
   listDiameter.textContent = 'Diameter: ' + destinationArray.diameter;
   myList.appendChild(listDiameter);

   const listStar = document.createElement('li');
   listStar.textContent = 'Star: ' + destinationArray.star;
   myList.appendChild(listStar);

   const listDistance = document.createElement('li');
   listDistance.textContent = 'Distance from Earth: ' + destinationArray.distance;
   myList.appendChild(listDistance);

   const listMoons = document.createElement('li');
   listMoons.textContent = 'Number of Moons: ' + destinationArray.moons;
   myList.appendChild(listMoons);
   //myArticle.appendChild(myH2);
   myArticle.appendChild(myImage);
   //myArticle.appendChild(myPara2);
   //myArticle.appendChild(myPara3);
   myArticle.appendChild(myList);

   section.appendChild(myArticle);
}


/*function populateHeader(jsonObj) {
   const myH2 = document.createElement('h2');
   myH2.textContent = jsonObj['Mission Destination'];
   header.appendChild(myH2);

   const myLi = document.createElement('li');
   myLi.textContent = 'Name: ' + jsonObj['name'];
   section.appendChild(myLi);
}*/

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
