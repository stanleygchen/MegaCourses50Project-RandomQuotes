const QuotesAuthor = ({ author, color }) => {
  return (
    <div className="quote-author" style={{ color: color }}>
      <span id="author">{author}</span>
    </div>
  );
};
export default QuotesAuthor;
