let input = document.querySelector("input")
var data = [
    {   name:"diksha", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {   name:"dikshant", src: "https://images.unsplash.com/photo-1535325019257-3f8a7994a3f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {   name:"harsh", src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {   name:"harshita", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

let pers = "";
data.forEach(function(e){
    pers += `<div class="person">
                     <div class="img">
                      <img src="${e.src}" alt="">
                 </div>
                <h4>${e.name}</h4>
            </div>`
})
document.querySelector(".peoples").innerHTML = pers;

input.addEventListener("input",function(){
    let matching = data.filter(function(ev){
        return ev.name.startsWith(input.value)
    })
    let newuser = "";
    matching.forEach(function(e){
        newuser += `<div class="person">
                         <div class="img">
                          <img src="${e.src}" alt="">
                     </div>
                    <h4>${e.name}</h4>
                </div>`
    })
    document.querySelector(".peoples").innerHTML = newuser;
})
