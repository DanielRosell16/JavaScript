import {senators} from './senators.js'; 

import {representatives} from './representatives.js'; 

function simplifyCongress(reps, sens) {

   // console.log(reps);


    let finalArray = [];

    // simplifying the arrays for reps

   reps.forEach ((rep) => {

       //console.log(rep)

        // only keep props from the object that we want/need

       let simpleRep = {
           fullName: `${rep.first_name} ${rep.last_name}` ,
           shortTitle: rep.short_title,
           seniority: rep.seniority,
           party: rep.party,
           imgUrl: `https://www.govtrack.us/static/legislator-photos/${rep.govtrack_id}-100px.jpeg`
       }

       finalArray.push(simpleRep)
   })

       // simplifying the arrays for sens

       sens.forEach ((sen) => {

       // console.log(sen)

     // only keep props from the object that we want/need

        let simpleSen = {
            fullName: `${sen.first_name} ${sen.last_name}` ,
            shortTitle: sen.short_title,
            seniority: sen.seniority,
            party: sen.party,
            imgUrl:`https://www.govtrack.us/static/legislator-photos/${sen.govtrack_id}-100px.jpeg`
        }

        finalArray.push(simpleSen)

    })


    // return the arrays how I want/need

    //console.log(finalArray);

   return finalArray;

}

const simpleCongressPeople = simplifyCongress(representatives, senators)

//helper functions

//function to select HTML elements

function selectElement(selectorStrings) {
    return document.querySelector(selectorStrings);
}

//function to create HTML elements

function createElement(elementTypeString) {
    return document.createElement(elementTypeString)
}

//function to append

function appendElement(elementToAppendTo, content){
    elementToAppendTo.append(content)
}

//function text Node

function createtextNode(text) {
    return document.createTextNode(text)
}

//todo write a function that sorts by seniority

const congressGrid = selectElement('#congressGrid');



simpleCongressPeople.forEach((person) => {
    //do things with the person like create elements
    
    let personDiv = createElement('div');

    let personText = createtextNode(person.fullName)

    let personImg = createElement('img');

    personImg.setAttribute('src', person.imgUrl)  
            
    appendElement(congressGrid, personImg)

})

//delcare a new function 

function displayCongress(simpleCongressPeople, selectElement) {


}
//this functions job is to render or show the people on the HTML page

//function will take 2 inputs, one for an simple array of congress, and one that is an 
//element to attach the elements too that is already in the HTML

    //clear out the main element
    // func element.innerHTML = ''

    //loop (forEach) over each item in the array and create the HTML nodes/structure that is needed
  
        //attach the content to the main element.










let sortedCongress = simpleCongressPeople.sort((a,b) => {
    return a.seniority - b.seniority
})

 console.log(simpleCongressPeople)
