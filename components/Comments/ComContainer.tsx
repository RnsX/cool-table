import React from 'react'
import ComSmall from './ComSmall'


const ComContainer = (props: { comments:string[] }) => {
    


    return (
        <div>
            <div className='comment-container'>
                {
                    props.comments.map((comment, idx) => (
                        <ComSmall key={idx} text={comment}/>
                    ))
                }
            </div>
            
            <style jsx>
                {`
                    .comment-container {
                        display: flex;
                        flex-direction: column;
                        margin: 0.2em;
                    }
                `}
            </style>
        </div>
    )
}

export default ComContainer
