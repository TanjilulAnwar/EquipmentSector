import React from 'react'
//Memo is like PureComponent for functional Component
function MemoComp({name}) {
    console.log('rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
