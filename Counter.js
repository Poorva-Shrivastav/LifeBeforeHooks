import React, { Component, useState } from 'react'

// class Counter extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }

    // count() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

//     counter(){
//        this.setState(prevState => ({
//             count: prevState.count + 1
//        }))
//     }
    
//     countFive(){
//         this.counter()
//         this.counter()
//         this.counter()
//         this.counter()
//         this.counter()
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Count = {this.state.count}</h1>
//                 <button onClick={()=> this.countFive()}>Count</button>
//             </div>
//         )
//     }
// }

const Counter = () =>{
    const [count, setCount] = useState(0)
    const [decCount, setDecCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count+5)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => setDecCount(decCount-5)}>Decrement</button>
            <p>{decCount}</p>
        </div>
    )
}


export default Counter;
