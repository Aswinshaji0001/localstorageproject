function fetchData(){
    if(localStorage.length==0){
        document.getElementById("table").innerHTML="<h2> NO EMPLOYEES ADDED </h2><a href='./add.html'>Add Employees</a>"
    }
}
fetchData();