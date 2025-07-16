/**
 * Data types
 */

type MessageBase = {
  user: 'human' | 'bot'
}

export type TextMessage = MessageBase & {
  type: 'text';
  data: {
    text: string;
  }
}

export type ImageMessage = MessageBase & {
  type: 'image';
  data: {
    src: string;
    width?: number;
    height?: number;
  }
}

export type Message = TextMessage | ImageMessage;

export type ComponentsContextValue = {
  chat?: {
    message?: {
      Text?: React.FC<TextMessage['data']>;
      Image?: React.FC<ImageMessage['data']>;
    }
  }
};