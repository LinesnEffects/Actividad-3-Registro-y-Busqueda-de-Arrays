var data = []
var idSelected = ""

// Create
var add = function(){
    var idNumber = document.getElementById("idNumber").value
    var name = document.getElementById("name").value    
    var lastName = document.getElementById("lastName").value
    var address = document.getElementById("address").value
    data.push({idNumber: idNumber, name: name, lastName: lastName, address: address,})
    console.log(data)
    localStorage.setItem("myData", JSON.stringify(data))
    toListInfo()
    newf()
}

// Update
var modify = function(){
    var idNumber = document.getElementById("idNumber").value
    var name = document.getElementById("name").value
    var lastName = document.getElementById("lastName").value
    var address = document.getElementById("address").value
    data[idSelected].idNumber = idNumber
    data[idSelected].name = name
    data[idSelected].lastName = lastName
    data[idSelected].address = address
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
                                    <td onclick = "selectedData(${a})">${data[a].idNumber}</td>
                                    <td onclick = "selectedData(${a})">${data[a].name}</td>
                                    <td onclick = "selectedData(${a})">${data[a].lastName}</td>
                                    <td onclick = "selectedData(${a})">${data[a].address}</td>                                    
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

// Search
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("idNumber");
    filter = input.value;
    table = document.getElementById("myData");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


var selectedData = function(position){
    idSelected = position
    document.getElementById("idNumber").value = data[idSelected].idNumber 
    document.getElementById("name").value = data[idSelected].name
    document.getElementById("lastName").value = data[idSelected].lastName 
    document.getElementById("address").value = data[idSelected].address 
    document.getElementById("btnAdd").style.display = "none" 
    document.getElementById("btnModify").style.display = "initial" 
}

var newf = function(){
    document.getElementById("idNumber").value = ""
    document.getElementById("name").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("address").value = ""
    idSelected = ""
    document.getElementById("btnAdd").style.display = "initial" 
    document.getElementById("btnModify").style.display = "none" 
}

toListInfo()

console.log(data)


