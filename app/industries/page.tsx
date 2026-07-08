import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/animations/Reveal";


const industries = [

{
title:"Healthcare",
desc:"AI solutions for medical analytics, patient support and intelligent healthcare systems."
},

{
title:"Finance",
desc:"Secure AI systems for fraud detection, automation and financial intelligence."
},

{
title:"E-Commerce",
desc:"Personalization engines, recommendation systems and AI shopping assistants."
},

{
title:"Education",
desc:"AI powered learning platforms and intelligent tutoring systems."
},

{
title:"Manufacturing",
desc:"Computer vision and predictive maintenance solutions."
},

{
title:"Real Estate",
desc:"Smart analytics and AI powered property solutions."
}

];


export default function Industries(){

return(

<>

<Navbar/>


<main className="pt-32">


<section className="max-w-7xl mx-auto px-6 py-20">


<h1 className="
text-6xl
font-bold
">

AI For Every

<span className="gradient">
 Industry
</span>

</h1>


<p className="
mt-6
text-xl
text-slate-400
max-w-3xl
">

We create industry-specific Artificial Intelligence
solutions that improve efficiency and accelerate growth.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
industries.map((item)=>(

<Reveal key={item.title}>


<div className="
glass
rounded-3xl
p-8
hover:-translate-y-2
transition
">


<h2 className="
text-3xl
font-bold
">

{item.title}

</h2>


<p className="
mt-5
text-slate-400
">

{item.desc}

</p>


</div>


</Reveal>

))
}


</div>


</section>


</main>


<Footer/>


</>

)

}