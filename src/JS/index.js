
/* *This file is for make css corrections in our page components */

//* *This is for adjust the slider images
document.getElementById('webAppImage').style.marginTop = '11.5%';

document.getElementById('phoneAppImage').style.marginTop = '-12%';

document.getElementById('phoneAppImage').style.marginRight = '34%';

document.getElementById('phoneAppImage').style.marginLeft = '16%';

if(document.getElementById('mainSection').style.flexDirection == 'column-reverse'){

        //* *This is for adjust the slider images
    document.getElementById('webAppImage').style.marginTop = '29.5%';

    document.getElementById('phoneAppImage').style.marginTop = '-13%';


}


//* *This is for adjust the page logo hover: 
document.getElementById('logoContainer').onmouseover = () => {

    document.getElementById('pageLogoSpan').style.color = '#079cff';

}

document.getElementById('logoContainer').onmouseout = () => {

    document.getElementById('pageLogoSpan').style.color = '#ffffff';

}


/* *Code for copy the email element: */
document.getElementById('gmailIcon').onmouseover = () => {

    setTimeout(() => {
        
        document.getElementById('gmailIconMessage').style.visibility = 'visible';

    }, 300);

}


document.getElementById('gmailIconMessage').onmouseout = () => {

    setTimeout(() => {
        
        document.getElementById('gmailIconMessage').style.visibility = 'hidden';

    }, 300);

};


document.getElementById('gmailIconMessage').addEventListener('click',(event)=>{

    event.preventDefault();

    navigator.clipboard.writeText('publicadis@gmail.com');

})
    

/* *Code for the dinamic navbar: */

let throttling = false;

function onScrollThrottled() {

    if (!throttling) {

    throttling = true;

    requestAnimationFrame(() => {

        onScroll();

        throttling = false;

    });

    }
}


let navbarTop = 0;
let transition = true;
let position = "absolute";
let lastScrollPosition = 0;

const navbar = document.getElementById("navBar");

function onScroll() {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition <= 0) {

    lastScrollPosition = 0;
    navbarTop = 0;

    if (position !== "absolute") { transition = true; }
    else { transition = false; }
    position = "absolute";

    } else {
    
    if (currentScrollPosition > lastScrollPosition) {

        if (position !== "absolute") { transition = true; }
        else { transition = false; }
        position = "absolute";

        let { top, height } = navbar.getBoundingClientRect()
        navbarTop = currentScrollPosition + Math.max(top, -height);

    } else {

        const { top } = navbar.getBoundingClientRect()

        if (top >= 0) {

            navbarTop = 0;

            if (position !== "fixed") {
                
                transition = true; 
            
            }
            else { 
                
                transition = false; 
            
            }
            
            position = "fixed";

        }

    }

    lastScrollPosition = currentScrollPosition;

    }

    navbar.style = `position: ${position}; top: ${navbarTop}px; transition: ${ transition ? "none" : "100ms linear" }`;

}

    window.addEventListener("scroll", onScrollThrottled, { passive: true }


);

// /* *Intervals for our animation: */
// let interval1, interval2 ,interval3;

// let views =  8752;
// let anounces = 3989;
// let downloads = 200;

// let i = 0;

// function loadHeroData(){

//     while(i != views + anounces + downloads){

//         interval1 = setInterval(() => {

//             document.getElementById('viewsFeature').innerHTML = i;

//         }, 60);
        
//         interval2 = setInterval(() => {

//             document.getElementById('anouncesFeature').innerHTML = i;
            
//         }, 70);

//         interval3 = setInterval(() => {
            
//             document.getElementById('downloadsFeature').innerHTML = i;

//         }, 80);

        
//         if(i == views){

//             clearInterval(interval1);

//         }

//         if(i == anounces){

//             clearInterval(interval2);

//         }

//         if(i == downloads){

//             clearInterval(interval3);

//         }

//     }
    

    

// }


// let observer = new IntersectionObserver(entry => {

//     if(entry[0].isIntersecting == true){

//         loadHeroData();

//     }   else{

//         resetHeroData();
//     }

//     console.log(entry);


// });

// observer.observe(document.querySelector(".heroFeatures"));