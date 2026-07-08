"use client";

import Image from "next/image";
import {Menu} from "lucide-react";
import {useState} from "react";


export default function Navbar(){

const [open,setOpen]=useState(false);


return(

<nav className="
fixed
top-0
w-full
z-50
bg-black/30
backdrop-blur-xl
border-b
border-white/10
">


<div className="
max-w-7xl
mx-auto
h-20
px-6
flex
items-center
justify-between
">


<Image
src="/logo.svg"
width={180}
height={60}
alt="AIVORA"
/>


<div className="
hidden
md:flex
gap-8
">

<a href="/">Home</a>
<a href="/about">About</a>
<a href="/services">Services</a>
<a href="/portfolio">Portfolio</a>
<a href="/contact">Contact</a>

</div>



<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>

<Menu />

</button>


</div>



{
open &&

<div className="
md:hidden
p-6
space-y-5
bg-black/80
">

<a className="block">Home</a>
<a className="block">About</a>
<a className="block">Services</a>
<a className="block">Contact</a>

</div>

}


</nav>

)

}