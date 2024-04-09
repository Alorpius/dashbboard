import headStyles from "@/app/styles/header.module.css"


export default function Header(){
    
    return(
        <div>
            <h1 className={headStyles.title}>
                <span>header</span> tag
            </h1>
            <p className={headStyles.description}>keep updated with the latest </p>
        </div>
    )
}