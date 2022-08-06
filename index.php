<!DOCTYPE html>
<html lang="en">
<!-- REcordatrio a mi persona pasar a react para que sea mas escalable! o es su defect jquery or php -->
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" media="screen and (max-width:768px)" href="/css/mobile.css" />
    <title>My Portfolio | Welcome</title>
</head>

<body>
    <header id="mainheader">
        <nav id="navbar">
            <div class="container">
                <h1 class="logo"><a href="#mainheader">My Portfolio</a></h1>
                <ul class="navigation">
                    <li><a href="#mainheader">Home</a></li>
                    <li><a href="#portfolio">My Portfolio</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#ability">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div id="showcase">
            <div class="container">
                <div class="showcase-row">
                    <div class="showcase-row-title">
                        <p>Designer, Developer, Creative</p>
                        <h1 class="display-1">
                            Full Stack<br /><span class="txt-orange">Web Developer</span>
                        </h1>
                        <p class="large">
                            <!-- Lorem ipsum,
                             dolor sit amet consectetur adipisicing elit.
								Repellendus eum nam quasi tempora. Laboriosam, dolores. -->
                        </p>
                        <a href="#portfolio" class="btn btn-round btn-dark">My Portfolio</a>
                    </div>
                    <div class="showcase-row-img">
                        <img src="/img/YoArgCir.png" alt="Imagen de hans-rafael" />
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="portfolio">
        <div class="container">
            <h2>My Portfolio</h2>
            <p>
                aqui les presento algunos de mis proyectos
            </p>
            <div >
                <?php include ('php/pf.php'); ?>
            </div> 
            <div class="portfolio-row">
                <a href="#"><img src="/img/pf.png" alt="" /></a>
                <a href="#"><img src="/img/PDogs.png" alt="" /></a>
                <a href="#"><img src="/img/PClima.png" alt="" /></a>
            </div>
            
            <div class="portfolio-row">
                <a href="#"><img src="/img/PClima.png" alt="" /></a>
                <a href="#"><img src="/img/portfolio-5.jpg" alt="" /></a>
                <a href="#"><img src="/img/portfolio-6.jpg" alt="" /></a>
            </div>
            <p>aqui explico el proyecto </p>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>About me</h2>
            <p>
                Soy un desarrollador Full Stack Con orientación al Back-End,
                con la capacidad de ejecutar los proyectos en equipo o individualmente,
                siempre pensando que deben ser modulable y escalables.
            </p>
            <p>
                Me encanta trabajar con los frameworks y librerías que me permiten
                crear soluciones que sean eficientes y seguras.
            </p>
            <p>
                Cuento con entrenamiento en HTML, CSS, JavaScript, Git,
                React, Redux, NodeJs, Express, SQL databases con PostgreSQL,
                pasarelas de pago con Stripe, email, chat-bot.
            </p>
            <p>
                Si Bien me desempeñe por años en el mundo Gastronómico y hotelero,
                desde mozo, a supervisor, restaurantes y encargados de salones de eventos.
                El mundo de la programación siempre pe habia llamado la atencion pero con la pandamia me reencontre
                con la programacion y lo mejor es que siempre llena mi interés de aprender algo nuevo cada día
            </p>

        </div>
    </section>

    <section id="ability">
        <div class="container">
            <h2 class="skill-title">Skills</h2>
            <!--  <p>
                Aqui explico mis habilidades
            </p> -->
            <div class="skills-row">
                <div class="skills-row-item">
                    <h3>HTML</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>CSS</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>javascript.</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>NodeJS</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>React</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>Babel</h3>
                    <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40"
                        height="40" />
                </div>
                <div class="skills-row-item">
                    <h3> Redux </h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                        alt="redux" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3> Postgresql</h3>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                        alt="postgresql" width="40" height="40" />
                </div>
                <div class="skills-row-item">
                    <h3> Postman</h3>
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40"
                        height="40" />
                </div>
                <div class="skills-row-item">
                    <h3>Git</h3>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40"
                        height="40" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2><a href="mailto:hansvekoni@gmail.com?Subject=Interesado%20en%20Contactarte%20para%20una%20entrevista">Contact
                    Me</a></h2>
            <ul id="mi_parrafo">
                <li>Hans Garcia Full Stack desarrollador</li>
                <li> hansvekoni@gmail.com</li>
                <li> +541169076296</li>
            </ul>
            <button>Copiar al portapapeles</button>

            <p>
                Muchas gracias por visitar mi sitio web. te invito a que me contactes para que puedas conocerme y poder
                trabajar conmigo.
            </p>
            <div id="contactame" class="center">
                <a href="mailto:hansvekoni@gmail.com?Subject=Interesado%20en%20Contactarte%20para%20una%20entrevista">
                    <h3>Link para escribirme a hansvekoni@gmail.com</h3>
                </a>
                <br> </br>
                <a href="mailto:hansvekoni@gmail.com?Subject=Interesado%20en%20Contactarte%20para%20una%20entrevista">
                    <img src="/img/contact.png" alt="Enlace para escribirme" />
                </a>

            </div>
            <div class="container">
                <p><b> Otros enlaces: </b></p>
                <div class="links">
                    <a href="https://linkedin.com/in/hans-garcia-developer" class="twitter-follow-button"
                        data-show-count="false">
                        linkedin hans
                        <img src="https://img.freepik.com/free-psd/glowing-linkedin-logo-realistic-3d-circle_125540-2102.jpg?w=2000"
                            alt="Hans-Rafael Linkedin" width="40" height="40" />
                    </a>
                    <a href="https://github.com/Hans-Rafael " class="twitter-follow-button" data-show-count="false">
                        Git hans-rafael
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="Hans-Rafael Github link" width="40" height="40" />
                    </a>
                </div>
            </div>

        </div>
    </section>

    <footer id="mainfooter">

        <a href="#">regreso al principio
            <img src="https://aclogasir13.neocities.org/img/subir.png" alt="Hans-Rafael Github link" width="40"
                height="40" />
        </a>
        <p>
            &copy; 2022 Hans Vekoni
        </p>
    </footer>
</body>

</html>