import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://mews.in/wp-content/uploads/2020/06/1_SeUxbNo-X_FYt4dwPZ81Sw-min.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kashmir</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.thewildcone.com/wp-content/uploads/2019/01/beautiful-2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Manali</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://preview.redd.it/20iuno1sah421.jpg?width=960&crop=smart&auto=webp&s=d7b8d5f26840ba30283977346c7292c96004f4a6"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
