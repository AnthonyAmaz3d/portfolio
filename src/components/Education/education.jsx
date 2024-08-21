import './main.css'

const Education = () => {
    return(
        <section className="education" id="education">
            <h2 className='heading'>Educação</h2>

            <div className="timeline-items">

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2022</div>
                        <div className="timeline-content">
                            <h3>Ensino Médio</h3>
                            <p>Finalizei o ensino médio em 2022 no Centro Educacional Prisma, em Balneário Piçarras, cidade vizinha de Penha (minha cidade), terminei
                            sendo o aluno destaque do ano com média geral de 9.7. </p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h3>Curso</h3>
                            <p>Sempre tive contanto com o mundo computacional, principalmente com games, depois de finalizar o ensino médio, ainda um pouco confuso do que fazer no futuro, 
                            decidi fazer o curso de FullStack Java da EBAC e assim comecei a gostar muito de programar e desenvolver soluções.
                            </p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Faculdade</h3>
                            <p>Após decidir e gostar da área de programação, estava decidido a fazer um curso superior, e em 2024 decidi começar a fazer Analise e Desensolvimento de sistemas
                            na PUC-PR, escolhi essa instituição por ter amigos que ja estudavam e recomendavam ela, estou no segundo semestre atualmente.
                            </p>
                        </div>
                </div>

            </div>
        </section>
    )
}

export default Education;