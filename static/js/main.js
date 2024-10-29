onload = () => {
    // Write your code here
    let elem = document.createElement("p");
    elem.textContent = "Hello World! This text is generated with Javascript!";
    let body = document.getElementById("hoge");
    body.appendChild(elem);
}