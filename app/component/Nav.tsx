import navStyle from "@/app/styles/Nav.module.css"
import Link from "next/link"

export default function Nav(){
 
    return(
        <nav className={navStyle.nav}>
           <ul>
             <li>
                <Link href="/">Home</Link>
             </li>
             <li>
                <Link href="/about">About us</Link>
             </li>
             <li>
                <Link href="/contact">Contact us</Link>
             </li>
           </ul>
        </nav>
    )
}