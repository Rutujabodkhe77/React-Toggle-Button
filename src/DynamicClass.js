import React,{useState} from 'react';
import './MyToggle.css';

function DynamicClass()
{

    const [myCondtion,changeMyCondtion] = useState(false);




    let myScreen ='';

    let  myClasses = [];
  
    if(myCondtion) 
    {
        myScreen = (
            <div> <h1>This is My DIV</h1> </div>
        );
        myClasses.push('green');
        myClasses.push('my_align');
    }
    else
    {
        myClasses.push('red');
        myClasses.push('my_align');

    }

    



    const myToogleFunc = () =>
    {
        changeMyCondtion(!myCondtion);
     }

    return(
        <div>
            
            <button className={myClasses.join(' ')} onClick={myToogleFunc}>Toggle</button>


            {myScreen}
        </div>
    );
}


export default DynamicClass;