function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: "white", color: "red" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
