 const countValue = document.querySelector('#counter');
 const increment = ()=>{
    //get the value from ui
    let value = parseInt(countValue.innerText);
    //update it
    value=value+1;
    //set the value
    countValue.innerText = value; 
 };
 const decrement = ()=>{
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText =value; 
 }