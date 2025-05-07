const { useEffect } = require("react");

function useFetch(url) {
    useEffect({try {
        const res = fetch(url);
    } catch {

    }, []})
    
    const responseJson = JSON.stringify(res);

    return { responseJson, isLoading, error };
}