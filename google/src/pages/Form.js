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
                <form classname="MyForm" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder='escreva seu nome'
                        value={name}
                        classname="MyInput"
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                    <button type="submit" classname="MyButton"></button>
                </form>
            </div>
        </div>
    );
}

export default Form;