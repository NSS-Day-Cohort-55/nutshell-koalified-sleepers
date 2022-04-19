import "./Home.css"
import { getAllArticles } from "../../modules/ArticleManager"
import { getAllEvents } from "../../modules/EventManager"
import { useState, useEffect } from "react"
import { HomeArticleCard } from "./HomeArticleCard"
import { HomeEventCard } from "./HomeEventCard"


export const Home = () => {
    const [articles, setArticles] = useState([])
    const [events, setEvents] = useState([])

    const getArticles = ()=> {
        getAllArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
        })
    }


    const getEvents = ()=> {
        getAllEvents().then((eventsFromApi) => {
            setEvents(eventsFromApi)
        })
    }

    useEffect(()=> {
        getArticles()
    }, [])

    useEffect(()=> {
        getEvents()
    }, [])

    

    return (
        <>
        <div className="welcomeMessage">Welcome to Nutshell</div>
        <div className="homeLists">
            <section className="articles">
                <h4>Articles</h4>
                {articles.map((article) => (<HomeArticleCard 
                            key={article.id}
                            singleArticle ={article}/>))} </section>
            <section className="events"> 
                <h4>Events</h4>
                {events.map((event) => (<HomeEventCard
                            key={event.id}
                        singleEvent={event} />))} </section>
        </div>
        

        </>
    )
}