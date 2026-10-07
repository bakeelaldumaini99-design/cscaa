/*
=================================================
 Middle East CSCA Platform
 Interactive JavaScript Engine

 Designed & Developed by:
 Bakeel Shajee Shajee Al-Dumaini
=================================================
*/



// ===============================
// LOADING SCREEN
// ===============================


window.addEventListener("load",()=>{


    setTimeout(()=>{

        const loader =
        document.getElementById("loader");


        if(loader){

            loader.style.display="none";

        }


    },2000);


});








// ===============================
// LANGUAGE SYSTEM
// ===============================


let currentLanguage =
localStorage.getItem("language") || "ar";



const languageBtn =
document.getElementById("languageBtn");




function changeLanguage(){


    const elements =
    document.querySelectorAll("[data-ar]");



    if(currentLanguage==="ar"){


        currentLanguage="en";


        document.documentElement.lang="en";


        document.body.classList.remove("rtl");

        document.body.classList.add("ltr");



        if(languageBtn){

            languageBtn.innerHTML="🇸🇦 العربية";

        }




    }else{


        currentLanguage="ar";


        document.documentElement.lang="ar";


        document.body.classList.remove("ltr");

        document.body.classList.add("rtl");



        if(languageBtn){

            languageBtn.innerHTML="🇬🇧 English";

        }



    }




    elements.forEach(el=>{


        el.textContent =
        el.dataset[currentLanguage];



    });




    localStorage.setItem(
    "language",
    currentLanguage
    );



}






if(languageBtn){


languageBtn.addEventListener(
"click",
changeLanguage
);


}









// ===============================
// THEME SYSTEM
// ===============================


const themeBtn =
document.getElementById("themeBtn");




let theme =
localStorage.getItem("theme");



if(theme==="light"){


document.body.classList.add(
"light-mode"
);


}





if(themeBtn){


themeBtn.onclick=()=>{


document.body.classList.toggle(
"light-mode"
);



if(
document.body.classList.contains(
"light-mode"
)

){


localStorage.setItem(
"theme",
"light"
);


themeBtn.innerHTML="🌙";


}else{


localStorage.setItem(
"theme",
"dark"
);


themeBtn.innerHTML="☀️";


}




};


}









// ===============================
// XP SYSTEM
// ===============================


let xp =
Number(
localStorage.getItem("xp")
)
||0;




const xpDisplay =
document.getElementById("xp");





function addXP(amount){


xp += amount;



localStorage.setItem(
"xp",
xp
);




if(xpDisplay){


xpDisplay.innerHTML=xp;


}




checkLevel();


}








function checkLevel(){


let level =
Math.floor(xp/500)+1;



const levelElements =
document.querySelectorAll(
".level"
);



levelElements.forEach(el=>{


el.innerHTML=

"Level "+level+

`
<div class="progress">

<div style="width:${xp%500/5}%"></div>

</div>
`;


});



}








checkLevel();
/* =========================================
   QUIZ SYSTEM
========================================= */


const answers =
document.querySelectorAll(".answers button");



answers.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        if(button.textContent.includes("F = ma")){


            button.style.background="#00ff88";

            button.style.color="#001018";


            addXP(10);



            showMessage(
            "✅ Correct! +10 XP"
            );



        }else{


            button.style.background="#ff3b5c";


            showMessage(
            "❌ Try Again"
            );


        }



    });


});






function showMessage(text){


let box =
document.querySelector(".score-box");



if(box){


box.innerHTML=text;


}


}









// =========================================
// SUBJECT OPENING
// =========================================



function openSubject(subject){


addXP(20);



alert(

currentLanguage==="ar"

?

"تم فتح قسم "+subject

:

subject+" section opened"

);



}







// =========================================
// START LEARNING
// =========================================



function startLearning(){


addXP(50);



document
.getElementById("subjects")
.scrollIntoView({

behavior:"smooth"

});


}










// =========================================
// PHYSICS SIMULATOR
// =========================================



const sliders =
document.querySelectorAll(
".controls input"
);



