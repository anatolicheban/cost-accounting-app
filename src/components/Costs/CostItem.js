import "./CostItem.css";
import Card from "../UI/Card";
import CostDate from "./CostDate";

const CostItem = (props) => {
    return (
        <li>
            <Card className="cost-item">
                <CostDate date={props.date} description={props.description} />
                <div className="cost-item__description">
                    <h2>{props.description}</h2>
                    <div className="cost-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default CostItem;
