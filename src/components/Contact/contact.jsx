import './main.css'

const Contact = () => {
    return(
        <>
        <section className="contact" id="contact" >
            <h2 className="heading">Contate<span>-me</span></h2>
            <form action="">
                <div className="input-group">
                    <div className="input-box">
                        <input type="text" placeholder='Nome' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder='Numero de telefone' />
                        <input type="text" placeholder='Conteudo' />
                    </div>
                </div>
                <div className="input-group-2">
                    <textarea name="" id="" cols={'30'} rows={'10'} placeholder='Sua mensagem' ></textarea>
                    <input type="submit" value={"Mande sua mensagem"} className='btn' />
                </div>
            </form>
        </section>
        <footer className='footer'>
            <div className="social">
                <a href="#"> <i className="bx bxl-linkedin"></i> </a>
                <a href="#"> <i className="bx bxl-github"></i> </a>
                <a href="#"> <i className="bx bxl-instagram-alt"></i> </a>
                <a href="#"> <i className='bx bxl-twitter'></i> </a>
            </div>
            <ul className='list'>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Projetos</a>
                </li>
                <li>
                    <a href="#">Sobre mim</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>
            <p className="copyright">
                © Anthony Maia Dolberth | Todos direitos reservados
            </p>
        </footer>
        </>
    )
}

export default Contact;