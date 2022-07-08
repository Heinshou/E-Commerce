import './styles/footerScreen.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {FaGithubSquare} from 'react-icons/fa'

const FooterScreen = () => {
  return (
    <footer className="footer">
        <div className='footer-colaborators'>
        <h2>Collaborators</h2>
        <div className='container-colaborators'>
            <article>
              
              <h3>Gabriel Sanchez</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/gabriel-sanchez-717222206/"><BsLinkedin/></a></li>
                <li><a href="https://github.com/gabrielsanchez16"><FaGithubSquare/></a></li>
              </ul>
            </article>
            <article>
              
              <h3>Miguel Chavez</h3>
              <ul>
                <li><a href=""><BsLinkedin/></a></li>
                <li><a href=""><FaGithubSquare/></a></li>
              </ul>
            </article>
        </div>
        </div>
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterScreen;