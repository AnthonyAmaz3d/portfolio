import './main.css'

const Projects = () => {
    return(
        <section className="projects" id="projects" >
            <h2 className="heading">Projetos</h2>

            <div className='services-container'>
                <div className="service-box">
                    <div className="service-info">
                        <h4>Devant voice Assistant</h4>
                        <p >Este projeto é um assistente de comandos de voz desenvolvido em Python, 
                            capaz de ouvir comandos, responder por meio de síntese de fala, automatizar algumas tarefas e gerenciar uma lista de tarefas 
                            usando um banco de dados SQLite.
                        </p>
                        <div className="btn-group">
                            <a href="https://github.com/AnthonyAmaz3d/devant-voice-assistant" target="_blank" className="btn">Visualizar</a>
                        </div>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-info">
                        <h4>CodeBlog com SpringBoot</h4>
                        <p>Projeto utilizando springboot e postgreSQL, desenvolvido para um trabalho de freelance, feito para um amigo.</p>
                        <div className="btn-group">
                            <a href="https://github.com/AnthonyAmaz3d/springboot" target="_blank" className="btn">Visualizar</a>
                        </div>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-info">
                        <h4>Sistema de financiamento Java</h4>
                        <p>Este é um sistema de simulação de financiamento desenvolvido em Java. O objetivo do projeto é fornecer uma ferramenta para calcular as condições de financiamento baseadas em dados fornecidos pelo usuário, como valor do financiamento, taxa de juros e período de pagamento.</p>
                        <div className="btn-group">
                            <a href="https://github.com/AnthonyAmaz3d/sistema_financiamento_java" target="_blank" className="btn">Visualizar</a>
                        </div>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-info">
                        <h4>Clone Studio Ghibli</h4>
                        <p>Este é um clone estático do site oficial do Studio Ghibli, desenvolvido como parte de um projeto de prática para aprimorar habilidades em HTML, CSS e JavaScript. O foco do projeto é replicar a interface e o design do site original, sem a utilização de APIs externas.</p>
                        <div className="btn-group">
                            <a href="https://github.com/AnthonyAmaz3d/clone_studio_ghibli" target="_blank" className="btn">Visualizar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects