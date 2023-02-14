import { useState, useEffect } from "react";
import { NewItem } from "./NewItem";

// https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100
export const NewsList = () => {

    const [newsId, setNewsId] = useState([])

    const URL = 'https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=10'

    const loadData = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => {
                // console.log(...json)
                setNewsId(json)
            });
    } 

    useEffect( () => {
        setInterval(() => {
            loadData()
        }, 60000)
        loadData()
        // fetch(URL)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(...json)
        //         setNewsId(json)
        //     });
    }, [])
 console.log(newsId)
//  newsId.map(item => console.log(item))
    return(
        <>
        {newsId.map(item => <NewItem  id={item}/>)}
        </>
        // <h1>Page List</h1>
    )
}