sliders.forEach(slider=>{


slider.addEventListener(
"input",
()=>{


const rocket =
document.querySelector(".rocket");



if(rocket){


let value =
slider.value;



rocket.style.transform =
`
translate(
-${value*2}px,
-${value}px
)
`;



}



});


});









// =========================================
// AI TUTOR DEMO
// =========================================



const aiButton =
document.querySelector(
".ai-input button"
);



const aiInput =
document.querySelector(
".ai-input input"
);



const aiAnswer =
document.querySelector(
".ai-answer"
);





if(aiButton){


aiButton.onclick=()=>{


let question =
aiInput.value;



if(question.trim()===""){


aiAnswer.innerHTML=

"Please write your question";


return;


}




let response="";



if(
question.toLowerCase()
.includes("newton")
){


response=

"Newton's Second Law: F = ma. Force equals mass multiplied by acceleration.";


}

else if(
question.toLowerCase()
.includes("ph")
){


response=

"pH measures acidity or alkalinity. pH = -log[H+].";


}

else if(
question.toLowerCase()
.includes("csca")
){


response=

"CSCA is an admission test used by many Chinese universities for international students.";


}

else{


response=

"I will help you understand this concept step by step. Keep learning!";


}





aiAnswer.innerHTML=response;



addXP(5);



};



}









// =========================================
// SCROLL ANIMATION
// =========================================



const cards =
document.querySelectorAll(
".subject-card,.university-card,.achievement"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:.2

}

);




cards.forEach(card=>{


card.style.opacity="0";


card.style.transform=
"translateY(40px)";


card.style.transition=
"all .6s ease";



observer.observe(card);



});
/* =========================================
   USER PROGRESS STORAGE
========================================= */



let progress = JSON.parse(

localStorage.getItem("progress")

)

||{

    math:0,

    physics:0,

    chemistry:0

};





function updateProgress(subject,value){



progress[subject]=value;



localStorage.setItem(

"progress",

JSON.stringify(progress)

);



}









// =========================================
// COMMAND SEARCH
=========================================



const commandBox =
document.getElementById(
"commandBox"
);



document.addEventListener(
"keydown",
(e)=>{


if(
(e.ctrlKey || e.metaKey)
&& e.key==="k"
){


e.preventDefault();



if(commandBox){


commandBox.style.display="flex";


}



}



});






if(commandBox){



commandBox.addEventListener(
"click",
(e)=>{


if(e.target===commandBox){


commandBox.style.display="none";


}



});



}









// =========================================
// INITIAL LANGUAGE LOAD
=========================================



window.addEventListener(
"DOMContentLoaded",
()=>{


if(currentLanguage==="en"){


document.body.classList.remove(
"rtl"
);


document.body.classList.add(
"ltr"
);



const elements =
document.querySelectorAll(
"[data-ar]"
);



elements.forEach(el=>{


el.textContent =
el.dataset.en;


});



if(languageBtn){


languageBtn.innerHTML=
"🇸🇦 العربية";


}



}else{


document.body.classList.add(
"rtl"
);



}




});









// =========================================
// DAILY LOGIN BONUS
=========================================



let lastLogin =
localStorage.getItem(
"lastLogin"
);



let today =
new Date()
.toDateString();




if(lastLogin!==today){



addXP(20);



localStorage.setItem(
"lastLogin",
today
);



}









// =========================================
// ONLINE STATUS
=========================================



window.addEventListener(
"online",
()=>{


console.log(
"CSCA Platform Online"
);


});




window.addEventListener(
"offline",
()=>{


console.log(
"Offline Mode Enabled"
);


});









// =========================================
// FOOTER YEAR UPDATE
=========================================



const year =
document.querySelector(
".copyright"
);



if(year){


year.innerHTML=

"© "+
new Date().getFullYear()
+
" Middle East Platform - All Rights Reserved";


}






/*
=================================================

END OF MIDDLE EAST CSCA PLATFORM ENGINE

Designed & Developed by:
Bakeel Shajee Shajee Al-Dumaini

=================================================
*/