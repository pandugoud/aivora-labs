"use client";

import dynamic from "next/dynamic";


const AIBrain = dynamic(
()=>import("./AIBrain"),
{
ssr:false
}
);


export default function AIBrainWrapper(){

return <AIBrain/>

}