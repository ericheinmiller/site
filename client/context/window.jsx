import React from 'react';
import Content from '../content';

const initialState = [];
const WindowContext = React.createContext();

function windowReducer(state, action) {
  switch (action.type) {
    case 'doubleClickFolder': {
      return {
        ...state,
      };
    }
    case 'closeWindow': {
      return {};
    }
    default: {
      return state;
    }
  }
}

function WindowProvider({ children }) {
  const [state, dispatch] = React.useReducer(windowReducer, initialState);
  const value = { state, dispatch };
  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

function useWindow() {
  const context = React.useContext(WindowContext);
  if (context === undefined) {
    throw new Error('useWIndow must be used within a WindowProvider');
  }
  return context;
}

export { WindowProvider, useWindow };
