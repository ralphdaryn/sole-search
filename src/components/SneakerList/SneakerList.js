import "./SneakerList.scss";
import { Link } from "react-router-dom";
import { FetchSneakerById } from "../../utils/api-utils";

const SneakerList = ({ sneakerData }) => {
  console.log(sneakerData);
  return (
    <div className="SneakerList">
      <div className="SneakerCard__container">
        {sneakerData.map((sneaker) => (
          <Link to={`/sneakers/${sneaker.id}`} key={sneaker.id}>
            <div key={sneaker.id} className="SneakerCard__card">
              <img
                src={sneaker.image.thumbnail}
                alt={sneaker.name}
                className="SneakerCard__image"
              />
              <div className="SneakerCard__details">
                <h4 className="SneakerCard__name">{sneaker.name}</h4>
                <p className="SneakerCard__market-price">
                  CA${sneaker.estimatedMarketValue}
                </p>
              <button className="SneakerCard__button">CLICK CARD TO VIEW</button>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
