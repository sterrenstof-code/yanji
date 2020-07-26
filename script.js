//calender

let knopCalendar = document.querySelector(".knoppen-main-calendar");
let calendarMain = document.querySelector(".calendar-main");

let calendarVisible = false;

knopCalendar.addEventListener("click", function(){
    if (calendarVisible == false){
        calendarMain.style.display = "block";
        console.log("block");
        calendarVisible = true;

        preiseMain.style.display = "none";
        preiseVisible = false;

        uberMichMain.style.display = "none";
        uberMichVisible = false;

        anmeldungMain.style.display = "none";
        anmeldungVisible = false;

    }
    else {
        calendarMain.style.display = "none";
        console.log("none");
        calendarVisible = false;
    };
})

//preise

let knopPreise = document.querySelector(".knoppen-main-preise");
let preiseMain = document.querySelector(".preise-main");

let preiseVisible = false;

knopPreise.addEventListener("click", function(){
    if (preiseVisible == false){
        preiseMain.style.display = "block";
        console.log("block");
        preiseVisible = true;

        calendarMain.style.display = "none";
        calendarVisible = false;

        uberMichMain.style.display = "none";
        uberMichVisible = false;

        anmeldungMain.style.display = "none";
        anmeldungVisible = false;

    }
    else {
        preiseMain.style.display = "none";
        console.log("none");
        preiseVisible = false;
    };
})

//uberMich

let knopUberMich = document.querySelector(".bookIt-main ");
let uberMichMain = document.querySelector(".uberMich-main");

let uberMichVisible = false;

knopUberMich.addEventListener("click", function(){
    if (uberMichVisible == false){
        uberMichMain.style.display = "block";
        console.log("block");
        uberMichVisible = true;

        preiseMain.style.display = "none";
        preiseVisible = false;

        calendarMain.style.display = "none";
        calendarVisible = false;

        anmeldungMain.style.display = "none";
        anmeldungVisible = false;

    }
    else {
        uberMichMain.style.display = "none";
        console.log("none");
        uberMichVisible = false;
    };
})


//anmeldung

let knopAnmeldung = document.querySelector(".knoppen-main-anmeldung");
let anmeldungMain = document.querySelector(".anmeldung-main");

let anmeldungVisible = false;

knopAnmeldung.addEventListener("click", function(){
    if (anmeldungVisible == false){
        anmeldungMain.style.display = "block";
        console.log("block");
        anmeldungVisible = true;

        preiseMain.style.display = "none";
        preiseVisible = false;

        calendarMain.style.display = "none";
        calendarVisible = false;

        uberMichMain.style.display = "none";
        uberMichVisible = false;

    }
    else {
        anmeldungMain.style.display = "none";
        console.log("none");
        anmeldungVisible = false;
    };
})

// Johanna Madeleine

const title = document.querySelector(".firstTitle-main ");

title.addEventListener("click", function(){
    anmeldungMain.style.display = "none";
    anmeldungVisible = false;
    preiseMain.style.display = "none";
    preiseVisible = false;
    calendarMain.style.display = "none";
    calendarVisible = false;
    uberMichMain.style.display = "none";
    uberMichVisible = false;
});