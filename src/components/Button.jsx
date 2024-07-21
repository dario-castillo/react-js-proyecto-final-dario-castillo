import { Link } from "react-router-dom"

function Button({ children, onClick , type = "primary" , href = "/"}) {
    
    const variantes = {
        "primary" : "inline-block px-4 py-2 font-semibold text-white bg-blue-500 rounded cursor-pointer text-center ",
        "link" : "inline-block px-4 py-2 font-semibold text-white bg-blue-500 rounded cursor-pointer text-center hover:bg-blue-800"
    }
    
    const className = variantes[type]

    if(type = "link") {
        return (
            <Link to={href} className={className}>
                {children}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}
export default Button