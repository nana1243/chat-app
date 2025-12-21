import styles from './index.module.css';

interface ChatListItemProps {
    id: number;
    name: string;
    lastMessage: string;
    timestamp: string;
    nickName: string;

}

const ChatListItem = (props: ChatListItemProps) => {
    const {id, name, lastMessage, timestamp, nickName} = props;
    return (
        <li key={id}>
            <button className={styles.buttonContainer}>
                <h3>{name} ({nickName})</h3>
                <span>{timestamp}</span>
                <p>{lastMessage}</p>
            </button>
        </li>
    )
}


export default ChatListItem;