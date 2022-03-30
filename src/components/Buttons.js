

function Button({buttonDisplay,setUserInput}){
    
    
    const buttonResponse = (event) => {
        setUserInput(buttonDisplay);
        event.target.classList.toggle('button-toggle')

        setTimeout(()=> {
            event.target.classList.toggle("button-toggle");
        },200)
    }


    return(
        <button onClick={buttonResponse}>{buttonDisplay}</button>
    )
}


export {Button as default};


