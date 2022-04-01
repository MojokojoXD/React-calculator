import Buttons from './Buttons'

const numbers = [1,2,3,4,5,6,7,8,9,0,'.']

const generateButtons = (setUserInput) => {
    const arr = numbers.map(num => {
        return <Buttons buttonDisplay={num}key={num+'key'} setUserInput ={setUserInput}/>
    })

    return arr;
}


function Numberbuttons(props){

    function _setUserInput(value){
        props.setUserInput(value);
    }

    return (
        <div className='number-buttons'>
            {generateButtons(_setUserInput)}
        </div>
    )
}

export {Numberbuttons as default};