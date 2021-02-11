

let dateObj = new Date();
let currentDay = dateObj.getDay();

const dayOfWeek = [
    [0, "~Sorry, sunday's we are closed ~", "Come Food With Us Next Week!"],
    [1, "310 New Bern Ave #174, ", "Raleigh, NC 27601"],
    [2, "316 Fayetteville St, ", "Raleigh, NC 27601"],
    [3, "350 E Six Forks Rd #150, " , "Raleigh, NC 27609"],
    [4, "236 Sunnybrook Rd, ", "Raleigh, NC 27610"],
    [5, "4020 Carya Drive " , "Raleigh, NC 27610"],
    [6, "1030 Merrimon Ave, ", "Asheville, NC 28804"]
];


function todaysLocation () {
    for (let i=0; i < dayOfWeek.length; i++){
        if (dayOfWeek[i][0] == currentDay){
            document.getElementById('truckAddress').innerHTML = dayOfWeek[i][1];
            document.getElementById('truckAddress2').innerHTML = dayOfWeek[i][2];
        } 
    }
};

//Show Dropdowns when upper menu items are clicked

function showDropdowns() {
    if(document.getElementById('locationMap').style.display === 'none'){
        document.getElementById('locationMap').style.display = 'block';
    } else {
        document.getElementById('locationMap').style.display = 'none';
    }
    
}

function showOrderOnlineDropdown() {
    if(document.getElementById('orderOnline').style.display === 'none'){
        document.getElementById('orderOnline').style.display = 'block';
    } else {
        document.getElementById('orderOnline').style.display = 'none';
    }
    
}

// API to import google map based on the day of the week and location for that day

let map;
const truckSpot = [
    [0, -24.031050, -46.524210],
    [1, 35.779140, -78.634050],
    [2, 35.776270, -78.639830],
    [3, 35.8192996, -78.6276527],
    [4, 35.77757263183594, -78.5833969116211],
    [5, 35.7700929, -78.5688005],
    [6, 35.63391876220703, -82.55599212646484]
];


function initMap() {
    const myLatLng = { lat: 35.779140, lng: -78.634050 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }

  
let latitude = function lat() {
    for (i=0; i < truckSpot.length; i++){
        if(truckSpot[i] === currentDay){
            console.log(truckSpot[i][1]) ;
        }
    }
}

let longitude = function long() {
    for (i=0; i < truckSpot.length; i++){
        if(truckSpot[i] === currentDay){
            return truckSpot[i][2];
        }
    }
}

