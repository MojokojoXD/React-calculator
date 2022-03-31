function Display({userInput,result,displayIn}){
    return (
      <div className="display">
        <div className="computation">
          <span>{displayIn}</span>
          {/* <span className="operands">{operands[0]}</span>
          <span className="operands">{sign}</span>
          <span className="operands">{operands[1]}</span> */}
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