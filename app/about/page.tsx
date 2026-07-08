import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/animations/Reveal";


export default function About(){

return(
<>
<Navbar/>

<main className="pt-32">


<section className="max-w-7xl mx-auto px-6 py-20">


<Reveal>

<h1 className="
text-5xl
md:text-7xl
font-bold
">

Building The Future With

<span className="gradient">
 Artificial Intelligence
</span>

</h1>

</Reveal>



<Reveal>

<p className="
mt-8
max-w-3xl
text-xl
text-slate-400
">

AIVORA LABS is an AI development company helping
businesses transform ideas into intelligent digital products.

We build Generative AI applications, AI Agents,
automation systems and scalable software platforms.

</p>

</Reveal>




<div className="
grid
md:grid-cols-3
gap-8
mt-20
">


<div className="glass rounded-3xl p-8">

<h2 className="text-3xl font-bold">
Mission
</h2>

<p className="mt-4 text-slate-400">

Deliver innovative AI solutions that solve real-world
business challenges.

</p>

</div>




<div className="glass rounded-3xl p-8">

<h2 className="text-3xl font-bold">
Vision
</h2>

<p className="mt-4 text-slate-400">

Become a global AI technology partner for enterprises.

</p>

</div>





<div className="glass rounded-3xl p-8">

<h2 className="text-3xl font-bold">
Values
</h2>

<p className="mt-4 text-slate-400">

Innovation, security, quality and customer success.

</p>

</div>



</div>



</section>


</main>


<Footer/>

</>
)

}