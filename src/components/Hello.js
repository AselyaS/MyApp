import React from 'react'

const Hello = () => {
    // return (
    //     <div className='funnyClass'>
    //     <h1>Hello my friend</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'funnyClass'}, 
        React.createElement('h1', null, 'Hello friend')
        )
}

export default Hello