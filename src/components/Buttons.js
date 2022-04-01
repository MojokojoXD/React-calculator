import {useState,useEffect,useContext} from 'react'
import {contextToButtons} from './Calculator'

function Button({buttonDisplay}){
    const [toggle, setToggle] = useState(true);
    
    const buttonResponse = () => {
        contextData(buttonDisplay);
        setToggle(false)
    }

    const contextData = useContext(contextToButtons)


    useEffect(()=>{
        let timeID = setTimeout(() => setToggle(true), 150);
        return(()=> clearTimeout(timeID))
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


