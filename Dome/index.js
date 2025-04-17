let heading1 = document.getElementById("hd1")
console.log(heading1)
heading1.style.color = "red"
let division = document.createElement("div")
division.textContent = "This is div"
 let body = document.getElementById("bd")
 body.appendChild(division)

 let form = document.getElementById("fm")
 form.addEventListener("submit",function(event){
    event.preventDefault()
    let val = document.getElementById("inp").value
    let pg = document.createElement("p")
    pg.textContent = `Selected Date: ${val}`
    body.appendChild(pg)
    document.getElementById("inp").value = ""
})