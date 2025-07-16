import { useMemo } from "react";
import { useComponents } from "../component-context";
import type { ImageMessage, Message, TextMessage } from "../types";

export type ChatMessageProps = {
  message: Message;
}

const DEFAULT_TEXT_COMPONENT = ({ text }: TextMessage['data']) => <span>{text}</span>;
const DEFAULT_IMAGE_COMPONENT = ({ src, width, height }: ImageMessage['data']) => (
  <img src={src} width={width} height={height} />
);

const ChatMessage = ({ message }: ChatMessageProps) => {
  const components = useComponents();

  const Text = components?.chat?.message?.Text || DEFAULT_TEXT_COMPONENT;
  const Image = components?.chat?.message?.Image || DEFAULT_IMAGE_COMPONENT;
  
  const content = useMemo(() => {
    switch (message.type) {
      case 'text':
        return <Text {...message.data} />;
      case 'image':
        return <Image {...message.data} />;
      default:
        return null
    }
  }, [message, Text, Image]);

  return content ? (
    <div
      style={{
        padding: '8px 10px',
        border: `1px solid ${message.user === 'bot' ? '#35b5e5' : '#ccc'}`,
        background: message.user === 'bot' ? '#35b5e5' : '#fff',
        color: '#000',
        alignSelf: message.user === 'bot' ? 'flex-start' : 'flex-end',
        borderRadius: 6,
        maxWidth: 400,
      }}
    >
      {content}
    </div>
  ) : null;

};

export default ChatMessage;