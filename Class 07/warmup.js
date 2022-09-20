function changeBackground(color) {
    console.log("it works")

    document.body.style.backgroundColor = color
}

function colorChanged() {
    console.log("Color Changed")
    console.log(this.value)
    changeBackground(this.value)
}

const colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener("change", colorChanged)

document.getElementById("colorForm").addEventListener("submit", () => {
    console.log("Form submitted");

    const p = document.createElement("p");
    p.innerHTML = "The form submission";
    document.appendChild(p)
})