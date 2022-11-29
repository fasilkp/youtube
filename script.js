var sideBarBtn=document.getElementById("sideBarBtn");
var sideBarClicked=false;
sideBarBtn.onclick=()=>{
    var sideBar=document.getElementById("sideBar");
    var bodyContainer=document.getElementById("bodyContainer");
    sideBarClicked=!sideBarClicked;
    if(sideBarClicked){
        sideBar.style.flex="0%";
        sideBar.style.fontSize="0px";
        sideBar.style.width="0px";
        bodyContainer.style.flex="90%"
    }
    else{
        sideBar.style.flex="15%";
        sideBar.style.fontSize="1rem";
        sideBar.style.width="100%";
    }
}