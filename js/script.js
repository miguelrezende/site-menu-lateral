function menuOpener(){
    let menuArea = document.getElementById("menu-content");
    if (menuArea.classList.contains("menu-opened") == true){
        menuArea.classList.remove("menu-opened")
    }
    else{
        menuArea.classList.add("menu-opened");
    }
}