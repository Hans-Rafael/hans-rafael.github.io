//En JavaScript, lo hago con los métodos getElementById(),
// getElementsByClassName() o querySelector()

function x (){
    let d = new Date();
    return(
        alert(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    );
    alert("Este es mi primer script")
}

//document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()</h1>"