// @ts-nocheck
import NumberButtons from "./NumberButtons";
import Operations from "./Operations";
import { useState, createContext} from "react";
import Display from './Display'

const contextToButtons = createContext();

function Calculator() {
  const [userInput, setInput] = useState("");
  const [displayIn, setDisplayIn] = useState('');
  const [operands, setOperand] = useState([]);
  const [refs, setRef] = useState('');
  const [result,setResult] = useState('');



  const retrieveClickVal = (num) => {  
    switch (true) {
      case num === "Ref":
        setOperand([...operands,refs])
        setDisplayIn(displayIn + num)
        break;
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
        setRef('');
        setResult('');
        setDisplayIn('');
        break;

      case num === "=":
        setOperand(state => {
          return [...state,userInput]
        });
        try{
          setResult([...result,eval([...operands,userInput].join(''))])
          setRef([...result, eval([...operands, userInput].join(""))]);
        }catch(err){
          setResult('Syntax error');
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
          setResult('')
        }
        setInput(userInput + num.toString());
        setDisplayIn(displayIn + num.toString());
      }
    }
  };

  return (
    <contextToButtons.Provider value={retrieveClickVal}>
    <div className="calculator">
      <Display result={result} displayIn={displayIn} refs={refs}/>
      <div className="buttons-display">
          <NumberButtons/>
          <Operations/>
      </div>
    </div>
    </contextToButtons.Provider>
  );
}


export {Calculator as default,contextToButtons};
