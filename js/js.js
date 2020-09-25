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
