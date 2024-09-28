import "./main.css"

const Section = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Olá, eu sou o <span>Anthony</span> </h1>
                <h3 className="text-animation"> Eu sou <span></span> </h3>
                <p>
                    Sou desenvolvedor FullStack com uma grande curiosidade em todas as áreas de desensolvimento, de back-end até programação de jogos, gosto muito de mangás e jogos e ainda mais da linguagem de programação Java ☕ 
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/anthony-maia20/" target="_blank">  <i className="bx bxl-linkedin"></i>  </a>
                    <a href="https://github.com/AnthonyAmaz3d" target="_blank"> <i className="bx bxl-github"></i> </a>
                    <a href="https://www.instagram.com/anthony_maiad/" target="_blank"> <i className="bx bxl-instagram-alt"></i> </a>
                    <a href="https://twitter.com/AnthonyAmaz3d" target="_blank"> <i className='bx bxl-twitter'></i> </a>
                </div>

                <div className="btn-group">
                    <a href="https://www.linkedin.com/in/anthony-maia20/" target="_blank" className="btn">Hire</a>
                    <a href="#contact" className="btn">Contact</a>
                </div>
            </div>
                <div className="home-img">
                    <img src="/src/assets/image.png" alt="" />
                </div>
        </section>
    )
}

export default Section;