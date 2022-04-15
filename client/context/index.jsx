import React from 'react';

import { positionReducer, positionState } from './position';
import { windowReducer, windowState } from './window';

const combineDispatch = (...dispatches) => (action) => {
  dispatches.forEach((dispatch) => dispatch(action));
};

const DispatchContext = React.createContext();
const StateContext = React.createContext();

export default function CombinedProviders({ children }) {
  const [s1, d1] = React.useReducer(positionReducer, positionState);
  const [s2, d2] = React.useReducer(windowReducer, windowState);
  const combinedDispatch = React.useCallback(combineDispatch(d1, d2), [d1, d2]);
  const combinedState = React.useMemo(() => ({ ...s1, ...s2 }), [s1, s2]);

  return (
    <DispatchContext.Provider value={combinedDispatch}>
      <StateContext.Provider value={combinedState}>
        { children }
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

function useState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { useState, useDispatch };
