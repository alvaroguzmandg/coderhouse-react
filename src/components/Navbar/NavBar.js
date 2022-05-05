export default function Header(){
    const navStyles={
        maxWidth: 1200,
        display:"flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap:40,
        listStyle: "none",
        color: "white",
        margin: "0 auto"
    }
  return(
    <header className="header" >
        <div className="logo">
            <img src="https://alvaroguzmandg.github.io/coderhouse/images/logo-runclub.png" alt="Logo"></img>
        </div>
        <ul className="links" style={navStyles}>
            <li>INICIO</li>
            <li>PRODUCTOS</li>
            <li>NOSOTROS</li>
        </ul>
    </header>
    )
}