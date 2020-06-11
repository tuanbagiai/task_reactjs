import React from 'react';
const Option = (props) =>
      (
          <div className='option'>
             <p className='option_text'>{props.count}.{props.optionText}</p> 
              <button className = 'button buton-link'
                  onClick ={(e) => {
                  props.eventDeleteOption(props.optionText)
              }} >
                remove
            </button>
          </div>
      );
export default Option;