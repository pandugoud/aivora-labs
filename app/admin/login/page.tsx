"use client";


import {useState} from "react";


export default function Login(){


const[email,setEmail]=useState("");

const[password,setPassword]=useState("");



async function login(){


const res = await fetch("/api/auth",{

method:"POST",

body:JSON.stringify({

email,

password

})

});


const data=await res.json();


if(data.success){

location.href="/admin";

}


}



return(

<div className="
min-h-screen
flex
items-center
justify-center
">


<div className="
glass
p-10
rounded-3xl
space-y-5
">


<h1 className="
text-3xl
font-bold
">

Admin Login

</h1>


<input

className="p-3 bg-black/30"

placeholder="Email"

onChange={
e=>setEmail(e.target.value)
}

/>


<input

className="p-3 bg-black/30"

placeholder="Password"

type="password"

onChange={
e=>setPassword(e.target.value)
}

/>


<button
onClick={login}
className="
bg-indigo-600
px-6
py-3
rounded-full
">

Login

</button>


</div>


</div>

)

}