

// var check1 = React.createElement("h1",
// {id : 16525146},
// "The weather is very very hot!");
// var appRoot = document.getElementById('app');
// ReactDOM.render(check1,appRoot);

// const truemilk = {
//     title : 'Today, The girl is beautifu',
//     subtitle:'I am interested in herself',
//     options : []
// };
// const onFormSubmit = (e) =>
// {
//     e.preventDefault();
//     const option = e.target.elements.option1.value;
//     if(option)
//     {
//         truemilk.options.push(option);
//         e.target.elements.option1.value='';
//         render();
//     }
// };
// const onRemoveAll =() =>
// {
//   truemilk.options=[];
//   render();
// };
// const onMakeDecission =() =>
// {
//  const randDom = Math.floor(Math.random()*truemilk.options.length);
//  const option = truemilk.options[randDom];
//  alert(option);
// };
// const render = () =>
// {
//     const check2 = (<div>
//         <h1>{truemilk.title}</h1>
//         {truemilk.subtitle&&<p>{truemilk.subtitle}</p>}
//         <p>{truemilk.options.length>0 ? 'Here are your options' : 'NoOption'}</p>
//         <button disabled={truemilk.options.length===0} onClick={onMakeDecission}>What should I do?</button>
//         <button onClick={onRemoveAll}>Remove All</button>
//         <ol>
//         {
//             truemilk.options.map(option=> <li key={option}>{option}</li>)
//         }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option1"/>
//             <button>Add Option</button>
//         </form>
//      </div>);
//      var appRoot = document.getElementById('app');
//      ReactDOM.render(check2,appRoot);
// }
// render();


//JSX - Javascript XML
// var user = {
//   name : 'Nguyễn Đức Tuấn',
//   age : 'tuổi 23',
//   address: 'Hồ Chí Minh.City',
//   location: 'BaDinh'
// };
// function getLocation(location)
// {
//     if(location)
//     {
//         return <p>Location: {location}</p>;
//     }
// }
// var check3 = (<div>
//    <h1>{user.name ? user.name : 'unknowName'}</h1>
//    <p>{user.age}</p>
//    <p>{user.address}</p>
//     {getLocation(user.location)}
// </div>);

// ReactDOM.render(check2,appRoot);
// const sky =
// {
//     name : 'DucTuan',
//     getName(){
//         return this.name;
//     }
// };
// const getName = sky.getName.bind({name:'DuongLinh'});
// console.log(getName());

class Analyst extends React.Component
{

    constructor(props)
    {
        super(props);
        this.eventDeleteOption= this.eventDeleteOption.bind(this);
        this.eventPickOption = this.eventPickOption.bind(this);
        this.eventAddOption = this.eventAddOption.bind(this);
        this.eventDeleteOptions= this.eventDeleteOptions.bind(this);
        this.state = {
           arrays : props.arrays
        };
    }
    componentDidMount()
    {
        console.log('Save Data!');
    }
    componentDidUpdate()
    {
        console.log('Update Data!');
    }
    componentUnmount()
    {
        console.log('Hi');
    }
    eventDeleteOptions()
    {
        this.setState(()=>({arrays: []}));
    }
    eventDeleteOption(optionToRemove)
    {
      this.setState((prevState) => ({arrays: prevState.arrays.filter((option) => (optionToRemove !== option)
      )}));

    }
    eventPickOption ()
    {
      const randDom = Math.floor(Math.random()*this.state.arrays.length);
      const option = this.state.arrays[randDom];
      alert(option);
    }
   
    eventAddOption(option)
    {
        if(!option)
        {
            return 'Nhập giá trị để thêm vào';
        }else if (this.state.arrays.indexOf(option)>-1)
        {
            return 'This option already exists';
        }
        this.setState((adOpp)=> ({
           arrays: adOpp.arrays.concat([option])
        }));
        
    }
    render(){
        const subtitle = "Nguyen Duc Tuan";
        const title="Test Value";
    
        return(<div>
            <Header title={title} subtitle ={subtitle}/>
            <Action hasOption = {this.state.arrays.length > 0}
                    eventPickOption={this.eventPickOption}/>
            <Options 
               arrays={this.state.arrays}
               eventDeleteOption ={this.eventDeleteOption}
               eventDeleteOptions ={this.eventDeleteOptions}/>
            <AddOption eventAddOption = {this.eventAddOption}/>
        </div>);
    }
}
Analyst.defaultProps = {
    arrays: []
  };
const Header = (props) =>
{
  
     return(
         <div>
             <h1>{props.title}</h1>
             <h2>{props.subtitle}</h2>
       
         </div>
     )
  
}
Header.defaultProps =
{
 title : 'ABC'
};
const Action =(props)=>
{
        return(
            <div>
                <button onClick={props.eventPickOption}
                disabled = {!props.hasOption}>
                    What should I do?
                </button>

            </div>
        )
    
        }
const Options = (props) =>
{
  
   
        return(
            <div>
                <button onClick={props.eventDeleteOptions}>Remove All</button>
              {
              props.arrays.map((option) => (
                <Option
                 key={option} 
                 optionText= {option} 
                 eventDeleteOption ={props.eventDeleteOption}
                 />
              ))
              }
            </div>
        ); 
};
const Option = (props) =>
{
  
      return(
          <div>
              {props.optionText}
              <button onClick ={(e) => {
                  props.eventDeleteOption(props.optionText)
              }} >
                remove
                </button>
          </div>
      );
}

// var appRoot = document.getElementById('app');
ReactDOM.render(<Analyst/>,document.getElementById('app'));
