import HomeIcon from "./Icons/HomeIcon.jsx";

export default function Navigation () {
    return (
        <nav>
            <div className="logo">
                <h2>devsocial</h2>
            </div>
            <div className="links">
                <a href="/">
                    <HomeIcon /> Inicio
                </a>
            </div>
        </nav>
    )
}