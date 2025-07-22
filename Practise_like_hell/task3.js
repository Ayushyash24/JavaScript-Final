//  create a form with input fiels and a submit button .use javascript to validate the form and display an error message if the input is invalid

// jab bhi forms ke saath deal karo to ye yaad rakho ki submit hone par forms page ko reload kar deta hai , aur tum
// /kahyal rakhna hai ki pages relaod naa ho , nahi to agr page relaod hua to js  nahi chalegi , kuki js chal paye se paehle
//  hi page reload ho jaega 

// from ko submit hone par relaod se rokne ke liye


var form = document.querySelector("form");
// var input1 = document.querySelector("#input1");
// var  input2 = document.querySelector("#input2")
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // this prevents the event from happening ;
    // console.log(input1.value,input2.value);

   for(var i=0;i<inps.length; i++){
    if(inps[i].value.trim()===''){
        h4.textContent= "error, some fields are missing";
        h4.style.color= "red";
        break;
    }
   }

    
})