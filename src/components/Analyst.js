import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from  './Options';
import OptionModal from './OptionModal';
export default class Analyst extends React.Component
{
   state = {
       arrays : [],
       selectedOption : undefined
   };

    eventDeleteOptions = () =>
    {
        this.setState(()=>({arrays: []}));
    }
    eventClearAllOptions = () =>
    {
        this.setState(()=>({
            selectedOption: undefined
        }));
    }
    eventDeleteOption = (optionToRemove)=>
    {
      this.setState((prevState) => ({arrays: prevState.arrays.filter((option) => (optionToRemove !== option)
      )}));

    }
   
    eventPickOption = () =>
    {
      const randDom = Math.floor(Math.random()*this.state.arrays.length);
      const option = this.state.arrays[randDom];
      this.setState(()=> (
         {
             selectedOption: option
         }
         ));
    }
   
    eventAddOption = (option) =>
    {
        if(!option)
        {
            return 'Write a value to add in this selection! ';
        }else if (this.state.arrays.indexOf(option)>-1)
        {
            return 'This option already exists';
        }
        this.setState((adOpp)=> ({
           arrays: adOpp.arrays.concat([option])
        }));
        
    };
  
    componentDidMount = () =>
    {
        console.log('Save Data!');
    }
    componentDidUpdate = () =>
    {
        console.log('Update Data!');
    }
    componentUnmount = () =>
    {
        console.log('Hi');
    }
    
    render(){
        const subtitle = "Nguyen Duc Tuan";
        const title="TRYTODOIT";
    
        return(<div>
            <Header title={title} subtitle ={subtitle}/>
            <div className='container'>
            <Action hasOption = {this.state.arrays.length > 0}
                    eventPickOption={this.eventPickOption}/>
                <div className='widget'>
                <Options 
                   arrays={this.state.arrays}
                   eventDeleteOption ={this.eventDeleteOption}
                   eventDeleteOptions ={this.eventDeleteOptions}/>
                <AddOption eventAddOption = {this.eventAddOption}/>
                </div>
             </div>
            <OptionModal selectedOption = {this.state.selectedOption}
                      eventClearAllOptions={this.eventClearAllOptions}/>
        </div>);
    }
}
Analyst.defaultProps = {
    arrays: []
  };
