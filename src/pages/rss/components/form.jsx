import React, { useState, useEffect } from "react";

function Form(props) {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // check for valid input
        // prettier-ignore
        if (!inputValue.includes("https://www.patreon.com/rss/worldofio?auth=")) 
        {
            setErrorMessage("Provided input is not a patreon rss feed!");
            return;
        }

        props.setParentKey(inputValue);
    }

    //Allows parent component set error message
    useEffect(() => {
        setErrorMessage(props.parentError);
    }, [props.parentError]);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                RSS Key:
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </label>

            <button type="submit">Submit</button>
            {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        </form>
    );
}

export default Form;