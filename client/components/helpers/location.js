const handleMouseDown = (e) => {
  const initialLeft = e.clientX - parseInt(targetElement.current.style.left, 10);
  const initialTop = e.clientY - parseInt(targetElement.current.style.top, 10);
  const left = action.payload.left - state.initialLeft;
  const top = action.payload.top - state.initialTop;
};

export { handleMouseDown };
