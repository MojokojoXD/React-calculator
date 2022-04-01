function Display({result,displayIn,refs}){
    return (
      <div className="display">
        <div className="computation">
          <span>{displayIn}</span>
          <br />
          <h4>{result}</h4>
        </div>
        <div className="render-input">
          <p>Ref: {refs}</p>
        </div>
      </div>
    );
}


export default Display