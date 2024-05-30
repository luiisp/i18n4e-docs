const popup = document.getElementById("popup");
const popupMsg = popup.querySelector("span");

const showMsg = (msg) => {
    popupMsg.innerHTML = msg;
    popup.style.display = "";
    popup.classList.add("show");
    popup.classList.remove("hide");
    
    setTimeout(() => {
        console.log("show");
        popup.classList.remove("show");
        popup.classList.add("hide");

        setTimeout(() => {
            popup.style.display = "none";
        }, 1200);
    }, 1200);
};


const copyToClipboard = (inputE) => {
    const copyText = inputE;
    navigator.clipboard.writeText(copyText.value);
    document.execCommand("copy");
    showMsg("Copied to clipboard");

}


const copyE = document.querySelectorAll("#copy");
copyE.forEach(e => {
    e.addEventListener("click", () =>{
        copyToClipboard(e.parentElement.querySelector("input"));
    });
});