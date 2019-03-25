const contact = () =>{
    const content = `   <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-color1" >
        <div class="container">
            <a class="navbar-brand" href="index.html"><img class="logo" id="logo" src="../src/img/logo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-toggleable-sm  justify-content-around " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" id="homeLink" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="menuLink" href="#">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="aboutLink">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="contactLink">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</header>`
    return content;
}

export  default contact;