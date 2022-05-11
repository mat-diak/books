const SavedBooks = ({ savedBooks }) => {
  return (
    <section id="saved-books" className="container">
      {savedBooks.map((book, index) => (
        <div key={index}>{book.titleweb}</div>
      ))}
    </section>
  );
};

export default SavedBooks;
