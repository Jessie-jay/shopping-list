import React, {Component} from 'react';
// import logo from './logo.svg';
import Counter from './counter';
// import './App.css'; 

class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props;

    return ( 
    <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button> 
          {counters.map(counter => 
          <Counter 
              onDelete={onDelete}
              onIncrement={onIncrement} 
              key={counter.id} 
              counter={counter}  
          />)}
    </div>
    )
  }
}


export default Counters;