import style from "./Contatos.module.scss";
import pdf from "../../assets/pdf.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const curriculo = require("../../assets/curriculo/curriculo.pdf");

export const Contatos = () => {
  return(
    <div id="contatos" className={style.contatos}>
      <a href="https://github.com/JeanGS8" target="_blank">
        <img src={github} alt="link github"/>
      </a>

      <a href={curriculo} download="curriculo.pdf">
        <img src={pdf} alt="baixar curriculo"/>
      </a>

      <a href="https://www.linkedin.com/in/jeangs/" target="_blank">
        <img src={linkedin} alt="link linkedin"/>
      </a>
    </div>
  )
}