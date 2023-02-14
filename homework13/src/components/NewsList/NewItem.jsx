import { useState, useEffect } from "react"
import styled from "styled-components"

function getDate (date) {
    return date.getHours() + ":"  
    + date.getMinutes() + '\t'
    + date.getDate() + "/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() ;
}

const Title = styled.h3`
    font-size: 20px;
`
const Author = styled.div` 
    margin-right: 20px;
`
const Rating = styled.div``
const NewsDate = styled.div`
    margin-right: 20px;
`
const Details = styled.div`
    display: flex;
    font-size: 10px;
`


export const NewItem = (id) => {
    // const [newId, setId] = useState([])
    // setId(id.id)
    const [story, setStory] = useState([])
    // console.log(id)
    const url = `https://hacker-news.firebaseio.com/v0/item/${id.id}.json?print=pretty`
    useEffect( () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                setStory(json)
            });
    }, [])

    const { title, by, time, score } = story


    let date = new Date(time);
    // incorrect data
    // console.log(date)


    return (
        <>
            <Title id={id.id}>{title}</Title>
            <Details>
                <Author>{by}</Author>
                <NewsDate>{getDate(date)}</NewsDate>
                <Rating>rating : {score}</Rating>
            </Details>
        </>
    )
}