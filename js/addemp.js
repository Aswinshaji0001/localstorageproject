function addemp(){
    a={};
    a.empid=document.getElementById("t1").value;
    a.name=document.getElementById("t2").value;
    a.designation=document.getElementById("t3").value;
    a.salary=document.getElementById("t4").value;
    a.experience=document.getElementById("t5").value;
    e=localStorage.getItem(a.empid);
        localStorage.setItem(a.empid,JSON.stringify(a));
        window.location.href="./index.html";
}