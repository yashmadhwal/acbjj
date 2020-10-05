// Navigation Area:

screen_width = screen.width;

function scrolled() {

    // the scrolling function
    if(window.pageYOffset > (screen.height/2+screen.width*0.1)){ x = 1}
    if(window.pageYOffset > (screen.height/2+screen.width*0.60)) x = 2
    if(window.pageYOffset > (screen.height/2+screen.width*1)) x = 4
    if(window.pageYOffset > (screen.height/2+screen.width*1.3))x = 5
    
    document.getElementById("MenuItem-1").style.borderBottom = "solid 0px"
    document.getElementById("MenuItem-2").style.borderBottom = "solid 0px"
    document.getElementById("MenuItem-4").style.borderBottom = "solid 0px"
    document.getElementById("MenuItem-5").style.borderBottom = "solid 0px"
    // document.getElementById("MenuItem-"+x).style.borderBottom = "solid 3px"

    if(window.pageYOffset > 100){
        NavigationBar.style.height = '2.5vw'
        menulogo.style.height = '1.75vw'
        menulogo.style.width = '1.75vw'
        NavigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
    else{
        NavigationBar.style.height = '6vw'
        menulogo.style.height = '4vw'
        menulogo.style.width = '4vw'
        NavigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
}

// Manipulating Navigation Area for Mobile
if(screen_width<= 425){
    navigation = document.querySelectorAll('#NavigationBar a');
    console.log(navigation)
    
    // for (let i = 0; i < navigation.length; i++) {
    //     navigation[i].innerHTML = 'hello'
    //   }
}


// Call Me Functionality
document.getElementById("AlertArea").addEventListener("click", function(){
document.querySelector('.PopCallBack').style.display='flex';})
        
document.getElementById("cross").addEventListener("click", function(){
document.querySelector('.PopCallBack').style.display='none';})

// Removing lineunder menulogo

//Active Scrolling