import React from 'react';
import Main from '../main/main.js'

class App extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         counter: 0
    //     }
    // }
    
// increment = ()=>{
//    let counter = this.state.counter;
//       counter ++
//    this.setState({counter})

// }
// decrement = ()=>{
//     let counter = this.state.counter;
//     counter --
//     this.setState({counter})
//  }

    render() {
        return (
            <>
            < Main />
                {/* <div>
                    counter {this.state.counter}
                </div>
                <button onClick= {this.increment} >
                   + 
                </button>

                <button onClick = { this.decrement}>
                   -
                </button> */}
            </>

        )
    }

}
export default App ;