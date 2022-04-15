const positionState = {
  initialLeft: null,
  initialTop: null,
  top: null,
  left: null,
  targetElement: null,
};

function positionReducer(state, action) {
  switch (action.type) {
    case 'selectTarget': {
      return {
        ...state,
        initialLeft: action.payload.left,
        initialTop: action.payload.top,
        targetElement: action.payload.targetElement,
      };
    }
    case 'unSelectTarget': {
      return {
        ...state,
        top: null,
        left: null,
        initialLeft: null,
        initialTop: null,
        targetElement: null,
      };
    }
    case 'moveTarget': {
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

export { positionReducer, positionState };
