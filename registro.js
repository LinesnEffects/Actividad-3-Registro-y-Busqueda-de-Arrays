var data = []
var idSelected = ""

// Create
var add = function(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    data.push({name: name, age: age})
    console.log(data)
    localStorage.setItem("myData", JSON.stringify(data))
    toListInfo()
    newf()
}

// Update
var modify = function(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    data[idSelected].name = name
    data[idSelected].age = age
    localStorage.setItem("myData", JSON.stringify(data))
    console.log(data)
    toListInfo()
    newf()
}

// Read
var toListInfo = function(){

    var x = localStorage.getItem("myData")

    if(x == null){
        data = []
    } else{
        data = JSON.parse(x)
    }
        
        var myData = document.getElementById("myData")
        myData.innerHTML = ""
        console.log(data)
        for (let a = 0; a < data.length; a++) {
            myData.innerHTML += `<tr>
                                    <td onclick = "selectedData(${a})">${data[a].age}</td>
                                    <td onclick = "selectedData(${a})">${data[a].name}</td>                                    
                                    <td><div class = "btn btn-danger" onclick="deleteField(${a})">Eliminar</div></td>
                                </tr>`        
        }
    }

// Delete
var deleteField = function(position){
    console.log(position)
    data.splice(position,1)
    localStorage.setItem("myData", JSON.stringify(data))
    toListInfo()
}
var selectedData = function(position){
    idSelected = position
    document.getElementById("name").value = data[idSelected].name
    document.getElementById("age").value = data[idSelected].age 
    document.getElementById("btnAdd").style.display = "none" 
    document.getElementById("btnModify").style.display = "initial" 
}
var newf = function(){
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    idSelected = ""
    document.getElementById("btnAdd").style.display = "initial" 
    document.getElementById("btnModify").style.display = "none" 
}

toListInfo()

console.log(data)


