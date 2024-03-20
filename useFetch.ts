import { useCallback, useEffect, useState } from "react";

export const useFetch = <T extends object>(url: string) => {
    const [state, setState] = useState<{
        data?: T,
        isLoading: boolean,
        hasError: { [key: string]: string },
    }>({
        data: undefined,
        isLoading: true,
        hasError: {},
    });

    const getFetch = useCallback(
        async () => {
            setState(currentState => ({...currentState, isLoading: true}));

            const response = await fetch(url);
            const data = await response.json();

            setState({ data, isLoading: false, hasError: {} });
        },
      [url],
    );

    useEffect(() => {
        getFetch();
    }, [getFetch])

    return ({ ...state });
}
