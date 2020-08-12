document.getElementById('input1').addEventListener('keyup',(e)=>{

let inputValue=document.getElementById('input1').value.toUpperCase();

let ul=document.querySelector('#ul');

let li=ul.querySelectorAll('li.list');


for(let i=0; i< li.length; i++){
    
    let a=li[i].getElementsByTagName('a')[0];
    
    if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1){
        li[i].style.display='';
    }
    else {
        li[i].style.display='none';
    }
}

}
);