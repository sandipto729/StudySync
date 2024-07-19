//alert("Hi");

//email id part colour and discolour 

let emailid = document.querySelector(".news-email");
// let emailright = document.querySelector(".news-right");

emailid.addEventListener('click', function(event) {
    emailid.style = "border-color: #2563eb; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transition: 0s;";
    // flag2 = false;
    event.stopPropagation(); // Prevent click from bubbling to document
});

// emailright.addEventListener('click', function() {
//     if (flag2) emailid.style = "border: 1px solid #ccc;";
//     flag2 = true;
// });

document.addEventListener('click', function(event) {
    // Check if the click is outside of emailid
    if (!emailid.contains(event.target)) {
        emailid.style = ""; // Reset styles or set to initial state
        // flag2 = true;
    }
});



// let flag1=true;
// let card1=document.querySelector("#card1");

// card1.addEventListener('click', function() {
//     if(flag1){
//         card1.style.transform = "scale(1.1)";
//         flag1=false;

//     setTimeout(function() {
//         if(!flag1)card1.style.transform = "scale(1)";
//         flag1=true;
//     }, 5000);
//     }
//     else{
//         card1.style.transform = "scale(1)";
//         flag1=true;
//     }
    
// });


// feature div part select and scale 

const featureCards = document.querySelectorAll('.feature-card');
let cards = document.querySelectorAll("[id^='card']"); // Selects all elements whose id starts with 'card'

for (let i = 1; i <= cards.length; i++) {
    let flag = true;
    let card = document.querySelector("#card" + i);

    card.addEventListener('click', function() {
        if (flag) {
            card.style.transform = "scale(1.1)";
            card.style.transition = "transform 1s";
            flag = false;

            
            featureCards.forEach((otherCard, index) => {
                if (index !== i - 1) { 
                    otherCard.style.transform = "scale(1)";

                }
            });

            setTimeout(function() {
                if (!flag) card.style.transform = "scale(1)";
                flag = true;
            }, 50000);
        } else {
            card.style.transform = "scale(1)";
            flag = true;
        }
    });
}


// let flag3=true;

let menuButton = document.querySelector(".menu-icon");
let crossIcon = document.querySelector("#cross"); // Directly target the cross icon
let menu = document.querySelector(".hidden-icon"); // The menu is the parent of the cross icon

menuButton.addEventListener('click', function() {
    menu.classList.add("class1");
    menu.classList.remove("hidden-icon");
});

crossIcon.addEventListener('click', function() {
    menu.classList.add("hidden-icon");
    menu.classList.remove("class1");
});