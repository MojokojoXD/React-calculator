import {useState,useEffect,useContext} from 'react'
import {contextToButtons} from './Calculator'

function Button({buttonDisplay,setUserInput}){
    const [toggle, setToggle] = useState(true);
    
    const buttonResponse = () => {
        contextData(buttonDisplay);
        setToggle(false)
    }

    const contextData = useContext(contextToButtons)


    useEffect(()=>{
        setTimeout(() => setToggle(true), 100)
    },[toggle])


    return (
      <button onClick={buttonResponse} style={toggle? null : flash} className={buttonDisplay==='=' ? 'equal' : 'hover'}>{buttonDisplay}</button>
    );
}


const flash = {
    backgroundColor: 'Red',
    color: 'black'
}



export {Button as default};


