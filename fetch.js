const getData = fetch ("http://localhost:3000/listData")
    .then(response => response.json())
    .then(body => body);

const result = async () => {
    const data = await getData;
    console.log(data);
    createDiv(data);
}
const data = result();


const createDiv = (data) => {
    const title = data.find((item) => {
        return item.title === "Report1"
    })
    const div = document.createElement("div")
    div.style.backgroundColor="green";
    div.textContent = title.title;
    div.setAttribute("id", title.id)
    document.body.append(div);
}
const changeColor = () => {
    const idButton = document.getElementById("321")
    const div = document.getElementById("EIFD-CESF-OIFU")
    idButton.addEventListener("mousedown",() => {
        div.style.backgroundColor="gray";
    })
    idButton.addEventListener("mouseup",() => {
        div.style.backgroundColor="green";
    })

}

