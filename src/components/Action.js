import React from 'react';
const Action =(props)=>
{
        return(
            <div>
                <button
                className="big-button"
                 onClick={props.eventPickOption}
                disabled = {!props.hasOption}>
                    Welcome you to my website!
                </button>

            </div>
        )
    
        }

export default Action;