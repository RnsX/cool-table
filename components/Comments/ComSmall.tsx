import React from 'react'

const ComSmall = ( props: { text:string }) => {

    return (
        <div className='comment-sub'>
            <div className='comment'>
                <div className='comment-controls'>
                    <p className='comment-text'>{props.text}</p>
                    <button className='btn-sm btn btn-outline-success'>Answer</button>
                </div>
                <p className='comment-meta'>Created by SampleUser on 2021-01-01</p>
            </div>
            
            <style jsx>
                {
                    `
                        .comment-controls {
                            position: relative;
                            display: flex;
                        }
                        .comment-controls > button {
                            margin-left: auto;
                        }
                        .comment-controls > button:hover {
                            background-color: green;
                        }
                        
                        .comment {
                            min-width: 200px;
                            padding: 0.7em;
                            margin: 0.2em;
                            border: 1px solid lightgray;
                            border-radius: 0.5em;
                            background-color: white;
                        }
                        .comment-sub : hover {
                            background: #a8e2a8;
                        }
                        .comment-text {
                            margin: 0.2em;
                        }
                        .comment-meta {
                            margin: 0.2em;
                            color: gray;
                            font-size: small;
                        }
                    `
                }
            </style>
        </div>
       
    )
}

export default ComSmall
