import type { ImageMessage } from "../types";

const FancyImageChatMessage = ({ src, width, height }: ImageMessage['data']) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      style={{
        filter: 'grayscale(1)',
        transform: 'rotate(10deg) scale(0.85)',
      }}
    />
  );
}

export default FancyImageChatMessage;