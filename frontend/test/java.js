
let button=document.getElementById("btn")
button.addEventListener("click", () => {
    let obj={
        name:document.getElementById("name").value,
        field:document.getElementById("field").value,
        date:document.getElementById("date").value,
        duration:document.getElementById("duration").value
    }
    let arr=[]
    arr.push(obj)
    if(obj.name!="" && obj.field!="" && obj.date!="" && obj.duration!=""){
        localStorage.setItem("Information",JSON.stringify(arr))
        window.location='hym.html'
    }
    else{
        alert("Please fill all details")
    }
})