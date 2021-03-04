import { useEffect, useState } from 'react';
import { apiKey } from './keys';

const CONTEXT_KEY = "65f9bb06c12817427";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                });

        };

        fetchData();
    }, [term]);

    return { data };
};
export default useGoogleSearch;