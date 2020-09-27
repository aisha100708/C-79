var students_list=[];
function submitting(){
    var name_1=document.getElementById("1st_name").value;
    var name_2=document.getElementById("2nd_name").value;
    var name_3=document.getElementById("3rd_name").value;
    var name_4=document.getElementById("4th_name").value;
    students_list.push(name_1);
    students_list.push(name_2);
    students_list.push(name_3);
    students_list.push(name_4);
    console.log(students_list);
    document.getElementById("names_display").innerHTML=students_list;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students_list.sort();
    console.log(students_list);
    document.getElementById("names_display").innerHTML=students_list;
}