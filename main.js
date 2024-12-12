const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".sliders input");

sliders.forEach((slider) => slider.addEventListener("input",generateShadow));

function generateShadow(){

    const shadowParams = getShadowParams();
    const boxShadow = createBoxShadow(...shadowParams);
    applyShadow(elem,boxShadow);
    upadateCode(boxShadow);
   
}


function getShadowParams(){

    const hShadow = parseInt(document.getElementById("h-shadow").value);
    const vShadow = parseInt(document.getElementById("v-shadow").value);
    const blurRadius = parseInt(document.getElementById("blur-radius").value);
    const spreadRadius = parseInt(document.getElementById("spread-radius").value);
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowColorOpacity = parseFloat(document.getElementById("shadow-color-opacity").value).toFixed(1);

    const shadowInset = document.getElementById("shadow-inset").checked;

    return [hShadow,vShadow,blurRadius,spreadRadius,shadowColor,shadowColorOpacity,shadowInset]

}

function createBoxShadow(hShadow,vShadow,blurRadius,spreadRadius,color,opacity,inset){

    const shadow = inset ? "inset" : "";
    const rgbaColor = hexToRgba(color,opacity);

    return `${shadow} ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgbaColor}`;

}

function hexToRgba(color,opacity){   ///  #ffee22

    const r = parseInt(color.substr(1,2), 16);
    const g = parseInt(color.substr(3,2), 16);
    const b = parseInt(color.substr(5,2), 16);

    return `rgba(${r},${g},${b},${opacity})`;

}

function applyShadow(element,boxShadow){
    element.style.boxShadow = boxShadow;
}

function upadateCode(text){
    code.textContent = `box-Shadow: ${text}`;
}

function copyCode(){
    const codeText = code.textContent;
    navigator.clipboard.writeText(codeText)
        .then(()=>{
            alert("Code Copied to Clipboard");
        });
}



window.onload = generateShadow;



// Select the toggle button and the icon
const toggleButton = document.getElementById("darkModeToggleId");
const darkModeIcon = document.getElementById("darkModeIcon");
const elementBox = document.getElementById("element");
const Datacontainer=document.querySelector(".container")
const footer=document.querySelector(".footer")

// Add an event listener for the button
toggleButton.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Update the icon based on the mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon"); // Moon icon for dark mode
    darkModeToggleId.style.backgroundColor = "#565656";
    darkModeToggleId.style.boxShadow = "inset 2px -2px 5px #bdbdbd,0 0 4px #5a5a5a";
    elementBox.style.backgroundColor="#fffd";
    Datacontainer.style.backgroundColor="#5c63865d";
    Datacontainer.style.boxShadow=" 0 0 10px #232c3599";
    footer.style.backgroundColor="#4448605d";
    footer.style.boxShadow="0 0 10px #444860b9";
    

    

} else {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun"); // Sun icon for light mode
    darkModeToggleId.style.backgroundColor = "#f6dd00"
    darkModeToggleId.style.boxShadow = "inset 4px -5px 10px #ff6200,0 0 8px #5a5a5a"
    elementBox.style.backgroundColor="#020617";
    Datacontainer.style.backgroundColor="#c8cacb84";
    Datacontainer.style.boxShadow=" 0 0 10px #8c949b99";
    footer.style.backgroundColor="#cbd5e1";
    footer.style.boxShadow="0 0 10px 3px #cbd5e1";

}
});