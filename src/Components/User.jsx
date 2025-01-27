import React, { useEffect,forwardRef} from "react";

function User(props,ref) {
  // useEffect(() => {
  //   console.log("useEffect");
  // },[props.data, props.count]);

  return (
    // <div>
    //   <h1>User Components</h1>
    //   <button onClick={props.data}>Call data function</button>
    // </div>

    // <div>
    //   <h1>Count Props : {props.count}</h1>
    //   <h1>Data Props : {props.data}</h1>
    // </div>

    // forwardRef example
    <div>
      <input type="text" ref={ref}/>
    </div>
  );
}

// class User extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       email: 'test@gmail.com'
//     }
//     // console.log(this.props.email);(for chack pass props)

//   }
//   render(){
//     console.log("Render method", this.state.email)
//     return(
//       <div>
//        <h1>User Components</h1>
//        <button onClick={() => this.setState({email:'testing@test.com'})}>Update</button>
//       </div>
//     )

//   }
// }

// componentDidMount

// class User extends React.Component{
//   constructor()
//   {
//     super();
//     console.log("constructor");
//     this.state={name:'hello'}
//   }
//   componentDidMount()
//   {
//     console.log('componentDidMount');
//   }
//   render()
//   {
//     console.log("render");
//     return(
//       <div>
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={() => this.setState({name:'siri'})}>Update</button>
//       </div>
//     )
//   }
// }

// componentDidUpdate
// class User extends React.Component{
//   constructor()
//   {
//     super();
//     console.log('constructor')
//     this.state={
//       count:0
//     }
//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {
//     console.log('componentDidUpdate',preState);
//   }
//   render(){
//     console.log('render')

//     return(
//       <div>
//         <h1>Component Did Update {this.state.count}</h1>
//         <button onClick={() =>{this.setState({count:this.state.count + 1})}}>Update Name</button>
//       </div>
//     )
//   }
// }

export default forwardRef(User);
