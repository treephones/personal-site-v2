const About = ({ innerRef }) => {

    return (
        <header id='about' className='section' ref={innerRef}>
            <h1>About Me</h1>
            <div className='borda'>
                <p>
                    Hi, I'm Moez, a second year Computer Science student at Carleton University in the Software Engineering stream. Taking on complex challenges and working on 
                    side projects is what drives my motivation. I strive to have a career focused in software development, where I am able to solve real world problems while 
                    actively make a difference in the lives of others.  
                </p>
            </div>
            <div className='borda'>
                <p>
                    I have experience in full stack development, web development, and automation, with knowledge of Python, Javascript, Java, Swift and C. Technologies and 
                    frameworks I have used include Express, React, Bootstrap, MongoDB, Linux, OpenCV, AWS, Heroku and Flask.
                </p>
            </div>
            <div className='borda'>
                <p>
                    Aside from programming, on my spare time I enjoy playing hockey, filmmaking, and doing aerial and astro photography.
                </p>
            </div>
        </header>
    );
}

export default About;