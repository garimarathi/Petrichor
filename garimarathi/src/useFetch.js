import { useState, useEffect } from "react";


const useFetch = (url) =>{
    const [blog,setBlog] = useState([]);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleMark = (id) =>{

        const bookmarked = data.filter(blog => blog.id !== id);
        setData(bookmarked);

    }

    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok)
                {
                    throw Error('Unable to load');
                }
                return res.json();
            })

            .then(data=> {
                setData(data);
                setBlog(blog);
                setIsPending(false);
                setError(null);
            })

            .catch(err=> {
                setError(err.message);
                setIsPending(false);                
            })
    });
    },[url]);

    return {data, blog, isPending,error,handleMark}
}

export default useFetch;