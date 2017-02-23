/**
 * Created by SWSD on 2017-02-23.
 */
import React,{PropTypes} from 'react';
const.PropTypes={
    item:PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};
function ListItem({item}) {
    return (
        <a href = "#" className="ListItem">
            <span> {item.text}</span>
        </a>
    );
}
ListItem.PropTypes = propTypes;

export default  ListItem;

