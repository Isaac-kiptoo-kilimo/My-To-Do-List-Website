
let myNodeList=document.querySelectorAll('li');
var i;
for(i=0;i<myNodeList.length;i++){
    let newSpan=document.createElement('span');
    let textnode=document.createTextNode('\u00D7');
    newSpan.className='close';
    newSpan.appendChild(textnode);
    myNodeList[i].appendChild(newSpan)
}
// add class close
let close=document.getElementsByClassName('close');
var i;
for(i=0; i<close.length; i++){
    close[i].onclick= function(){
        let div=this.parentElement;
        div.style.display="none"
    }
};

// add a checked symbol when clicked

let list=document.querySelector('ul');
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }
}, false)

let addBtn=document.getElementById('addBtn');

addBtn.addEventListener('click',()=>{
    // alert('enter new item')
    var nodeLi=document.createElement('li');
    let input=document.querySelector('input').value;
    let text=document.createTextNode(input);
    nodeLi.appendChild(text);
    if(input===''){
        alert('Enter atleast one item')
    }else{  
        document.getElementById('myUl').appendChild(nodeLi)
    }
    input="";
    let newSpan=document.createElement('span');
    let textnode=document.createTextNode('\u00D7');
    newSpan.className='close';
    newSpan.appendChild(textnode);
    nodeLi.appendChild(newSpan)

    for(i=0; i<close.length; i++){
        close[i].onclick= function(){
            let div=this.parentElement;
            div.style.display="none"
        }
    }
})
// function newElement() {
//     var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }