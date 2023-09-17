'use strict';{
  const countnum= document.getElementById('countnum');
  const up= document.getElementById('up');
  const down= document.getElementById('down');
  const resets= document.querySelectorAll('#reset');

  let num= 0;
  countnum.textContent= num;
  up.addEventListener('click',()=>{
    num ++ ;
    countnum.textContent= num;
  })
  down.addEventListener('click',()=>{
    if(num >0){
    num -- ;
    countnum.textContent= num;
  }})
  resets[0].addEventListener('click',()=>{
    if(num >0){
    num= 0;
    countnum.textContent= num;
  }})
 
  const b= document.querySelectorAll('#b');
  const s= document.querySelectorAll('#s');
  const o=document.querySelectorAll('#o');
  
  // o1.addEventListener('click',()=>{
  //   o1.classList.toggle('inactive');
  // })
  // o2.addEventListener('click',()=>{
  //   o2.classList.toggle('inactive');
  // })
  // for(let i=0; i<o.length; i++){
  //   o[i].addEventListener('click',()=>{
  //     o[i].classList.toggle('inactive');
  //   })}
  b.forEach((item)=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('inactive');
    })})
  s.forEach((item)=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('inactive');
    })})
  o.forEach((item)=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('inactive');
    })})

  resets[1].addEventListener('click',()=>{
    b.forEach((item)=>{
     item.classList.add('inactive');
    })
  })
  resets[2].addEventListener('click',()=>{
    s.forEach((item)=>{
     item.classList.add('inactive');
    })
  })
  resets[3].addEventListener('click',()=>{
    o.forEach((item)=>{
     item.classList.add('inactive');
    })
  })  
}