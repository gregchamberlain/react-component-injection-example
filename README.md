# Running
```sh
pnpm install
pnpm run dev
```

# Example
Default Components
<img width="2110" height="966" alt="image" src="https://github.com/user-attachments/assets/aa1d24a4-a8d1-4a98-9a9b-6273791cf1cb" />
Injected Components
<img width="2198" height="958" alt="image" src="https://github.com/user-attachments/assets/cc7e5dc3-ee9e-4c1f-999f-cb12e350dc17" />


# Component Injection
The `ChatMessage` component allows for injecting custom rendering of `Image` and `Text` messages. This
is acheived via components passed through the `ComponentsContext`. `App.tsx` has simple example of
injecting the custom `FancyTextChatMessage` and `FancyImageChatMessage` components, toggled by
checkboxes in the header.

## Context Shape
```tsx
export type ComponentsContextValue = {
  chat?: {
    message?: {
      Text?: React.FC<TextMessage['data']>;
      Image?: React.FC<ImageMessage['data']>;
    }
  }
};

const ComponentsContext = createContext<ComponentsContextValue | undefined>(undefined);

export const ComponentsProvider = ComponentsContext.Provider;

export const useComponents = () => useContext(ComponentsContext);
```

## Using injected components
```tsx
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
```

## Injecting Custom Components
```tsx
import { FancyTextChatMessage, FancyImageChatMessage  } from '...';

const CONTEXT_VALUE = {
  chat: {
    message: {
      Text: FancyFancyTextChatMessage,
      Image: FancyImageChatMessage
    }
  }
}

// ..

<ComponentsProvider value={CONTEXT_VALUE}>
  <App />
</ComponentsProvider>
```
