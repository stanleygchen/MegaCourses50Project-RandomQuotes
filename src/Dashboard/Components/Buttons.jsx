const Buttons = ({ handleClick, color }) => {
  return (
    <div className="buttons">
      <button
        onClick={handleClick}
        style={{ color: "darkgray", backgroundColor: color }}
        className="button"
      >
        New Quote
      </button>
    </div>
  );
};
export default Buttons;
