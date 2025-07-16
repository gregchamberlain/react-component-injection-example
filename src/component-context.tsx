import { createContext, useContext } from 'react';
import type { ComponentsContextValue } from './types';

const ComponentsContext = createContext<ComponentsContextValue | undefined>(undefined);

export const ComponentsProvider = ComponentsContext.Provider;

export const useComponents = () => useContext(ComponentsContext);