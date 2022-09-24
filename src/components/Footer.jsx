import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a href="https://github.com/MathFuly" target="_blank">
          <RiGithubFill />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-fuly-917b65223/"
          target="_blank"
        >
          <RiLinkedinBoxFill />
        </a>
      </div>
      <div className="copy">
        <p>Developed by Matheus Fuly in 2022/09/20</p>
        <p>&copy;aniBase</p>
      </div>
    </footer>
  );
};

export default Footer;
