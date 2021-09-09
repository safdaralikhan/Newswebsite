import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Ssp from './Ssp'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    const Capitalltr = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const UpdateNews = async () => {
        console.log("Porps------->", props)

        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

        setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setarticles(parseData.articles)
        settotalResults(parseData.settotalResults)
        setloading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        UpdateNews();

    }, [])




    //  const HandPrevious = async () => {

    //         setpage(page+1)
    //         UpdateNews()
    //     }

    //    const HandNext = async () => {

    //         setpage(page-1)
    //         UpdateNews() 
    //     }

    const fetchMoreData = async () => {
        console.log("fetchmore", props)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setarticles(articles.concat(parseData.articles))
        settotalResults(parseData.totalResults)



    };

    return (

        <>
            <h1 className="text-center mt-2">WorldTopNews- {Capitalltr(props.category)}  Headlines</h1>

            {loading && <Ssp />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Ssp />}
            >

                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 mt-3 " key={element.url}>
                                <NewsItems title={element.title ? element.title : ""} Description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

        </>
    )


}

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes
}
News.defaultProps = {
    country: "US",
    pageSize: 8,
    category: "general",
    author: "12"
}


export default News

