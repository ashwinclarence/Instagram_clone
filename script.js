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
document.getElementById("show-more-post-description").addEventListener("click",function(){
    document.getElementById("remaining-description-text").style.display="block";
    document.getElementById("show-more-post-description").style.display="none";
})
document.getElementById("show-less-post-description").addEventListener("click",function(){
    document.getElementById("remaining-description-text").style.display="none";
    document.getElementById("show-more-post-description").style.display="block";
})