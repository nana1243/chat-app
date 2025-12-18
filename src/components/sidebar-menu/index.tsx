import styles from './index.module.css';

interface SidebarMenuProps {
    menuName: string;
    menuLink: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

const SidebarMenu = ({menuName, menuLink, size = 'medium', color = 'black'}: SidebarMenuProps) => {
    return (
        <li className={styles.sidebarMenu}>
            <a
                href={menuLink}
                className={styles[size]}
                style={{color: color}}
            >
                {menuName}
            </a>
        </li>
    )
}

export default SidebarMenu;