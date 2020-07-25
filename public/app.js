

function add(){
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    list.setAttribute("class","text-danger");
    var li = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    btn.setAttribute("class","btn btn-warning");
    var btn1 = document.createElement("BUTTON");
    btn.style.margin = "5px";
    var btnText = document.createTextNode("Delete");
    btn1.setAttribute("class","btn btn-success")
    var btnText1 = document.createTextNode("Edit");
    btn.appendChild(btnText);
    btn.onclick = function(){
        var li = this.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);
    }
    btn1.appendChild(btnText1);
    btn1.onclick = function(){
        var li = this.parentNode;
        var text = prompt("Enter update value");
        li.innerHTML=text;
        li.appendChild(btn);
        li.appendChild(btn1);
       
        
    }
var text = document.createTextNode(val.value);
li.appendChild(text)
li.appendChild(btn)
li.appendChild(btn1)
list.appendChild(li)
val.value = " ";


}
function deleteall(){
    alert("are you sure");
    document.getElementById("list").innerHTML = " ";

}
 


