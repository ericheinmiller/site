const windowState = { toBeRemoved: null, highlight: null };

function windowReducer(state, action) {
  switch (action.type) {
    case 'closeWindow': {
      return { toBeRemoved: action.payload.title };
    }
    case 'selectTarget': {
      return {
        ...state, highlight: action.payload.title,
      };
    }
    default: {
      return state;
    }
  }
}

export { windowReducer, windowState };
