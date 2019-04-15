import React from 'react'

export default function Foo({ onButtonClick }) {
    return (
        <div>
            <div>Foo</div>

            {/* https://reactjs.org/docs/handling-events.html */}
            <button onClick={onButtonClick}>Button</button>
        </div>

    )
}
