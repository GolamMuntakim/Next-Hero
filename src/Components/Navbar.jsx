"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



export default function Navbar() {
    const pathName = usePathname()
    const router = useRouter()
    const session = useSession()
    console.log(session)
    const links=[
        {
            title: "About",
            path:'/about'
        },
        {
            title:"Service",
            path: '/service'
        },
        {
            title: "Contact",
            path:'/contact'
        },
        {
            title: "Categories",
            path:'/categories'
        },
        {
            title: "Dashboard",
            path:'/dashboard'
        },
        {
            title: "post",
            path:'/posts'
        },
        {
            title: "Meal",
            path:'/meals'
        },
        {
            title: "Gallary",
            path:'/gallary'
        },
        // {
        //     title: "signup",
        //     path:'/api/auth/signup'
        // },
        
    ]
    const  handler=()=>{
        router.push('/api/auth/signin')
    }
  return (
    <div>
        <nav className="flex justify-between  p-2 bg-cyan-900 ">
          <h6><Link href={'/'}><span className="text-2xl">p</span>rotfolio</Link></h6>
          <ul className="flex items-center gap-4">
           {
            links?.map(link=> <Link className={`${pathName === link.path && " border-b-2 border-white"}`} key={link.path} href={link.path}>{link.title}</Link>)
           }
             
          </ul>
      
          <div>
            <h6 >
                {
                session?.status === "authenticated" ? 
                <div className="flex gap-2 items-center">
                <Image className="rounded-full h-10" height={5} width={40} alt={session?.data?.user?.name} 
                src={session?.data?.user?.image}></Image><br />
                {session?.data?.user?.name}
                <br />
                {session?.data?.user?.type}
                <button onClick={()=>signOut()} className="text-black">Logout</button>
                </div>:
                 <div className="flex gap-2"><Link href={'/api/auth/signup'}>  <button  className="text-black">signup</button></Link>
                 <button onClick={handler} className="text-black ">Login</button> 
                 </div>
                }
            </h6>
          </div>
        </nav>
    </div>
  )
}
