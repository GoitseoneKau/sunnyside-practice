//initialise variables to trget burger element and navigation list
    let burger = document.getElementById("burger");
    let navUl = document.getElementById("nav");
    burger.onclick = ()=>{
        navUl.classList.toggle("show");//toggle the class show, show the navigation list when in mobile form
    }

    //set vaariable to target nav tag
    let nav = document.querySelector("nav");
    window.onscroll=()=>{//onscroll event on window to detect when scrollbar is lower/higher than 50
        if(this.scrollY>50){
            nav.style.cssText = "background-color:#35bbf9;color:black";//change navbar background color if scrollbar greater than 50
        }
        if(this.scrollY<50){
            nav.style.cssText = "background-color:#35bbf90;color:white";//return navbar background color to original if scrollbar lower than 50
        }
    }
