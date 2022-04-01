function Display({result,displayIn,refs}){
    return (
      <div className="display">
        <div className="computation">
          <span className="display-nums">{displayIn}</span>
          <br />
          <h4 className="display-nums">{result}</h4>
        </div>
        <div className="render-input">
          <p className="display-nums">Ref: {refs}</p>
        </div>
      </div>
    );
}


export default Display