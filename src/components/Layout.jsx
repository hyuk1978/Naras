import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";

export default function Layout({ children }) {
    const nav = useNavigate();
    const onClickHome = () => {
        nav('/')
    }
    return (
        <div className="layout">
            <header className={style.header} onClick={onClickHome}>
                {/* style.header로 헤더 css만 적용! */}
                <div>🌎 NARAS</div>
            </header>
            <main className={style.main}>{children}</main>
        </div>
    )
}