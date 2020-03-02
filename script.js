function buy(e) {
    // console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.parentElement);
    document.getElementById("mymaintable").removeChild(e.target.parentElement);
}

function sing() {
    if (document.getElementById("username").value != "" && document.getElementById("lastname").value != "" && document.getElementById("email").value != "" && document.getElementById("card").value != "") {
        var checkRadio = document.querySelector(
            'input[name="isAuthorized"]:checked');
          document.getElementById("myAccount").innerText(document.getElementById("username").value);  
    }
}

function add() {
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
        picture.className = "imagestyle";
        myDIV.appendChild(picture);

        var myname1 = document.createElement("p");
        myname1.textContent = "Велосипед - гірський";
        myname1.id = "name1";
        myname1.className = "paragraphstyles";
        myDIV.appendChild(myname1);
        var myname2 = document.createElement("p");
        myname2.textContent = "Рама - алюміній";
        myname2.id = "name2";
        myname2.className = "paragraphstyles";
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
        mybutton.className = "buttonstylesforgrid";


        var maintable = document.getElementById("mymaintable");
        maintable.appendChild(myDIV);
    }

}