class Counter extends React.Component {
 constructor(props)
 {
    super(props);
    this.eventAdd = this.eventAdd.bind(this);
    this.eventSub = this.eventSub.bind(this);
    this.eventReset = this.eventReset.bind(this);
    this.state = {
        count: 0
    };
 }
 eventAdd()
 {
   this.setState((setCount) => {
    return {
     count : setCount.count + 1
    };
   });
 }
 eventSub(){
    this.setState((setCount) =>
    {
      return{
          count : setCount.count - 1
      };
    });
 }
 eventReset(){
    this.setState((setCount)=>
    {
        return {
            count : 0
        };
    });
    this.setState((setCount)=>
    {
        return{
          count: setCount.count + 1
        };
    }
    );
 }
 render()
 {
     return(
         <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick = {this.eventAdd}>+1</button>
             <button onClick = {this.eventSub}>-1</button>
             <button onClick = {this.eventReset}>reset</button>
         </div>
     );
 }
}
ReactDOM.render(<Counter/>,document.getElementById('app'));