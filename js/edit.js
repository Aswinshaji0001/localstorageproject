let value;
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    value=JSON.parse(localStorage.getItem(id));
    document.getElementById("tbody").innerHTML=`<table>
                <h1 align="center">EDIT EMPLOYEES</h1>
                <tr>
                    <td><label for="t1">ID</label></td>
                    <td><input type="text" name="" id="t1" ></td>
                </tr>
                <tr>
                    <td><label for="t1">NAME</label></td>
                   <td><input type="text" name="" id="t2" required></td>
                </tr>
                <tr>
                    <td><label for="t1">DESIGNATION</label></td>
                   <td><input type="text" name="" id="t3" required></td>
                </tr>
                <tr>
                    <td><label for="t1">SALARY</label></td>
                   <td><input type="text" name="" id="t4"></td>
                </tr>
                <tr>
                    <td><label for="t1">EXPERIENCE</label></td>
                   <td><input type="text" name="" id="t5"></td>
                </tr>
                <tr>
                    <td></td>
                   <td><button class="btn" onclick="editData()">SUBMIT</button></td>
                </tr>
            </table>`;  
}
edit();
function editData(){
    a={};
    a.empid=value.empid;
    console.log(a.empid);
    var x1 = document.getElementById("t1").value;
    a.name=x1;
    var x2 = document.getElementById("t2").value;
    a.designation=x2;
    var x3 = document.getElementById("t3").value;
    a.salary=x3;    
    var x4 = document.getElementById("t4").value;  
    a.experience=x4;  
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="./index.html";
}