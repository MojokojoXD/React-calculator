// @ts-nocheck
import Buttons from "./Buttons";

const ops = ['*','+','-','/','DEL','RESET','=']

const generateOps = (passOps) =>{
    const jsxOps = ops.map(ops =>
        <Buttons key = {ops+'key'} buttonDisplay = {ops} setUserInput={passOps}/>);

    return jsxOps;
}

function Operations({getOps}){
    return(
        <div className="operations">
            {generateOps(getOps)}
        </div>
    )
}


export {Operations as default}