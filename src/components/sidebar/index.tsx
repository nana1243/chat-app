import styles from './index.module.css';
import Hamburger from "@/components/ui/hamburger";
import {MENU} from "@/constants/global.ts";
import SidebarMenu from "@/components/sidebar-menu";

const Sidebar = () => {
    return (
        <>
            <div className={styles.sidebar}>
                <Hamburger/>
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