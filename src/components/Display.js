function Display({result,displayIn}){
    return (
      <div className="display">
        <div className="computation">
          <span>{displayIn}</span>
          <br />
          {result ? <h4>{result}</h4> : null}
        </div>
        <div className="render-input">
          <p>Ans: </p>
        </div>
      </div>
    );
}


export default Display