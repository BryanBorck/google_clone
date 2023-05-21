import './Form.css';
import { useState } from "react";

function Form() {

    const [name, setName] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted ✅');
        alert(`The name you entered was: ${name}`)
    };

    return (
        <div className="FormApp">
            <div className="WrapperForm">
                <form className="MyForm" onSubmit={handleSubmit}>
                    <p>My Form</p>
                    <input 
                        type="text"
                        placeholder='escreva seu nome'
                        value={name}
                        className="MyInput"
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                    <button type="submit" className="MyButton">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;