// Set up text spans for animation
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id);

    if (element.textContent.trim() !== '') {
        const text = element.textContent.trim().split("");
    
        element.textContent = "";
        
        text.forEach((value, index) => {
            const outer = document.createElement("span");
            
            outer.className = "outer";
            
            const inner = document.createElement("span");
            
            inner.className = "inner";
            
            inner.style.animationDelay = `${rand(-5000, 0)}ms`;
            
            const letter = document.createElement("span");
            
            letter.className = "letter";
            
            letter.innerText = value;
            
            letter.style.animationDelay = `${index * 1000 }ms`;
            
            inner.appendChild(letter);
            
            outer.appendChild(inner);    
            
            element.appendChild(outer);
        });
    }
}

enhance("home");
enhance("contacts");
enhance("my")
enhance("works")
enhance("who")
enhance("am")
enhance("about")

const burg = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

if(burg){
    burg.addEventListener('click', function() {
        menu.classList.add('showMenu');
    });
}