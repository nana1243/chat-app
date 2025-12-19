import styles from './index.module.css'
import React from "react";


const ContentsLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main className={styles.container}>
            {children}
        </main>
    );
};

export default ContentsLayout;
