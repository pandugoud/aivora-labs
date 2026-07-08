import "./globals.css";
import Aurora from "@/components/animations/Aurora";
import { Inter } from "next/font/google";


const inter = Inter({
subsets:["latin"]
});


export const metadata = {

title:"AIVORA LABS",
description:"Building Intelligent AI Solutions for Tomorrow"

};


export default function RootLayout({
children
}:{
children:React.ReactNode
}){


return(

<html lang="en">

<body className={inter.className}>

<Aurora />

{children}

</body>

</html>

)

}