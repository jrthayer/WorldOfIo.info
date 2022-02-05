// This hook checks if a value is null
//-------------------------------------
//Returns: first argument if not null, otherwise returns the second argument

import { useMemo } from "react";

export default function useCheckNull(checkedValue, otherValue = "") {
    const value = useMemo(() => {
        if (checkedValue != null) {
            return checkedValue;
        } else {
            return otherValue;
        }
    }, [checkedValue]);

    return value;
}
