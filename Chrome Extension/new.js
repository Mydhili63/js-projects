

let myLeads =[] 
let oldLeads=[]
const inputEl = document.getElementById("input-el")
const inputBTN = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
const saveBtn=document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStoarage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStoarage){
    myLeads=leadsFromLocalStoarage
    render(myLeads)
}

saveBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        
    })
    
})

function render(leads){    //no matter which variable which can use(but it must be truthy)
    let listItems=" "
    for (let i=0; i < leads.length;i++){
        //listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + "</a></li>" 
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${leads[i]}
            </a>
        </li> 
    `

    }
    ulEl.innerHTML= listItems 
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBTN.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" " //makes tab empty after clicking on save input
    localStorage.setItem("myLeads",JSON.stringify(myLeads))    //saves in local stoarge
    render(myLeads)
})
