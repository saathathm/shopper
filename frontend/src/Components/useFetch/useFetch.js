import axios from "axios";
import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        };
        fetchData(); // Call the async function inside useEffect
    }, [url]);

    return { data, loading, error }

}

export default useFetch;