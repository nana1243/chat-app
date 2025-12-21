import { createFileRoute } from '@tanstack/react-router'
import ChatList from "@/components/chat-list/ChatList";

export const Route = createFileRoute('/chat')({
  component: ChatComponent,
})

function ChatComponent() {
  return <div>

      <ChatList />
  </div>
}
