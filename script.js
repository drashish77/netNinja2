const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('my content is copy right');
    
})

const box =document.querySelector('.box');

box.addEventListener('mousemove', e =>{
// console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent =`x pos - ${e.offsetX} and y pos - ${e.offsetY}. `
});
document.addEventListener('wheel', e =>{
// console.log(e);
console.log(e.pageX, e.pageY);

})