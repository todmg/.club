import styles from "../styles/HeaderMenu.module.scss"
import Link from "next/link"
// import logo from "../public/assets/static/logo.png"

export default () => {
    return (
        <div>
            <header className={styles["site-head"]}>
                <nav className={[styles["nav-flex-container"], styles["nav"], styles["head-bar"]].join(" ")}>
                    {" "}
                    {/* flex for a later addition */}
                    <ul className={styles["nav-items"]}>
                        <li className={styles["logo-container"]}>
                            {/* @ts-ignore */}
                            <img alt="THRIVE OR DIE!!" className={styles["logo-img-src"]} src="/assets/static/logo.png"></img>
                        </li>
                        <li>
                            <Link href={`/`}>
                                <a>
                                    HOME
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/artists/`}>
                                <a>
                                    ARTISTS
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/contact/`}>
                                <a>
                                    CONTACT
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <div className="load">LOADING</div> */}
                </nav>
            </header>
        </div>
    )
}