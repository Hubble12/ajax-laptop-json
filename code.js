let obj = new Object();
const http = new XMLHttpRequest();
    
    http.onload = function(){
        obj = JSON.parse(this.responseText);
        console.log(obj.name)
        document.getElementById("kep1").src= obj.image
        document.getElementById("kisKep1").src= obj.image
        document.getElementById("kisKep2").src= obj.image
        document.getElementById("kisKep3").src= obj.image
        document.getElementById("termekNev").innerHTML= obj.name
        document.getElementById("ertek").innerHTML= obj.price + obj.currency
        document.getElementById("leiras").innerHTML= obj.description
        document.getElementById("raktaron").innerHTML= obj.stock
        document.getElementById("ertekeles").innerHTML= obj.rating
        document.getElementById("gyarto").innerHTML= obj.manufacturer.name
        document.getElementById("gyarto_orszag").innerHTML= obj.manufacturer.country
        document.getElementById("funkciok").innerHTML= obj.features
        document.getElementById("ertekeles1").innerHTML= obj.reviews[0].user
        document.getElementById("ertekeles2").innerHTML= obj.reviews[0].comment
        document.getElementById("ertekeles3").innerHTML= obj.reviews[1].user
        document.getElementById("ertekeles4").innerHTML= obj.reviews[1].comment
        
        






    }
    http.open("GET", "termek.json");
    http.send();