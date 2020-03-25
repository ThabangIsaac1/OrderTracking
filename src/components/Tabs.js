import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default ({children})=> {

    const [activeTab, setActive] = useState(null)

    return(
        <div className="tabs">
            <div>
                {children.map(child => {
                    return(
                    <div>{child.props.label}</div>
                    )
                })}    
            </div>  
            <div>
                {}
            </div>      
        </div>
    )
}

Tabs.PropTypes = {
    children: PropTypes.instanceOf(Array).isRequired
}