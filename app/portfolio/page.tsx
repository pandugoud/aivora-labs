import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/animations/Reveal";


const projects=[

{
title:"AI Customer Support Platform",
tech:"LLM + AI Agents",
desc:"Automated customer conversations using intelligent AI assistants."
},


{
title:"Healthcare AI Assistant",
tech:"Machine Learning + NLP",
desc:"AI based healthcare support and information system."
},


{
title:"Smart Analytics Engine",
tech:"Predictive AI",
desc:"Business intelligence platform powered by machine learning."
},


{
title:"AI Automation Suite",
tech:"Workflow Automation",
desc:"Enterprise automation using intelligent AI workflows."
}

];


export default function Portfolio(){

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
 Case Studies
</span>

</h1>



<div className="
grid
md:grid-cols-2
gap-10
mt-16
">


{
projects.map(project=>(

<Reveal key={project.title}>


<div className="
glass
rounded-3xl
p-10
">


<div className="
text-cyan-400
font-semibold
">

{project.tech}

</div>


<h2 className="
text-3xl
font-bold
mt-4
">

{project.title}

</h2>


<p className="
mt-5
text-slate-400
">

{project.desc}

</p>


<button className="
mt-8
px-6
py-3
rounded-full
bg-indigo-600
">

View Project

</button>


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