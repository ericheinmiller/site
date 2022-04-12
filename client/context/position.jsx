import React from 'react';

const PositionContext = React.createContext()

function positionReducer(state, action) {
  switch (action.type) {
    case 'set': {
      return { initialLeft: action.payload.left, initialTop: action.payload.top }
    }
    case 'unset': {
      return { count: state.count - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function PositionProvider({children}) {
  const [state, dispatch] = React.useReducer(positionReducer, {count: 0})
  const value = {state, dispatch}
  return <PositionContext.Provider value={value}>{children}</PositionContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {PositionProvider, useCount}
