"use client";

import {motion} from "framer-motion";


export default function Loader(){

return(

<div className="
fixed
inset-0
bg-[#020617]
z-[999]
flex
items-center
justify-center
">


<motion.h1

animate={{
scale:[1,1.2,1]
}}

transition={{
duration:1.5,
repeat:Infinity
}}

className="
text-6xl
font-bold
gradient
"

>

AIVORA

</motion.h1>


</div>

)

}