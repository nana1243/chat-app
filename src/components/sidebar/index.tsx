import styles from './index.module.css';
import Hamburger from "@/components/ui/hamburger";
import {MENU} from "@/constants/global.ts";
import SidebarMenu from "@/components/sidebar-menu";
import {useState} from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnclickHamburger = () => {
        console.log('test')
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className={`${styles.sidebar} ${isOpen ? '' : styles.collapsed}`}>
                <div class={styles.hamburger} onClick={handleOnclickHamburger}>
                    <Hamburger/>
                </div>
                <ul className={styles.sidebarList}>
                    {MENU.map(data => {
                        return (
                            <SidebarMenu
                                menuName={data.title}
                                menuLink={data.link}
                                icon={data.icon}
                            />
                        )

                    })}
                </ul>

            </div>
        </>
    )
}

export default Sidebar;