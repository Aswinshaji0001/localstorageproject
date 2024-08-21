let value;
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    console.log(urlParams);
    id=urlParams.get("id");
    console.log(id);
    value=JSON.parse(localStorage.getItem(id));
    console.log(value);
    document.getElementById("tbody").innerHTML=`<table>
                <h1 align="center">EDIT EMPLOYEES</h1>
                <tr>
                    <td><label for="t1">NAME</label></td>
                   <td><input type="text" name="" id="t2" value="${value.name}"required></td>
                </tr>
                <tr>
                    <td><label for="t1">DESIGNATION</label></td>
                   <td><input type="text" name="" id="t3" value="${value.designation}"required></td>
                </tr>
                <tr>
                    <td><label for="t1">SALARY</label></td>
                   <td><input type="text" name="" id="t4" value="${value.salary}"></td>
                </tr>
                <tr>
                    <td><label for="t1">EXPERIENCE</label></td>
                   <td><input type="text" name="" id="t5" value="${value.experience}"></td>
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
    var x1 = document.getElementById("t2").value;
    a.name=x1;
    var x2 = document.getElementById("t3").value;
    a.designation=x2;
    var x3 = document.getElementById("t4").value;
    a.salary=x3;    
    var x4 = document.getElementById("t5").value;  
    a.experience=x4;  
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="./index.html";
}