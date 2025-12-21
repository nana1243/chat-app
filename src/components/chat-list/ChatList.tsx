import styles from './index.module.css';
import ChatListItem from "@/components/chat-list-item/ChatListItem";

const ChatList = () => {
    const dummyData = [
        {id: 1, name: 'Alice', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
        {id: 2, name: 'Hennie', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
        {id: 3, name: 'Jenny', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
        {id: 4, name: 'Jacob Jones', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
        {id: 5, name: 'Leslie Alexarder', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
        {id: 6, name: 'Marvin Mckinney', lastMessage: 'Hey there!', timestamp: '10:30 AM', nickName: 'AliceLovely'},
    ]

    return (
        <>
            <div className={styles.chatListContainer}>
                <ul>
                    {dummyData.map((chat) => (
                        <>
                            <ChatListItem
                                key={chat.id}
                                id={chat.id}
                                name={chat.name}
                                lastMessage={chat.lastMessage}
                                timestamp={chat.timestamp}
                                nickName={chat.nickName}
                            />
                        </>))}
                </ul>
            </div>
        </>
    )
}


export default ChatList;