// Socials Hover
document.querySelector('.git').addEventListener('mouseover', function() {
    document.getElementById('gitImg').src = 'img/icons8-github.gif'
});
document.querySelector('.git').addEventListener('mouseleave', function() {
    document.getElementById('gitImg').src = 'img/icons8-github.png'
});

document.querySelector('.linked').addEventListener('mouseover', function() {
    document.getElementById('linkedImg').src = 'img/icons8-linkedin.gif'
});
document.querySelector('.linked').addEventListener('mouseleave', function() {
    document.getElementById('linkedImg').src = 'img/icons8-linkedin.png'
});


// Mouse Trailer
const trailer = document.getElementById("trailer");

const animateTrailer = (e, interactable) => 
{
    const x = e.clientX - (trailer.offsetWidth / 2),
    y = e.clientY - (trailer.offsetHeight / 2);

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interactable ? 4 : 1})`
    }
    
    trailer.animate(keyframes, {
        duration: 500,
        fill: "forwards"
    })
}

const getTrailerImg = type => 
{
    switch(type)
    {
        case "link":
            return "img/link.png"
        case "info":
            return "img/info.png"
        default:
            return "img/arrowTrailer.png"
    }
}

window.onmousemove = ev => 
{
    const interact = ev.target.closest(".interactable"),
    interacting = interact !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(ev, interacting);

    trailer.dataset.type = interacting ? interact.dataset.type : "";

    if(interacting)
    {
        icon.src = getTrailerImg(interact.dataset.type);
    }
}