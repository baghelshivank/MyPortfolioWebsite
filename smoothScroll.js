let navMenuAnchorTags = document.querySelectorAll("#nav-menu a");
// console.log(navMenuAnchorTags);
for(let i of navMenuAnchorTags){
    i.addEventListener("click", function(event){
        event.preventDefault();

        // var targetSectionId = this.href;
        var targetSectionId = this.textContent.trim().toLowerCase();
        // console.log(targetSectionId);

        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSection);

        // var targetSectionCoordinates = targetSection.getBoundingClientRect();
        // console.log(targetSectionCoordinates);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        },50);
    });
}




/* 

let navMenuAnchorTags = document.querySelectorAll("#nav-menu a");
var interval;
for(let i of navMenuAnchorTags){
    i.addEventListener("click", function(event){
        event.preventDefault();
        var targetSectionId= this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        // interval = setInterval(scrollVertically, 50, targetSection);

        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 50);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


*/