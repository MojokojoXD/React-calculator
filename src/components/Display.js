function Display({userInput,result,sign,operands}){
    return (
      <div className="display">
        <div className="computation">
          <span className="operands">{operands[0]}</span>
          <span className="operands">{sign}</span>
          <span className="operands">{operands[1]}</span>
          <br />
          {result ? <h4>{result}</h4> : null}
        </div>
        <div className="render-input">
          <h4>{userInput}</h4>
        </div>
      </div>
    );
}


export default Display