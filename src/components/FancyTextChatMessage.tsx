import type { TextMessage } from "../types";

const FancyTextChatMessage = ({ text }: TextMessage['data']) => {
  return (
    <span
      style={{
        fontSize: 18,
        backgroundImage: 'linear-gradient(yellow, red)',
        color: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {text}
    </span>
  );
}

export default FancyTextChatMessage;