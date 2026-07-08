import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const jobs=[

"AI Engineer",

"Machine Learning Engineer",

"Frontend Developer",

"Backend Developer",

"Data Scientist",

"UI/UX Designer"

];


export default function Careers(){

return(

<>

<Navbar/>


<main className="pt-32">


<section className="max-w-7xl mx-auto px-6 py-20">


<h1 className="
text-6xl
font-bold
">

Join

<span className="gradient">
 AIVORA LABS
</span>

</h1>


<p className="
mt-6
text-xl
text-slate-400
">

Build the future of Artificial Intelligence with our
global technology team.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
jobs.map(job=>(

<div
key={job}
className="
glass
rounded-3xl
p-8
"
>

<h2 className="
text-2xl
font-bold
">

{job}

</h2>


<button className="
mt-6
bg-indigo-600
px-5
py-2
rounded-full
">

Apply Now

</button>


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