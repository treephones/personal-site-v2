import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';

const Links = () => {

    return(
        <div id='links'>
            <a className='icon' href='https://github.com/treephones' target='_blank'><AiOutlineGithub /></a>
            <a className='icon' href='https://www.linkedin.com/in/moez-bajwa-bb0363181/' target='_blank'><AiOutlineLinkedin /></a>
            <a className='icon' href='https://www.hackerrank.com/treephones' target='_blank'><FaHackerrank /></a>
        </div>
    );
}

export default Links;