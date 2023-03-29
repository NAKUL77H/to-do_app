let addtodobtn = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addtodobtn.addEventListener('click',function(){
    var paragraph = document.createElement('p')   
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph)
    todocontainer.appendChild(paragraph)

})

// input.on('keypress', function(event) {
//     if ( event.which === 13 ) {
//         var paragraph = document.createElement('p')
//         paragraph.innerText = inputField.value;
//         todocontainer.appendChild(paragraph)
//         // form.submit();
//         return false;
//     }
// });


// no var 
// todocontainer.appendChild(paragraph)
