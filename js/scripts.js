

let dateObj = new Date();
let currentDay = dateObj.getDay();

let dayOfWeek = [
    [0, "Sorry, Sunday's We Are Closed ~ Come Food With Us Next Week!"],
    [1, "310 New Bern Ave #174, Raleigh, NC 27601"],
    [2, "316 Fayetteville St, Raleigh, NC 27601"],
    [3, "350 E Six Forks Rd #150, Raleigh, NC 27609"],
    [4, "236 Sunnybrook Rd, Raleigh, NC 27610"],
    [5, "4020 Carya Drive Raleigh, NC 27610"],
    [6, "1030 Merrimon Ave, Asheville, NC 28804"]
];


function todaysLocation () {
    for (let i=0; i < dayOfWeek.length; i++){
        if (dayOfWeek[i][0] == currentDay){
            document.getElementById('truckAddress').innerHTML = dayOfWeek[i][1];
        } else {
            return false
        }
    }
}
console.log(currentDay);
console.log(dayOfWeek[1][0]);
console.log(todaysLocation);