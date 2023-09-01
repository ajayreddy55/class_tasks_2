import "./index.css";

const DestinationCard = (props) => {

    const { eachPlace } = props;

    const { name, imageUrl } = eachPlace;

    return (
        <li className="list-item-destination col-5">
            <img src={imageUrl} alt={name} className="destination-image" />
            <p className="destination-name">{ name }</p>
        </li>
    );
}

export default DestinationCard;

