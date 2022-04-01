// @ts-nocheck
import NumberButtons from "./NumberButtons";
import Operations from "./Operations";
import { useState, createContext} from "react";
import Display from './Display'

const testContext = createContext();

function Calculator() {
  const [userInput, setInput] = useState("");
  const [displayIn, setDisplayIn] = useState('');
  const [operands, setOperand] = useState([]);
  const [result,setResult] = useState('');

  

  const retrieveClickVal = (num) => {  
    switch (true) {
      case num === "DEL":
        setInput(state => {
          return state.length === 0 ? '' : state.slice(0,state.length-1);
        });
        setDisplayIn(state => {
          return state.length === 0 ? "" : state.slice(0, state.length - 1);
        })
        break;

      case num === "RESET":
        setInput("");
        setOperand([]);
        setResult('');
        setDisplayIn('')
        break;

      case num === "=":
        setOperand(state => {
          return [...state,userInput]
        });
        try{
          setResult(eval([...operands,userInput].join('')))
        }catch(err){
          console.log(err)
        }
        setInput('');
        setDisplayIn('')
        setOperand([]);
        break;

      case num === "*" || num === "-" || num === "+" || num === "/" || num === "(" || num ===")":
          setOperand(state => [...state,userInput,num])
          setDisplayIn(state=> {
            return state+num.toString();
          });
          setInput(state=>'');
        break;

      default: {
        if(result){
          setResult(state => '');
        }
        setInput(userInput + num.toString());
        setDisplayIn(displayIn + num.toString());
      }
    }
  };

  return (
    <div className="calculator">
      <Display result={result} displayIn={displayIn}/>
      <div className="buttons-display">
          <NumberButtons setUserInput={retrieveClickVal} />
          <Operations getOps={retrieveClickVal} />
      </div>
    </div>
  );
}


export {Calculator as default,testContext};
