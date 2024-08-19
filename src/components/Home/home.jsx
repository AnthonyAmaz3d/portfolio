import "./main.css"

const Section = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi, It's <span>Anthony</span> </h1>
                <h3 className="text-animation"> I'm a <span></span> </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia exercitationem facere cupiditate architecto excepturi, 
                    dolores aperiam reiciendis error atque animi quibusdam aliquam corrupti! Error suscipit dolore facere voluptatem quam.
                </p>
                <div className="social-icons">
                    <a href="#">  <i className="bx bxl-linkedin"></i>  </a>
                    <a href="#"> <i className="bx bxl-github"></i> </a>
                    <a href="#"> <i className="bx bxl-instagram-alt"></i> </a>
                    <a href="#"> <i className='bx bxl-twitter'></i> </a>
                </div>

                <div className="btn-group">
                    <a href="#" className="btn">Hire</a>
                    <a href="#contact" className="btn">Contact</a>
                </div>
            </div>
                <div className="home-img">
                    <img src="/src/assets/image.jpeg" alt="" />
                </div>
        </section>
    )
}

export default Section;