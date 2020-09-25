// Navigation Area:

screen_width = screen.width;

function scrolled() {
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

if(screen_width<= 425){

    navigation = document.querySelectorAll('#NavigationBar a');
    console.log(navigation)
}


// Call Me Functionality
document.getElementById("alert").addEventListener("click", function(){
document.querySelector('.PopCallBack').style.display='flex';})
        
document.getElementById("cross").addEventListener("click", function(){
document.querySelector('.PopCallBack').style.display='none';})