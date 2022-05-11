const Book = ({ book }) => {
  const imgUrl =
    "https://reststop.randomhouse.com/resources/titles/9786073140546";

  return (
    <div className="selected-book">
      <div className="author-bio">{book.authorbio}</div>
      <a
        href={`https://www.amazon.co.uk/s?i=stripbooks&rh=p_66%3A$9786073140546`}
        target="_blank"
      >
        Amazon Link
      </a>
      <img
        src="https://reststop.randomhouse.com/resources/titles/9786073140546"
        alt="something"
      />
    </div>
  );
};

export default Book;
