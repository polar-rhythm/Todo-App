

const Apply = ({create,handleDelete}) => {

    return(
    <div className="vvlog">
            {create.map((input) =>(
                <div className="post-summary" key={input.id}>
                    <h2>{input.title || ''}</h2>
                        <p> written by {input.author || ''} </p>
                        <p>{input.author|| ''} says {input.article|| ''}</p>
                        <button onClick = {() => handleDelete(input.id)}> Delete post </button>
                </div>
            ))}
    </div>); 
}

export default Apply;