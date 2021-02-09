

let dateObj = new Date();
let currentDay = dateObj.getDay();


const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const locations = [
    ["sunday", "Sorry, Sunday's We Are Closed ~ Come Food With Us Next Week!"],
    ["monday", "310 New Bern Ave #174, Raleigh, NC 27601"],
    ["tuesday", "316 Fayetteville St, Raleigh, NC 27601"],
    ["wednesday", "350 E Six Forks Rd #150, Raleigh, NC 27609"],
    ["thursday", "236 Sunnybrook Rd, Raleigh, NC 27610"],
    ["friday", "4020 Carya Drive Raleigh, NC 27610"],
    ["saturday", "1030 Merrimon Ave, Asheville, NC 28804"]
];


function todaysLocation () {
    for (let i=0; i < dayOfWeek.length; i++){
        if (dayOfWeek[i][0] == currentDay){
            document.getElementById('truckAddress').innerHTML = dayOfWeek[i][1];
        } 
    }
};


console.log(currentDay);
console.log(dayOfWeek[1][0]);
console.log(todaysLocation);