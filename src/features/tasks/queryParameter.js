import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    return params.get(key);
};

export const useReplaceQueryParameter = () => {
    const { pathname, search } = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const params = new URLSearchParams(search);

        if (value === undefined) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        history.push(`${pathname}?${params.toString()}`);
    };
};
