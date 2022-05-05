export default function Navbar(){
    const headerStyles={
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        listStyle: "none",
        color: "white",
        backgroundColor: "#232323"
    }
  return(
    <header className="header" >
        <div className="logo">
            <img src="https://alvaroguzmandg.github.io/coderhouse/images/logo-runclub.png" alt="Logo"></img>
        </div>
        <ul className="links" style={headerStyles}>
            <li>INICIO</li>
            <li>PRODUCTOS</li>
            <li>NOSOTROS</li>
        </ul>

    </header>
    )
}