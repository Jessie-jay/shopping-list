import React from 'react';
// import ReactDOM from 'react-dom';


class Counter extends React.Component {
    // state = {
    //     value: this.props.counter.value,
    //     //    tags: []
    // }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p> ;
    //     return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // } 
    // handleIncrement = () => {
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // }
    
    render() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary"

     

        return ( 
            <div>
             <span className = {classes} >{this.formatCount()}</span> 
                <button onClick = {() => this.props.onIncrement(this.props.counter)}
                className = "btn btn-secondary btn-sm" > Increment </button> 
                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                className= "btn btn-danger btn-sm m-2">Delete</button>
                {
                /* {this.state.tags.length === 0 && 'Please add a new tag'} 
                           {this.renderTags()}  */
            } 
            </div>
    );
}
formatCount() {
    const {
        value
    } = this.props.counter;
    return value === 0 ? 'zero' : value;
}
}

export default Counter;