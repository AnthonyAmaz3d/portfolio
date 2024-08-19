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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Alias rerum ipsum debitis facere mollitia inventore sapiente officia? Blanditiis, 
                            voluptates, ab voluptatum, cum magni culpa illum rerum at ad nostrum dolore!</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h3>Curso</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Alias rerum ipsum debitis facere mollitia inventore sapiente officia? Blanditiis, 
                            voluptates, ab voluptatum, cum magni culpa illum rerum at ad nostrum dolore!</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Faculdade</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Alias rerum ipsum debitis facere mollitia inventore sapiente officia? Blanditiis, 
                            voluptates, ab voluptatum, cum magni culpa illum rerum at ad nostrum dolore!</p>
                        </div>
                </div>

            </div>
        </section>
    )
}

export default Education;