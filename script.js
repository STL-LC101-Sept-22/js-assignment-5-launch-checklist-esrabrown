// Write your JavaScript code here!



window.addEventListener("load", function(){
  

  let form= document.querySelector("form");
  form.addEventListener("submit", function(event){
    
    
  let pilot = document.querySelector("input[name=pilotName]").value;
  let copilot = document.querySelector("input[name=copilotName]").value;
  let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
  let cargoMass = document.querySelector("input[name=cargoMass]").value;
    

  event.preventDefault(); 
  
  formSubmission(document, pilot, copilot, fuelLevel, cargoMass)
    
  });
 
 


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let index = pickPlanet(listedPlanets);
       addDestinationInfo(document, listedPlanets[index].name, listedPlanets[index].diameter,listedPlanets[index].star, listedPlanets[index].distance, listedPlanets[index].moons, listedPlanets[index].image)
   })
   
});