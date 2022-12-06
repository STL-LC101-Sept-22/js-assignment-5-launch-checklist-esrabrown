const { parseIsolatedEntityName } = require('typescript');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    window.addEventListener ("load", function(){
        container=window.document;

    document.getElementById("missionTarget").innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
    });
};

function validateInput(testInput) {

    if (testInput === "" || testInput === 0 || testInput === null) {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else if (!isNaN(testInput)) {
        return 'Is a Number';
    }
    return '';
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
   
    document.getElementById("faultyItems").style.visibility = 'hidden';
    
    if(pilot === "" || copilot === ""|| fuelLevel === "" || cargoMass === ""){
       alert("All fields are required!"); 
       document.getElementById("faultyItems").style.visibility = 'hidden';
      }
    else if(!isNaN(pilot) || !isNaN (copilot) || isNaN(fuelLevel) || isNaN(cargoMass)){
      alert("Make sure to enter valid information for each field!");
      document.getElementById("faultyItems").style.visibility = 'hidden';
    }



    else if(fuelLevel < 10000 && cargoMass <= 10000){
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch!";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch!";
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is enough for launch!";
        
       }


    else if(cargoMass > 10000 && fuelLevel >=10000){
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch!";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is enough for launch!";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch!";
        document.getElementById("launchStatus").style.color = 'red';
        
       }

    else if(fuelLevel < 10000 && cargoMass > 10000){
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch!";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass too much mass for the shuttle to take off!";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch!";
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch!`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        }


    else if(fuelLevel >= 10000 && cargoMass <= 10000){
        document.getElementById("faultyItems").style.visibility = 'hidden';
        document.getElementById("fuelStatus").innerHTML = "Fuel level is enough for launch!";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is enough for launch!";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch!`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = 'green'; 
    
    
    }



};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    return Math.floor(Math.random() * planets.length);
  
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
