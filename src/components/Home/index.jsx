export default function Home () {
    return (
        <>
        <div className="p-2">
       <h1 className=" text-2xl text-gray-400">Welcome, Parsi </h1>
<p className="font-bold ">Lorem, ipsum dolor sit amet</p>
<div className="mt-4 flex justify-center items-center gap-2">
<input className="border p-1 rounded" type="search" />
<div className="bg-[#400d54] p-1 rounded">

<svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>

</div>
</div>

<div className="flex gap-5 justify-center pt-5">
    <div className="text-gray-300 border pl-5 pr-5 p-1 rounded bg-fuchsia-700"><p>home</p></div>
    <div className="text-gray-300 border pl-5 pr-5 p-1  rounded bg-fuchsia-700"><p>cart</p></div>
    <div className="text-gray-300 border pl-5 pr-5 p-1 rounded bg-fuchsia-700"><p>about</p></div>
</div>




        </div>


        </>
    )
}