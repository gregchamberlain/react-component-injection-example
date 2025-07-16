import type { Message } from "../types"
import ChatMessage from "./ChatMessage";

export type ChatMessageListProps = {
  messages: Message[];
}

const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '50%',
    }}>
      {messages.map((m, i) => <ChatMessage key={i} message={m} />)}
    </div>
  )
}

export default ChatMessageList