function ClickCarName(carname) {
    debugger;
 
    var Car = document.getElementById("Car");
    var cars = document.getElementById("cars");
    var clicks = document.getElementById(carname);
    var countr = document.getElementById("countr");
    var num= parseInt(clicks.value);
    Car.innerText = carname.toUpperCase();
    cars.innerHTML = `<img src="Images/${carname}.jpg" width="400" height="300" onclick="ClickCount('${carname}')" >`;
    countr.innerText=num;
}
 function ClickCount(carname){
     debugger;
     var clicks = document.getElementById(carname);
     var countr = document.getElementById("countr");
     var num= parseInt(clicks.value);
     clicks.value =num+ 1;
    countr.innerText = num + 1;
 }
 
 