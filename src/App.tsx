import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatMessageList from './components/ChatMessageList'
import type { ComponentsContextValue, Message } from './types'
import FancyTextChatMessage from './components/FancyTextChatMessage'
import { ComponentsProvider } from './component-context'
import FancyImageChatMessage from './components/FancyImageChatMessage '

const MESSAGES: Message[] = [
  { user: 'human', type: 'text', data: { text: 'Show me an image' } },
  { user: 'bot', type: 'text', data: { text: 'Okay making you an image' } },
  { user: 'bot', type: 'image', data: { src: 'https://picsum.photos/300/200', width: 300, height: 200 } },
]

function App() {

  const [injectTextComponent, setInjectTextComponent] = useState(false);
  const [injectImageComponent, setInjectImageComponent] = useState(false);

  const contextValue: ComponentsContextValue = useMemo(() => ({
    chat: {
      message: {
        Text: injectTextComponent ? FancyTextChatMessage : undefined,
        Image: injectImageComponent ? FancyImageChatMessage : undefined,
      }
    }
  }), [injectTextComponent, injectImageComponent])

  return (
    <ComponentsProvider value={contextValue}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div
          style={{
            borderBottom: '1px solid #ccc',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <label>
            Use Fancy Text
            <input
              type="checkbox"
              checked={injectTextComponent}
              onChange={(e) => setInjectTextComponent(e.currentTarget.checked)}
            />
          </label>
          <label>
            Use Fancy Image
            <input
              type="checkbox"
              checked={injectImageComponent}
              onChange={(e) => setInjectImageComponent(e.currentTarget.checked)}
            />
          </label>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <ChatMessageList messages={MESSAGES} />
        </div>
      </div>
    </ComponentsProvider>
  )
}

export default App
