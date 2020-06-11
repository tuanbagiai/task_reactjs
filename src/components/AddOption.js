import React from 'react'

 export default class AddOption extends React.Component
{
    state =
    {
        error:undefined
    };
    constructor(props)
    {
        super(props);
        this.eventAddOption = this.eventAddOption.bind(this);
    }
       eventAddOption(e)
       {
           e.preventDefault();
           console.log('testing');
         const option = e.target.elements.option.value;
         const error = this.props.eventAddOption(option);
         this.setState(() => {
          return {error};
      });
         }
    render(){
        return(
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
            <form  className= 'add-option'
                   onSubmit={this.eventAddOption}>
                  <input className='add-option_input'
                         type="text" 
                         name="option" />
                  <button>Add Option</button>
            </form>
            </div>
          
        )
    }
}