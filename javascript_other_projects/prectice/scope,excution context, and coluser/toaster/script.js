// veriable scop
// execution context  : memory creation & excution phase
// lexical  scope vs dynamic scope
// clouserdefinetion and how  variabales are preserverd
function createtoste(confing) {
    return function (notification) {
        let div = document.createElement("div")
        div.textContent = notification
        div.className = `inline-block ${confing.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`
        document.querySelector(".parent").appendChild(div);
        if (confing.positionX !== "left" || confing.positionY !== " top") {
            document.querySelector(".parent").className += ` ${confing.positionX === "right" ? " right-5" : " left-5"} ${confing.positionY === "bottom" ? " bottom-5" : " top-5"}`;
        }
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, confing.duration * 1000);
    }
}

let toster = createtoste({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
})

toster("Download Done")
setTimeout(() => {
    toster("Harsh accepted your request");
}, 2000);
setTimeout(() => {
    toster("Rupesh send you a message");
}, 1500);