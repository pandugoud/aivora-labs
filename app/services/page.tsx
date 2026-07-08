import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/animations/Reveal";


const services=[

"Generative AI Development",

"AI Agent Development",

"Machine Learning Solutions",

"Natural Language Processing",

"Computer Vision",

"Chatbot Development",

"AI Automation",

"SaaS Development",

"Cloud & DevOps"

];


export default function Services(){

return(

<>
<Navbar/>


<main className="pt-32">

<section className="max-w-7xl mx-auto px-6 py-20">


<h1 className="
text-6xl
font-bold
">

Our

<span className="gradient">
 AI Services
</span>

</h1>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
services.map((service)=>(

<Reveal key={service}>


<div className="
glass
rounded-3xl
p-8
hover:scale-105
transition
">


<h2 className="
text-2xl
font-bold
">

{service}

</h2>


<p className="
mt-4
text-slate-400
">

Advanced AI solutions designed
for modern businesses.

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