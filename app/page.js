import  Styles  from "@/app/styles/Home.module.css";
import { GetStaticPaths } from "next";




export default function Home() {

    return (
      <div className={Styles.container}>
         <h1>welcome</h1>
      </div>
    ); 
  }
  
 