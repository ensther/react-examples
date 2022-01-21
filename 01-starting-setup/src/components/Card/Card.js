import './Card.scss';

const Card = (props) => {
    return (
        <div id={props.id} className={'card ' + props.className}>{props.children}</div>
    );
}

export default Card;