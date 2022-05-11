const SavedBooks = ({ savedBooks }) => {
  return (
    <section id="saved-books" className="container">
      {savedBooks.map((book) => (
        <div>{book.titleweb}</div>
      ))}
    </section>
  );
};

export default SavedBooks;
