let b='';

const display = document.querySelector('.show');
function takingInput() {
    

const input2=document.querySelectorAll('.btn');

input2.forEach((button)=>{
button.addEventListener('click',()=>{
  const value= button.textContent;
  b += value;
    display.value = b;
});
});
}
takingInput();


document.querySelector('.ac2').addEventListener('click',()=>{
  const display = document.querySelector('.show');
  b = '';
  display.value = '0';
});



const equal3 = document.querySelector('.equal');
equal3.addEventListener('click',()=>{
  try{
let result = eval(b);
display.value = result;
b=result.toString();
  } catch (error) {
    display.value = 'Error';
    b = '';
  }
});

 const del3=document.querySelector('.del2');
 del3.addEventListener('click',()=>{
  b=b.slice(0, -1);
  display.value = b;
 })