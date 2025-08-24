window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script27 = function()
{
  document.getElementById("seek").disabled = true;
}

window.Script28 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

}

window.Script29 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 1, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script30 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 1, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script31 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 1, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script32 = function()
{
  document.getElementById("seek").disabled = true;

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 1, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script33 = function()
{
  var wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(wind, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

}

window.Script34 = function()
{
  var wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(wind, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script35 = function()
{
  var style = document.createElement('style');
style.innerHTML = '#seek { pointer-events: none; }';
document.head.appendChild(style);

}

window.Script36 = function()
{
  // Getting the player
// Getting the player
const player = GetPlayer();

// Get references to the objects you want to move and check boundaries
const objectSpray = document.querySelector("[data-acc-text='Spray']");
const objectAim = document.querySelector("[data-acc-text='Aim']");
const objectAimRect = objectAim.getBoundingClientRect(); // Get Aim object's bounding rectangle

// Function to update object position based on mouse/touch cursor
function updatePosition(event) {
    let mouseX, mouseY;
    if (event.type === 'mousemove') {
        mouseX = event.clientX;
        mouseY = event.clientY;
    } else if (event.type === 'touchmove') {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
    }
    
    // Check if the mouse/touch is within the slide boundaries
    if (mouseX && mouseY) {
        const slide = document.getElementById('slide');
        const slideRect = slide.getBoundingClientRect();

        // Calculate adjusted position for the object to ensure mouse/touch is at its center
        const adjustedX = mouseX - (objectSpray.offsetWidth / 2) - slideRect.left;
        const adjustedY = mouseY - (objectSpray.offsetHeight / 2) - slideRect.top;

        // Update player variables with adjusted mouse/touch coordinates
        player.SetVar("SL_mouseX", adjustedX);
        player.SetVar("SL_mouseY", adjustedY);

        // Update object position using GSAP animation
        gsap.to(objectSpray, { x: adjustedX, y: adjustedY });

        // Check if Spray is within Aim boundaries
        const sprayRect = objectSpray.getBoundingClientRect();
        const isInsideAim = (
            sprayRect.left >= objectAimRect.left &&
            sprayRect.right <= objectAimRect.right &&
            sprayRect.top >= objectAimRect.top &&
            sprayRect.bottom <= objectAimRect.bottom
        );

        // Update aiming status based on Spray's position
        player.SetVar("Aiming", isInsideAim);
    }
}

// Add event listeners to track mouse/touch movement
document.addEventListener("mousemove", updatePosition);
document.addEventListener("touchmove", updatePosition);


var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script37 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});


}

window.Script38 = function()
{
  var style = document.createElement('style');
style.innerHTML = '#seek { pointer-events: none; }';
document.head.appendChild(style);

}

window.Script39 = function()
{
  // Getting the player
const player = GetPlayer();

// Get references to the objects you want to move and check boundaries
const objectSpray = document.querySelector("[data-acc-text='Spray']");
const objectAim = document.querySelector("[data-acc-text='Aim2']");
const objectAimRect = objectAim.getBoundingClientRect(); // Get Aim object's bounding rectangle

// Function to update object position based on mouse/touch cursor
function updatePosition(event) {
    let mouseX, mouseY;
    if (event.type === 'mousemove') {
        mouseX = event.clientX;
        mouseY = event.clientY;
    } else if (event.type === 'touchmove') {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
    }
    
    // Check if the mouse/touch is within the slide boundaries
    if (mouseX && mouseY) {
        const slide = document.getElementById('slide');
        const slideRect = slide.getBoundingClientRect();

        // Calculate adjusted position for the object to ensure mouse/touch is at its center
        const adjustedX = mouseX - (objectSpray.offsetWidth / 2) - slideRect.left;
        const adjustedY = mouseY - (objectSpray.offsetHeight / 2) - slideRect.top;

        // Update player variables with adjusted mouse/touch coordinates
        player.SetVar("SL_mouseX", adjustedX);
        player.SetVar("SL_mouseY", adjustedY);

        // Update object position using GSAP animation
        gsap.to(objectSpray, { x: adjustedX, y: adjustedY });

        // Check if Spray is within Aim boundaries
        const sprayRect = objectSpray.getBoundingClientRect();
        const isInsideAim = (
            sprayRect.left >= objectAimRect.left &&
            sprayRect.right <= objectAimRect.right &&
            sprayRect.top >= objectAimRect.top &&
            sprayRect.bottom <= objectAimRect.bottom
        );

        // Update aiming status based on Spray's position
        player.SetVar("Aiming", isInsideAim);
    }
}

// Add event listeners to track mouse/touch movement
document.addEventListener("mousemove", updatePosition);
document.addEventListener("touchmove", updatePosition);


var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script40 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});


}

window.Script41 = function()
{
  var style = document.createElement('style');
style.innerHTML = '#seek { pointer-events: none; }';
document.head.appendChild(style);

}

window.Script42 = function()
{
  // Getting the player
// Getting the player
const player = GetPlayer();

// Get references to the objects you want to move and check boundaries
const objectSpray = document.querySelector("[data-acc-text='Spray']");
const objectAim = document.querySelector("[data-acc-text='Aim']");
const objectAimRect = objectAim.getBoundingClientRect(); // Get Aim object's bounding rectangle

// Function to update object position based on mouse/touch cursor
function updatePosition(event) {
    let mouseX, mouseY;
    if (event.type === 'mousemove') {
        mouseX = event.clientX;
        mouseY = event.clientY;
    } else if (event.type === 'touchmove') {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
    }
    
    // Check if the mouse/touch is within the slide boundaries
    if (mouseX && mouseY) {
        const slide = document.getElementById('slide');
        const slideRect = slide.getBoundingClientRect();

        // Calculate adjusted position for the object to ensure mouse/touch is at its center
        const adjustedX = mouseX - (objectSpray.offsetWidth / 2) - slideRect.left;
        const adjustedY = mouseY - (objectSpray.offsetHeight / 2) - slideRect.top;

        // Update player variables with adjusted mouse/touch coordinates
        player.SetVar("SL_mouseX", adjustedX);
        player.SetVar("SL_mouseY", adjustedY);

        // Update object position using GSAP animation
        gsap.to(objectSpray, { x: adjustedX, y: adjustedY });

        // Check if Spray is within Aim boundaries
        const sprayRect = objectSpray.getBoundingClientRect();
        const isInsideAim = (
            sprayRect.left >= objectAimRect.left &&
            sprayRect.right <= objectAimRect.right &&
            sprayRect.top >= objectAimRect.top &&
            sprayRect.bottom <= objectAimRect.bottom
        );

        // Update aiming status based on Spray's position
        player.SetVar("Aiming", isInsideAim);
    }
}

// Add event listeners to track mouse/touch movement
document.addEventListener("mousemove", updatePosition);
document.addEventListener("touchmove", updatePosition);


var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 1, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});
}

window.Script43 = function()
{
  var Spray = document.querySelectorAll("[data-acc-text='Spray']");
gsap.to(Spray, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});

var Wind = document.querySelectorAll("[data-acc-text='Wind']");
gsap.to(Wind, {
  opacity: 0, // Setting opacity to 1 to fade in the elements
  duration: 0.5, // Duration of the animation in seconds
  ease: "power2.inOut" // Easing function for smooth animation
});


}

};
