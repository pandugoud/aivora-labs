"use client";

import { motion } from "framer-motion";
import AIBrain from "./AIBrainWrapper";
import FloatingCards from "./FloatingCards";


export default function Hero(){

return (

<section className="
min-h-screen
flex
items-center
pt-24
">


<div className="
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-20
items-center
">


<div>


<motion.h1

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-6xl
lg:text-8xl
font-bold
leading-tight
"


>

Transform Your{" "}

<span className="gradient">
Business
</span>

{" "}With AI

</motion.h1>



<p className="
mt-8
text-xl
text-slate-400
max-w-xl
">

We build AI Agents, Generative AI platforms,
Machine Learning systems and automation solutions
for modern enterprises.

</p>



<div className="
mt-10
flex
gap-5
">


<button className="
bg-indigo-600
px-8
py-4
rounded-full
">

Start Project

</button>


<button className="
glass
px-8
py-4
rounded-full
">

Book Demo

</button>


</div>


</div>



<div className="
relative
flex
justify-center
">


<FloatingCards />

<AIBrain />


</div>



</div>


</section>

)

}