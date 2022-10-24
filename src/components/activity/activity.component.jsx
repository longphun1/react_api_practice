import Types from '../types/types';
import './activity.styles.css'

const Fact = ({ activity }) => { // passed in 'activity' object as a destructured prop
    return (
        <div>
            <h1>{activity.activity}</h1>
            <h2>{activity.type}</h2>
            {Types.map((type) => { // mapping through 'Types' object with the element of 'type'
                return type.type === activity.type ? ( // check if element.type equals to activity type
                    <img key={activity.key} src={type.image} width="500" height="270"/> // if true then render this line
                ) : null; // else render nothing
            })}
        </div>
    )
};

export default Fact;