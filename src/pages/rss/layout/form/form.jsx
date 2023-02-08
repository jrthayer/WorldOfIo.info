import React, { useState, useEffect } from "react";

import styles from "./form.module.scss";

import Faq from "./components/faq";

function Form(props) {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // check for valid input
        // prettier-ignore
        if (!inputValue.includes("https://www.patreon.com/rss/worldofio?auth=")) 
        {
            setErrorMessage("Provided input is not a patreon rss feed!");
            return;
        }

        props.setParentKey(inputValue);
    };

    //Allows parent component set error message
    useEffect(() => {
        setErrorMessage(props.parentError);
    }, [props.parentError]);

    return (
        <>
            <div
                className={`bg-primary-light color-primary-dark ${styles.container}`}
            >
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(event) =>
                                setInputValue(event.target.value)
                            }
                            className={styles.keyInput}
                            placeholder="RSS Link"
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.localLabel}>
                            Save locally
                        </label>
                        <input
                            type="checkbox"
                            checked={props.saveState}
                            onChange={props.updateSaveState}
                        />
                    </div>

                    <button className={styles.submit} type="submit">
                        Submit
                    </button>

                    {errorMessage !== "" ? <div>{errorMessage}</div> : null}
                </form>
            </div>

            <Faq></Faq>
        </>
    );
}

export default Form;
