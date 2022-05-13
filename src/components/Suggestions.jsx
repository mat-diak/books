import Gallery from "../styled-components/Gallery.styled";

const Suggestions = ({ suggestions }) => {
  const getImgUrl = (isbn) => {
    return `https://reststop.randomhouse.com/resources/titles/${isbn}`;
  };

  return (
    <Gallery>
      {suggestions.map((book) => {
        return (
          <div key={book.isbn}>
            <img src={getImgUrl(book.isbn)} alt="" />
          </div>
        );
      })}
    </Gallery>
  );
};

export default Suggestions;
