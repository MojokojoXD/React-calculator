// @ts-nocheck
import NumberButtons from "./NumberButtons";
import Operations from "./Operations";
import { useState } from "react";
import Display from './Display'

function Calculator() {
  const [userInput, setInput] = useState("");
  const [operands, setOperand] = useState([]);
  const [sign, setSign] = useState("");
  const [result,setResult] = useState('');

  const retrieveClickVal = (num) => {
    let temp;
  
    const tempArr = [];

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
        break;

      case num === "=":

        setOperand(state => {
          return [...state,userInput]
        });
        setResult(operations[sign](operands[0],userInput))
        setInput('');
        break;

      case num === "*" || num === "-" || num === "+" || num === "/":
          setSign(num);
          tempArr.push(userInput)
          setOperand([...tempArr])
          setInput('');
        break;

      default: {
        temp = userInput + num.toString();
        setInput(temp);
      }
    }

    console.log(operands);
  };

  return (
    <div className="calculator">
      <Display sign={sign} userInput={userInput} result={result} operands={operands}/>
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
