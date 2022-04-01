// @ts-nocheck
import Buttons from './Buttons'

const numbers = [1,2,3,4,5,6,7,8,9,0,'.']

const generateButtons = () => {
    const arr = numbers.map(num => {
        return <Buttons buttonDisplay={num}key={num+'key'} />
    })

    return arr;
}


function Numberbuttons(props){
    return (
        <div className='number-buttons'>
            {generateButtons()}
        </div>
    )
}

export {Numberbuttons as default};