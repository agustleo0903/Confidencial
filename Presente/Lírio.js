const stem =
document.querySelector(".stem");

const petals =
document.querySelectorAll(".petal");

const center =
document.querySelector(".center");

const message =
document.getElementById("message");

stem.classList.add("grow");

petals.forEach((petal,index)=>{

    setTimeout(()=>{

        petal.classList.add("bloom");

    },2500 + (index * 450));

});

setTimeout(()=>{

    center.classList.add("showCenter");

},5200);

setTimeout(()=>{

    message.classList.add("show");

},6200);