window.onload = function () {

    let ps = document.querySelector("#ps");
    let xb = document.querySelector("#xb");

    ps.addEventListener('mouseover', function (){
        ps.style.width = "400%";
        ps.style.transition = "600ms"
    })

    ps.addEventListener('mouseleave', function(){
        ps.style.width = "50%"
        ps.style.transition = "600ms"
    })

    xb.addEventListener('mouseover', function (){
        xb.style.width = "400%"
        xb.style.transition = "600ms"
    })

    xb.addEventListener('mouseleave', function(){
        xb.style.width = "50%"
        xb.style.transition = "600ms"
    })
}