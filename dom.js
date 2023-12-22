
function fontColor(){
    var x = document.getElementById('fontcolor').value;
    document.getElementById('change').style.color=x
}

function fontSize(){
    var x = document.getElementById('fontsize').value;
    document.getElementById('changeit').style.fontSize=x
}

function backgroundColor(){
    var x = document.getElementById('backroundcolor').value;
    document.querySelector('div').style.backgroundColor=x;
}
function Border(){
    var x = document.getElementById('border').value;
    document.querySelector('div').style.borderRadius=x;
}
