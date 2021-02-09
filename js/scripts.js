console.log('hello');

let dayOfWeek = [
    [1, "310 New Bern Ave #174, Raleigh, NC 27601"],
    [2, "316 Fayetteville St, Raleigh, NC 27601"],
    [3, "350 E Six Forks Rd #150, Raleigh, NC 27609"],
    [4, "236 Sunnybrook Rd, Raleigh, NC 27610"],
    [5, "4020 Carya Drive Raleigh, NC 27610"],
    [6, "1030 Merrimon Ave, Asheville, NC 28804"],
    [0, "Sorry, Sunday's We Are Closed ~ Come Food With Us Next Week!"]
];

let dateObj = new Date();
let currentDay = dateObj.getDay();
console.log(currentDay);