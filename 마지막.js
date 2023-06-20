// document.getElementById('button').addEventListener('click', function() {
//     var button = document.getElementById('button');
//     var box = document.getElementById('box');
  
//     button.style.display = 'none';
//     box.style.display = 'block';
//   });

function add_div(){

    var div = document.createElement('div');



    div.innerHTML = document.getElementById('room_type').innerHTML;

    document.getElementById('field').appendChild(div);

}



function remove_div(obj){

document.getElementById('field').removeChild(obj.parentNode);

}