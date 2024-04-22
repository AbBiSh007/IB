let i;
let data=JSON.parse(localStorage.getItem("Information"));
function showData(data){
    data.forEach((el,index)=>{
        let tbody=document.querySelector("tbody");
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=el.name;
        let td2=document.createElement("td");
        td2.innerText=el.field;
        let td3=document.createElement("td");
        td3.innerText=el.date;
        let td4=document.createElement("td");
        td4.innerText=el.duration;
        let deleteButton=document.createElement("button");
        deleteButton.addEventListener("click",()=>{
            localStorage.removeItem("Information")
            data=JSON.parse(localStorage.getItem("Information"));
            showData(data)
        })
        deleteButton.innerText="Delete";
        tr.append(td1,td2,td3,td4,deleteButton);
        tbody.append(tr);
    })
}
showData(data)