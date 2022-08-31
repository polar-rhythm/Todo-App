
import {useState} from 'react';

const Create = () => { 
    const [inputs, setInputs ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }


    return(
    <div className = "post">
        <h1>Create your Post</h1>
        <form className = "inn" onSubmit = {handleSubmit}>
            <label> Title
                <input type = "text" name = "title"  className = "title" id = "4" value = {inputs.title || ""} onChange = {handleChange}/>
            </label>
            <label> Article  
                <input type = "text" name = "article"  className = "art" id = "5"  value = {inputs.article || ""} onChange = {handleChange}/>
            </label>
            <label> Author
                <input type = "text" name = "author"  className = "naa" id = "6"  value = {inputs.author || ""} onChange = {handleChange}/>
            </label>
            <input type="submit" className = "enter" value = "submit" />
        </form>
    </div>
    ); 
}

export default Create;