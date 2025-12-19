import {Menu} from 'lucide-react';

interface HamburgerProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
}

const Hamburger = ({size = 16, color = 'black', strokeWidth = 1.5}: HamburgerProps) => {

    return (
        <>
            <Menu color={color} size={size} strokeWidth={strokeWidth}/>
        </>
    )
}

export default Hamburger;