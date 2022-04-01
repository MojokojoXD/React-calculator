import {useState,useEffect,useContext} from 'react'
import {testContext} from './Calculator'

function Button({buttonDisplay,setUserInput}){
    const [toggle, setToggle] = useState(true);
    
    const buttonResponse = () => {
        setUserInput(buttonDisplay);
        setToggle(false)
    }

    const contextData = useContext(testContext)


    useEffect(()=>{
        setTimeout(() => setToggle(true), 100)
    },[toggle])


    return (
      toggle ? (
        <button className='hover' onClick={buttonResponse}>{buttonDisplay}</button>
      ) : (
        <button className= 'hover' onClick={buttonResponse} style={flash}>{buttonDisplay}</button>
      )
    );
}


const flash = {
    backgroundColor: 'Red',
    color: 'black'
}


export {Button as default};


