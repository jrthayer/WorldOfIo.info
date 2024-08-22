import React, { useState } from "react";

function Question({ data }) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div onClick={handleToggle}>{data.question}</div>
            {open ? <div>{data.answer}</div> : null}
        </div>
    );
}

Question.defaultProps = {
    data: {
        question: "insert question here?",
        answer: "yes here!!",
    },
};

export default Question;
