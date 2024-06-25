import { Slide } from "../../Components/Slide/Slide";
import style from "./Conhecimentos.module.scss";

export const Conhecimentos = () => {
  return(
    <div id="conhecimentos" className={`${style.conhecimentos} pt-5`}>
      <h2 className="py-5 text-center">CONHECIMENTOS</h2>
      
      <div className={style.slide}>
        <Slide>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"  loading="eager"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" loading="eager" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg" loading="eager" />
        </Slide>
      </div>
    </div>
  )
}