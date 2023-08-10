import { useParams } from "react-router-dom";
import { useFetchSneakerById } from "../../utils/api-utils";
import './ProductDetails.scss';

const ProductDetails = () => {
  const { sneakerId } = useParams();
  const { sneakerData } = useFetchSneakerById(sneakerId);
  console.log(sneakerData)

  return (
    <div className="ProductDetails">
      {sneakerData ? (
        <div className="sneaker-details">
          <img className="sneaker-details__img" src={sneakerData.image.small} alt={sneakerData.name} />
          <div className="sneaker-details__details">
          <h4 className="sneaker-details__title">{sneakerData.name}</h4>
          <h3 className="sneaker-details__subtitle">{sneakerData.colorway}</h3>
          <p className="sneaker-details__subtext">Retail Price</p>
          <p className="">CAD${sneakerData.retailPrice}</p>
          <p className="sneaker-details__subtext">Estimated Market Value</p>
          <p className="">CAD${sneakerData.estimatedMarketValue}</p>
          <p className="sneaker-details__story">{sneakerData.story}</p>
          <p className="sneaker-details__subtitle--link">CHECKOUT HERE:</p>
          <div className="sneaker-details__links">
          <a className ="sneaker-details__links" href={sneakerData.links.stockX} target="_blank" className="sneaker-details__links--stockx">StockX</a>
          <a href={sneakerData.links.goat} target="_blank" className="sneaker-details__links--goat">GOAT</a>
          <a href={sneakerData.links.flightClub} target="_blank" className="sneaker-details__links--flightclub">FLIGHTCLUB</a>
          </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
