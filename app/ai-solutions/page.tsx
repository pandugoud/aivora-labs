import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const solutions=[

{
title:"AI Agents",
text:"Autonomous AI assistants that automate workflows."
},

{
title:"Generative AI",
text:"Custom LLM applications for business intelligence."
},

{
title:"AI Automation",
text:"Reduce manual work using intelligent systems."
},

{
title:"Predictive AI",
text:"Data driven predictions and analytics."
}

];


export default function AISolutions(){

return(

<>
<Navbar/>

<main className="pt-32">

<section className="max-w-7xl mx-auto px-6 py-20">


<h1 className="
text-6xl
font-bold
">

Next Generation

<span className="gradient">
 AI Solutions
</span>

</h1>



<div className="
grid
md:grid-cols-2
gap-10
mt-16
">


{
solutions.map(item=>(

<div
key={item.title}
className="
glass
rounded-3xl
p-10
"
>

<h2 className="text-3xl font-bold">

{item.title}

</h2>


<p className="mt-5 text-slate-400">

{item.text}

</p>


</div>

))
}


</div>


</section>


</main>


<Footer/>

</>

)

}