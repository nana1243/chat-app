import styles from './index.module.css';
import {Bell, Plus} from 'lucide-react';

export default function Header() {

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <h1 className="">Chat</h1>
                </div>

                <div className={styles.headerActions}>
                    <button
                        className={styles.addChatBtn}>
                        <Plus size={18}/>
                        <span className="font-medium">Chat</span>
                    </button>

                    <button className={styles.notificationBtn}>
                        <Bell size={22}/>
                    </button>


                    {/* 프로필 섹션 */}
                    <div className={styles.profileGroup}>
                        <div className={styles.avatarWrapper}>
                            <img
                                src="src/assets/images/profile.png"
                                alt="User"
                                className={styles.avatarImage}
                            />
                        </div>
                        <span className={styles.userName}>Leslie Alexander</span>
                    </div>
                </div>

            </header>
        </>
    )
}
