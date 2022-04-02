

// items.style.backgroundColor='grey'
// addBtn=document.getElementById('addBtn');


// addBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // input.style.backgroundColor="blue"
//     let input=document.getElementById('input');
//     console.log(addBtn)
//  if(input.value==""){
//      alert('Add atleast one item')
//  }
// //  input=document.getElementById('input')

//  let item=document.getElementById('item');
//  item.innerHTML=input.value


// })


// let myNode=document.createElement('li');
// let i;
// for(let i=0;i<myNode.clientHeight;i++)

// create a node list and append it to each item list

let myNodeList=document.querySelectorAll('li');
let i;
for(i=0;i<myNodeList.length;i++){
    let newSpan=document.createElement('span');
    let textnode=document.createTextNode('\u00D7');
    newSpan.className='close';
    newSpan.appendChild(textnode);
    myNodeList[i].appendChild(newSpan)
}

// click on the current close button to hide/delete the item

let close=document.querySelector('.close');