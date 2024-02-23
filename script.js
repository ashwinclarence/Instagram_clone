function ShowMoreNav(){
    var moreOption=document.getElementById("more-option-container");
    if(moreOption.style.display=="none"){
        moreOption.style.setProperty('display','block','important');
       document.getElementById("show-more-button").style.backgroundColor="#c7c7c7";
    }else{
        moreOption.style.setProperty('display','none','important')
        document.getElementById("show-more-button").style.backgroundColor="#ffffff";
    }
}