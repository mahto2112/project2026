let heading=[
    "Complete Auth Flow",
    "Complete Auth Flow 2",
    "Complete Auth Flow 3"
];

let text=[
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."
];

let cur=0;

function showSlide(){

    document.getElementById("heading").innerHTML = heading[cur];
    document.getElementById("text").innerHTML = text[cur];

    if(cur==0){
        document.getElementById("dot1").style.backgroundColor="rgb(24,226,226)";
        document.getElementById("dot2").style.backgroundColor="grey";
        document.getElementById("dot3").style.backgroundColor="grey";
    }
    else if(cur==1){
        document.getElementById("dot1").style.backgroundColor="grey";
        document.getElementById("dot2").style.backgroundColor="rgb(24,226,226)";
        document.getElementById("dot3").style.backgroundColor="grey";
    }
    else{
        document.getElementById("dot1").style.backgroundColor="grey";
        document.getElementById("dot2").style.backgroundColor="grey";
        document.getElementById("dot3").style.backgroundColor="rgb(24,226,226)";
    }
}

setInterval(function(){
    cur=cur+1;

    if(cur>2){
        cur=0;
    }
    showSlide();

},2000);