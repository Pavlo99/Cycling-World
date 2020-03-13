function buy(e) {
    // console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.parentElement);
    document.getElementById("mymaintable").removeChild(e.target.parentElement);
}

function sing() {
    if (document.getElementById("username").value != "" && document.getElementById("lastname").value != "" && document.getElementById("email").value != ""
        && document.getElementById("card").value != "" && document.getElementById("pwd").value != "") {
        var checkRadio = document.querySelector(
            'input[name="isAuthorized"]:checked');
        alert(document.getElementById("username").value + " " + document.getElementById("lastname").value);
        document.location = "index.html";
    }
}

function add() {
    if (document.getElementById("myselectname").value != "" && document.getElementById("type").value != ""
        && document.getElementById("wheels").value != "" && document.getElementById("price").value != "") {
        var isValid = document.getElementById("wheels");
        if (isValid.checkValidity()) {
            if (!document.getElementById("price").validity.rangeOverflow) {
                var myDIV = document.createElement("div");
                myDIV.id = "mytableelem";
                myDIV.className = "mygoodsstyles";

                var picture = document.createElement("img");
                picture.src = "images/bike4.jpg";
                picture.id = "pict";
                picture.className = "imagestyle";
                myDIV.appendChild(picture);

                var myname1 = document.createElement("p");
                myname1.textContent = "Велосипед - " + document.getElementById("myselectname").value;
                myname1.id = "name1";
                myname1.className = "paragraphstyles";
                myDIV.appendChild(myname1);
                var myname2 = document.createElement("p");
                myname2.textContent = "Рама - " + document.getElementById("type").value;
                myname2.id = "name2";
                myname2.className = "paragraphstyles";
                myDIV.appendChild(myname2);
                var myname3 = document.createElement("p");
                myname3.textContent = "Колеса - " + document.getElementById("wheels").value;
                myname3.id = "name3";
                myname3.className = "paragraphstyles";
                myDIV.appendChild(myname3);
                var myname4 = document.createElement("p");
                myname4.textContent = "Ціна - " + document.getElementById("price").value;
                myname4.id = "name4";
                myname4.className = "paragraphstyles";
                myDIV.appendChild(myname4);

                var mybutton = document.createElement("button");
                mybutton.id = "name5";
                mybutton.addEventListener("click", buy);
                mybutton.textContent = "Купити";
                myDIV.appendChild(mybutton);
                mybutton.className = "buttonstylesforgrid";

                var maintable = document.getElementById("mymaintable");
                maintable.appendChild(myDIV);
            }
            else alert("Занадно велика ціна!")
        }
        else alert("Розмір коліс не коректний!");
    }
    else alert("Некоректний ввід даних!");
    // document.getElementById("name1").textContent = "Велосипед - " + document.getElementById("myselectname").value;
    // document.getElementById("name2").textContent = "Рама - " + document.getElementById("type").value;
    // document.getElementById("name3").textContent = "Колеса - " + document.getElementById("wheels").value;
    // document.getElementById("name4").textContent = "Ціна - " + document.getElementById("price").value;
    // document.getElementById("name5").textContent = "Купити";
}

function start() {
    for (var i = 0; i < 8; i++) {
        var myDIV = document.createElement("div");
        myDIV.id = "mytableelem";
        myDIV.className = "mygoodsstyles";

        var picture = document.createElement("img");
        picture.src = "images/bike4.jpg";
        picture.id = "pict";
        picture.style.marginTop = "2%";
        myDIV.appendChild(picture);

        var myname1 = document.createElement("p");
        myname1.textContent = "Велосипед - гірський";
        myname1.id = "name1";
        myname1.style.margin = "auto";
        myDIV.appendChild(myname1);
        var myname2 = document.createElement("p");
        myname2.textContent = "Рама - алюміній";
        myname2.id = "name2";
        myname2.style.margin = "auto";
        myDIV.appendChild(myname2);
        var myname3 = document.createElement("p");
        myname3.textContent = "Колеса - 26";
        myname3.id = "name3";
        myname3.className = "paragraphstyles";
        myDIV.appendChild(myname3);
        var myname4 = document.createElement("p");
        myname4.textContent = "Ціна - " + (i + 1) * 1000;
        myname4.id = "name4";
        myname4.className = "paragraphstyles";
        myDIV.appendChild(myname4);

        var mybutton = document.createElement("button");
        mybutton.id = "name5";
        mybutton.addEventListener("click", buy);
        mybutton.textContent = "Купити";
        myDIV.appendChild(mybutton);
        mybutton.style.marginBottom = "2%";
        mybutton.style.fontSize = "120%";
        mybutton.style.marginTop = "2%";

        var maintable = document.getElementById("mymaintable");
        maintable.appendChild(myDIV);

    }
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    c.fillRect(0, 0, 500, 500);

    var data = [130, 170, 100, 80, 120];


    c.fillStyle = "gainsboro";
    c.fillRect(0, 0, 1000, 1000);

    // рисуем данные
    c.fillStyle = "blue";
    for (var i = 0; i < data.length; i++) {
        var dp = data[i];
        c.fillRect(40 + i * 200, 960 - dp * 5, 100, dp * 5);
    }
    c.fillStyle = "black";
    c.lineWidth = 2.0;
    c.beginPath();
    c.moveTo(25, 10);
    c.lineTo(25, 960);
    c.lineTo(1000, 960);
    c.stroke();

    c.fillStyle = "black";
    for (var i = 0; i < 6; i++) {
        c.fillText((5 - i) * 20 + "", 0, i * 160 + 65);
        c.beginPath();
        c.moveTo(20, i * 160 + 60);
        c.lineTo(25, i * 160 + 60);
        c.stroke();
    }

    var labels = ["28", "26", "24", "20", "16"];
    // выводим текст
    for (var i = 0; i < 5; i++) {
        c.fillText(labels[i], 80 + i * 200, 980);
    }
    
    var kv = document.getElementById("kv");
    var ckv = kv.getContext("2d");
    ckv.fillStyle = "white";
    ckv.lineWidth = 6.0;
    ckv.strokeRect(0, 0, 300, 300);
}