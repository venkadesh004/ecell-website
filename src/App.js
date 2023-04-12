import './App.css';
import { MainContainer } from './Containers';
import React from 'react';

// import ReactLoading from "react-loading";

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for async data, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      <MainContainer />
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

// function App() {
//   return (
//     <div className="App">
//       <div className='loading'>
//         <h2>TCE ECELL</h2>
//         <ReactLoading
//           type="cylon"
//           color="#0000FF"
//           height={100}
//           width={50}
//         />
//       </div>
//       {/* <MainContainer /> */}
//     </div>
//   );
// }

export default App;
