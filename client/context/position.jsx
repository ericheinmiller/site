import React from 'react';

const PositionContext = React.createContext();

const initialState = {
  initialLeft: null,
  initialTop: null,
  top: null,
  left: null,
  targetElement: null,
  windows: [],
};

function positionReducer(state, action) {
  switch (action.type) {
    case 'set': {
      return {
        ...state,
        initialLeft: action.payload.left,
        initialTop: action.payload.top,
        targetElement: action.payload.targetElement,
      };
    }
    case 'unset': {
      return {
        ...state,
        top: null,
        left: null,
        initialLeft: null,
        initialTop: null,
        targetElement: null,
      };
    }
    case 'move': {
      console.log('yooooo lol');
      const left = action.payload.left - state.initialLeft;
      const top = action.payload.top - state.initialTop;
      return {
        ...state, left, top,
      };
    }
    default: {
      return state;
    }
  }
}

function PositionProvider({ children }) {
  const [state, dispatch] = React.useReducer(positionReducer, initialState);
  const value = { state, dispatch };
  return <PositionContext.Provider value={value}>{children}</PositionContext.Provider>;
}

function usePosition() {
  const context = React.useContext(PositionContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { PositionProvider, usePosition };
