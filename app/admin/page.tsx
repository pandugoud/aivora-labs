import Link from "next/link";


export default function Admin(){


return(

<div className="
min-h-screen
p-10
">


<h1 className="
text-5xl
font-bold
gradient
">

AIVORA ADMIN

</h1>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


<Link href="/admin/blogs"
className="glass p-10 rounded-3xl">

Blogs

</Link>


<Link href="/admin/projects"
className="glass p-10 rounded-3xl">

Projects

</Link>


<div className="glass p-10 rounded-3xl">

Messages

</div>


</div>


</div>

)

}