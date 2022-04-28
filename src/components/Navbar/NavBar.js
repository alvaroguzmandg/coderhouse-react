export default function Navbar(){
  return(
    <header className="header">
        <nav class="navbar navbar-expand-lg navbar-dark bloqueContenido--lg">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-run" aria-current="page" href="./index.html">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-run" href="./nosotros.html">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-run" href="./runclub.html"> RUNCLUB
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-run" href="./eventos.html">EVENTOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-run" href="./contacto.html">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}