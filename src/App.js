import './rutuja.css';
import React,{useState} from 'react';
function App()
{
const[myCondition,changeMyCondition]=useState(true);

let myDesign = '';

let style={ 
  backgroundColor:'red',
  color:"white",
  margin:'50px'
};
 


// const showMyDivFunc=()=>
//   {
//     changeMyCondition(true);
//   }

// const hideMyDivFunc=()=>
//   {
//     changeMyCondition(false);
//   }
const ToggleMyDivFunc=()=>
  {
   let Mycondition2 = myCondition;
   
   changeMyCondition(!Mycondition2);
  }

if(myCondition)
{
  myDesign=(
    <div className ="main_div">
    <h1>This Is DIV</h1>
    </div>
  );
  style.backgroundColor="green";
}
else{
  style.backgroundColor="red";
}



  return(
    <div>
{/* <button className="showBTN" onClick={showMyDivFunc}>Show Div</button>
<button className="hideBTN" onClick={hideMyDivFunc}>Hide Div</button> */}

<button className="my_align" onClick={ToggleMyDivFunc}>Toggle Button</button>


{myDesign}

    </div>
  );

}
 export default App;