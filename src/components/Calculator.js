// @ts-nocheck
import NumberButtons from "./NumberButtons";
import Operations from "./Operations";
import { useState } from "react";
import Display from './Display'

function Calculator() {
  const [userInput, setInput] = useState("");
  const [displayIn, setDisplayIn] = useState('');
  const [operands, setOperand] = useState([]);
  const [sign, setSign] = useState("");
  const [result,setResult] = useState('');

  const retrieveClickVal = (num) => {

    let temp = displayIn + num.toString();
    let temp_ = userInput + num.toString();
  
    let tempArr = [...operands];

    switch (true) {
      case num === "DEL":
        temp = userInput.slice(0, userInput.length - 1);
        setInput(temp);
        break;

      case num === "RESET":
        setInput("");
        setOperand("");
        setSign("");
        setResult('');
        setDisplayIn('')
        break;

      case num === "=":
        setOperand(state => {
          return [...state,userInput]
        });
        
        setResult(operations[sign](operands[0],userInput))
        setInput('');
        setOperand([])
        setDisplayIn('')
        break;

      case num === "*" || num === "-" || num === "+" || num === "/":
          setSign(state=> num);
          tempArr.push(userInput)
          setOperand(state => [...state,...tempArr])
        
          setDisplayIn(state=>temp_);
          setInput(state=>'');
          console.log(operands)
        break;

      default: {
        if(result){
          setResult(state => '');
        }
        setInput(state=> temp_);
        setDisplayIn(state=> temp)
      }
    }
  };

  return (
    <div className="calculator">
      <Display userInput={userInput} result={result} displayIn={displayIn}/>
      <div className="buttons-display">
          <NumberButtons setUserInput={retrieveClickVal} />
          <Operations getOps={retrieveClickVal} />
      </div>
    </div>
  );
}

const operations = {
  '+': function(num1, num2){return parseFloat(num1) + parseFloat(num2)},
  '-': function(num1, num2){return parseFloat(num1) - parseFloat(num2)},
  '*': function(num1,num2){return parseFloat(num1) * parseFloat(num2)},
  '/': function(num1,num2){return parseFloat(num1) / parseFloat(num2);}
}

export default Calculator;
