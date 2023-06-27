import { useState } from "react";

function AddForm({placeholderText, onAdd}) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(value);
            onAdd(value);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={placeholderText} onChange={handleInputChange} />
                <br />
                <button disabled={ value.length === 0 || status === 'submitting' }>Add</button>
                {error !== null && 
                    <p>{error.message}</p>
                }
            </form>
        </>
    );
}

function submitForm(value) {
    console.log(value);
    return new Promise((resolve, reject) => {
        resolve();
    })
}

export default AddForm;