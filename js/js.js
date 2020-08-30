function scrolled() {
    if(window.pageYOffset > 100){
        NavigationBar.style.height = '3vw'
        menulogo.style.height = '2vw'
        menulogo.style.width = '2vw'
        NavigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    }
    else{
        NavigationBar.style.height = '6vw'
        menulogo.style.height = '4vw'
        menulogo.style.width = '4vw'
        NavigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
}