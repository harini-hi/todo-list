function addtodo(){
    var inputTag = document.getElementById("todotext").value;
    var errorTag = document.getElementById("error");
    var listTag = document.getElementById("todo-list");
    if (inputTag === ''){
        errorTag.innerHTML ="Enter the List"
    }else{
        errorTag.innerHTML =""
        listTag.innerHTML +=`<li id="items"><span onclick="doneList(this)">${inputTag}</span><i></i><button id="remove-bts" onclick="removeitemes(this)">remove</button></li>`
    }
}

function removeitemes(button){
    button.parentElement.remove();
}

function doneList(span){
    debugger
    span.classList.toggle("done");
}