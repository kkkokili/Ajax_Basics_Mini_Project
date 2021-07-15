// jshint esversion:6
// Step 1: create an XMLHttpRequest
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data/employees.json');
xhr.send();
xhr.onload = function() {
  if (xhr.status == 200) {
    let html='<ul class="bulleted">';
    var employees=JSON.parse(xhr.responseText);
    for (i=0; i<employees.length; i++) {
      if (employees[i].inoffice == true) {
        html+= '<li class="in">';
      }else {
        html+= '<li class="out">';
      }
      html+= employees[i].name;
      html+= '</li>';
    }
    html+='</ul>';
    document.getElementById('employeeList').innerHTML=html;

  }else if (xhr.status == 404) {
    document.getElementById('employeeList').innerHTML='<h1>Not Found </h1>';
  } else if (xhr.status == 403) {
    document.getElementById('employeeList').innerHTML='<h1>Forbidden </h1>';
  }
};

xhr.onerror = function() {
  document.getElementById('employeeList').innerHTML='<h1>Request Error </h1>';
};
