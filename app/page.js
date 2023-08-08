import "app/globals.css";

export default function Page() {
    return(
        <><head>
            <title>Dream Cloud Host</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
        </head>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="/">
                        <img src="https://media.discordapp.net/attachments/1130805472224616509/1133299257873551441/IMG_0129.png" alt="gfg_logo" />
                    </a> 
                </div>
                <div class="hamburger-menu">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span> 
                </div>
                <div class="nav-menu hide">
                    <a href="#">Home</a>
                    <a href="#">Career</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </header>
        <body>
            <div class="Test">
                <h1>This is test</h1>
            </div>
            <div class="card">
                <h3 class="card-title">Minecraft Server Hosting</h3>
                <p>A reliable self-hosting server is used to provide the best service for you to play with your friends.</p>
                <a href="#">Read more</a>
            </div>
        </body>
        <script src="./script.js" async></script>
        </>
    );
}