
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
let i;
for(i=0;i<close.length;i++){
    close[i].addEventListener('click',()=>{
        let div=this.parentElement;
        div.style.display='none'
    })
}

// 