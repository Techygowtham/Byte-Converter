document.getElementById("output").style.visibility="hidden";
document.getElementById("lbsinput").addEventListener("input",function(e){
    document.getElementById("output").style.visibility="visible";
    let lbs = e.target.value;
    document.getElementById("gb").innerHTML=lbs*1024;
    document.getElementById("mb").innerHTML=lbs*1048576;
    document.getElementById("kb").innerHTML=lbs*1073741824;
})

