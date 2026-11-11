let obj = new Object();
const http = new XMLHttpRequest();
    
    http.onload = function(){

        if (http.status < 200 || http.status >= 300) {
            alert("Hiba: a termékadatok betöltése nem sikerült.");
            return;
        }

        try {
            obj = JSON.parse(this.responseText);
        } catch (error) {
            alert("Hiba: a termékadatok formátuma érvénytelen.");
            return;
        }
        console.log(obj.name)
        document.getElementById("kep1").src= obj.image
        document.getElementById("kisKep1").src= obj.image
        document.getElementById("kisKep2").src= obj.image
        document.getElementById("kisKep3").src= obj.image
        document.getElementById("termekNev").textContent = obj.name
        document.getElementById("ertek").textContent = obj.price.toLocaleString("hu-HU") + " " + obj.currency
        document.getElementById("leiras").textContent = obj.description
        document.getElementById("raktaron").textContent = obj.stock
        document.getElementById("ertekeles").textContent = obj.rating
        document.getElementById("gyarto").textContent = obj.manufacturer.name
        document.getElementById("gyarto_orszag").textContent = obj.manufacturer.country

        const featureList = document.getElementById("funkciok")
        obj.features.forEach(function(feature) {
            const item = document.createElement("li")
            item.textContent = feature
            featureList.appendChild(item)
        })

        document.getElementById("ertekeles1").textContent = obj.reviews[0].user
        document.getElementById("ertekeles2").textContent = obj.reviews[0].comment
        document.getElementById("ertekeles3").textContent = obj.reviews[1].user
        document.getElementById("ertekeles4").textContent = obj.reviews[1].comment
        
        






    }
    http.onerror = function(){
        alert("Hiba: a JSON nem elérhető.");
    }
    http.open("GET", "termek.json");
    http.send();