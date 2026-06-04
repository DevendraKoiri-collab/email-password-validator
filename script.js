// let heading1=document.querySelector("h1");
// console.dir(heading1);
// heading1.textContent="hello,my dear";
// heading1.innerHTML="<i>hello how are you";
// heading1.hidden=true;
// heading1.id="hiddenfile";
// let a=document.querySelector("a");
// a.href="https://www.google.com";

// let img=document.querySelector("img");
// img.setAttribute("src","https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?cs=srgb&dl=pexels-katie-burandt-1212693.jpg&fm=jpg")
// console.dir(img);

// img.setAttribute("naturalHeight","200");
// img.setAttribute("naturalWidth","200");


// //DOM Manipulation
//  let h1=document.createElement("h1");
//  h1.textContent="Hello,My Dear students";
//  console.log(h1);
//  document.querySelector("body").prepend(h1);

//  let meta=document.createElement("meta");
// document.querySelector("head").prepend(meta);
// console.log(meta);
// meta.setAttribute("chatset","UTF-8");

// document.querySelector("body").style.backgroundColor="red";

// let a=document.querySelector("a");
// a.style.color="green";
// let div=document.createElement("div");
// document.querySelector("body").prepend(div);
// document.querySelector("div").appendChild(a);
// console.dir(div.childNodes);
// a.style.color="white";
// a.style.border=" 0.5rem outset pink";

// let h2=document.querySelector("h2");
// h2.textContent="Welcome to shreyians!!"
// console.log(h2);

// let lis=document.querySelectorAll("li");
// lis.forEach(function(val)
// {
//     console.log(val.textContent);
    
// })

// for(let i=0;i<lis.length;i++)
// {
//     console.log(lis[i].textContent);
// }

// let p=document.querySelector("p");
// p.innerHTML="<b>updated</b> by JavaScrpit";
//  let img=document.querySelector("img");
//  console.log(img.getAttribute("src"));
//  img.setAttribute("src","https://images.unsplash.com/photo-1779571331215-0a26a39caa35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D");

//  let ul = document.querySelector("#list");

// let li = document.createElement("li");
// li.textContent = "Apple";

// ul.appendChild(li);

// let img=document.createElement("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1779571331215-0a26a39caa35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D");
// document.querySelector("div").prepend(img);
// console.log(img.style);
// img.style.width="200px";
// img.style.height="200px";

// let li=document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function(elem)
// {
//     elem.classList.add("highlight");
    
// });

// let p=document.querySelector("p");
// p.addEventListener("click",function()
// {
//     p.style.fontSize="10px";
//     p.style.color="Green";
    

// })
// let list=document.querySelectorAll("li");
// list.forEach(function(item)
// {
//     item.addEventListener("dblclick",function()
// {
//     item.style.color="Purple";
// })
// })

// let input=document.querySelector("input");
// input.addEventListener("input",function(event)
// {
//     console.log("Typed");
//     console.log(event.data);

// })

// let btn=document.querySelector("button");
// btn.addEventListener("submit",function(event)
// {
//     event.preventDefault();
//     console.log("submitted"+input.data);
//     alert("submitted");
// })

// let sel=document.querySelector("select");
// let device=document.querySelector("#device");
// sel.addEventListener("change",function(dets)
// {
//     device.textContent=`${dets.target.value} Device selected`;
    
// });
//  let h1=document.querySelector("#main");
//  window.addEventListener("keydown",function(dets)
// {
//     console.log(dets.key);
//     if(dets.key!==" ")
//     {
//         h1.textContent=dets.key;
//     }
//     else{
//         h1.textContent="it is space";
//     }
    

// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     // Create card
//     let card = document.createElement("div");
//     card.classList.add("card");

//     // Create profile section
//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.src = inputs[3].value;

//     // Create name
//     let h3 = document.createElement("h3");
//     h3.classList.add("name");
//     h3.textContent = inputs[0].value;

//     // Create age
//     let h5 = document.createElement("h5");
//     h5.classList.add("bio");
//     h5.textContent = inputs[1].value + " Years";

//     // Create email
//     let p = document.createElement("p");
//     p.id = "para";
//     p.textContent = inputs[2].value;

//     // Assemble card
//     profile.appendChild(img);

//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     // Add card to page
//     main.appendChild(card);

//     // Clear form
//     form.reset();
// });

// let form = document.querySelector("form");
// form.addEventListener("submit",function(dets)
// {
//     dets.preventDefault();
    
//      let main= document.querySelector("#main");
//     let input=document.querySelectorAll("input");
    
//   let card=document.createElement("div");
//     card.classList.add("card");

//      let profile=document.createElement("div");
//      profile.classList.add("profile");
    
//      let img=document.createElement("img");
//      img.setAttribute("src",input[3].value);

//      profile.appendChild(img);
//      card.appendChild(profile);

//      let h3=document.createElement("h3");
//      h3.classList.add("name");
//      h3.textContent=input[0].value;

//      let h5=document.createElement("h5");
//      h5.classList.add("occu");
//      h5.textContent=input[1].value;

//      let p=document.createElement("p");
//      p.classList.add("para");
//      p.textContent=input[2].value;

//      card.appendChild(h3);
//      card.appendChild(h5);
//      card.appendChild(p);
    
//      main.appendChild(card);
//      form.reset();
// })

// let mouse = document.querySelector("#mouse");

// mouse.addEventListener("mouseover", function () {
//     mouse.style.backgroundColor = "yellow";
// });

// mouse.addEventListener("mouseout", function (){
//     mouse.style.backgroundColor = "red";
// });

// mouse.addEventListener("mousemove",function(dets)
// {
//     console.log(dets);
// })

// let mouse=document.querySelector("#mouse");
// window.addEventListener("mousemove",function(dets)
// {
//     console.log(dets.clientX,dets.clientY);
//     mouse.style.top=dets.clientY+"px";
//     mouse.style.left=dets.clientX+"px";

// })

// let input = document.querySelector("input");
// let span=document.querySelector("span");
// input.addEventListener("input", function () {
//    let left = 20 -input.value.length;
//    span.textContent=left;
//    if(left<0)
//    {
//     span.style.color="red";
//    }
//    else{
//         span.style.color="white";
//    }
// });
// let form=document.querySelector("form");
// let nam=document.querySelector("#nam");
// let maxlen=document.querySelector("#small");

// form.addEventListener("submit",function(dets)
// {
//     dets.preventDefault();
//     console.log(nam.value.length);
//     if(nam.value.length<=2)
//     {
    
//        maxlen.classList.add("active");
//     }

   

// })










////////EMAIL PASSWORD VALIDATOR ////////////////////////
let email=document.querySelector("#email");
let password=document.querySelector("#pass");
let form=document.querySelector("form");
form.addEventListener("submit",function(dets)
{
    dets.preventDefault();
    document.querySelector(".error-email").textContent=" ";
     document.querySelector(".error-pass").textContent=" ";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);

    let isvalid=true;

    if(!emailans)
    {
        document.querySelector(".error-email").style.display="initial";
        document.querySelector(".error-email").textContent="Email is incorrect";
        isvalid=false;
    
    }
     if(!passwordans)
    {
          document.querySelector(".error-pass").style.display="initial";
        document.querySelector(".error-pass").textContent="Password is incorrect";
        isvalid=false;
    }
     if(isvalid)
     {
        document.querySelector(".resultmsg").textContent="Everything is correct."
     }
     else{
         document.querySelector(".resultmsg").textContent="there are errors!!"

     }
    
})







