import {useState,useEffect} from 'react'

function Button({buttonDisplay,setUserInput}){
    const [toggle, setToggle] = useState(true);
    
    const buttonResponse = () => {
        setUserInput(buttonDisplay);
        setToggle(false)
    }


    useEffect(()=>{
        setTimeout(() => setToggle(true), 100)
    },[toggle])


    return (
      toggle ? (
        <button onClick={buttonResponse}>{buttonDisplay}</button>
      ) : (
        <button onClick={buttonResponse} style={flash}>{buttonDisplay}</button>
      )
    );
}


const flash = {
    backgroundColor: 'Red'
}


export {Button as default};


