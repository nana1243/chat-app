import styles from './index.module.css';
import Header from "@/components/header/Header";


const ContentsLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main className={styles.container}>
            <Header/>
            {children}
        </main>
    );
};

export default ContentsLayout;
