import { ReactNode } from "react"
import style from "./Slide.module.scss";

export const Slide = ({children}: {children: ReactNode} ) => {
  return (
    <div className={style.content}>
      <div className={style.content__slide}>
        {children}
      </div>
      <div className={style.content__slide}>
        {children}
      </div>
    </div>
  )
}