window.onload = function () {

    let ps = document.querySelector("#ps");
    let xb = document.querySelector("#xb");

    ps.addEventListener('mouseover', function (){
        ps.style.width = "400%";
    })

    ps.addEventListener('mouseleave', function(){
        ps.style.width = "50%"
    })

    xb.addEventListener('mouseover', function (){
        xb.style.width = "400%"
    })

    xb.addEventListener('mouseleave', function(){
        xb.style.width = "50%"
    })
}