"use client";

import { motion } from "framer-motion";


const cards = [
  "Generative AI",
  "AI Agents",
  "Machine Learning",
  "Automation"
];


export default function FloatingCards(){

return (

<div className="absolute inset-0 pointer-events-none">


{
cards.map((card,index)=>(

<motion.div

key={card}

animate={{
y:[0,-25,0]
}}

transition={{
duration:4,
repeat:Infinity,
delay:index*0.5
}}

className={`
absolute
glass
px-5
py-3
rounded-xl
text-cyan-300
font-semibold

${
[
"top-10 left-0",
"top-20 right-0",
"bottom-24 left-5",
"bottom-10 right-10"
][index]
}

`}

>

{card}

</motion.div>

))
}


</div>

)

}