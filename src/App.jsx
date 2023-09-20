import { useState } from 'react'
import './App.css'

// 7.1 7.2 7.3
// function App() {
// 	return <div>
//     <div className='text1'>абзац 1</div>
//     <div className='text2'>абзац 2</div>
//     <div className='text3'>абзац 3</div>
// 	</div>;
// }
 

// 8
// function App() {
// 	return <ul>
//     <li>r</li>
//     <li>d</li>
//     <li>s</li>
//     <li>f</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
// 	</ul>;
// }


// 9
// function App() {
// 	return (
//     <ul>
// 			<li>text1</li>
// 			<li>text2</li>
// 			<li>text3</li>
// 		</ul>
//     );
// }


//  10
// function App() {
// 	return (
//   <>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </>
//     )
// }
// function App() {
// 	return (
//   <div>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </div>
//     )
// }



// 11
// function App() {
// 	return <input />;
// }



// 12
// function App() {
// 	return ( <>
//   <input /><input /><input />
//   </>);
// }



// 13
// function App() {
// 	const str1 = 'text1';
// 	const str2 = 'text1';
	
// 	return <div>
// 		<p>{str1}</p>
// 		<p>{str2}</p>
// 	</div>;
// }



// 14
// function App() {
// 	const name = 'user';
// 	const age  = '30';
	
// 	return <div>
// 		name: {name}
//     <br></br>
// 		age:  {age}
// 	</div>;
// }



// 15
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
//   return (
//     <ul>
// 			<li>{arr[0]}</li>
// 			<li>{arr[1]}</li>
// 			<li>{arr[2]}</li>
//       <li>{arr[3]}</li>
// 			<li>{arr[4]}</li>
// 		</ul>
//   )
// }


function App() {
	const obj = {name: 'john', surname: 'smit'};
  return (<div>
    <p>name:{obj.name}</p>
      <br> </br>
    <p>surname:{obj.surname}</p>
  </div>)
}

export default App
