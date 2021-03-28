import { useState } from "react"


export function AddCommentForm({articleName, setArticleInfo}) {

    const [userName, setUserName] = useState('');
    const [commentText, setCommentText] = useState('');


    const addComment = async () => {
        console.log(articleName.articleName)
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({user: userName, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        const body = await result.json();
        setArticleInfo(body);
        clear()
    }

    const clear = () => {
        setUserName('')
        setCommentText('')
    }
    
    //(event) => setUserName(event.target.value)
    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label htmlFor="">
                Name:
                <input type="text"  value={userName} onChange={e => setUserName(e.target.value)}/>
            </label>
            <label htmlFor="">
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={e => setCommentText(e.target.value)}/>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}