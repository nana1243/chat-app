import styles from './index.module.css';

interface SidebarMenuProps {
    menuName: string;
    menuLink: string;
    icon: string;
}

const SidebarMenu = ({menuName, menuLink, icon}: SidebarMenuProps) => {
    return (
        <li className={styles.sidebarMenu}>
            <img
                src={`src/assets/images/${icon}`}
                alt={menuName}
            />
            <button
                // href={menuLink}
                className={styles.sidebarMenuItem}
            >
                {menuName}
            </button>
        </li>
    )
}

export default SidebarMenu;