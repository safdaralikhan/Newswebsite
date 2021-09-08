import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Ssp from './Ssp';
import propTypes, { string } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes
    }
    static defaultProps = {
        country: "US",
        pageSize: 8,
        category: "general",
        author: "12"
    }


    Capitalltr = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    constructor(props) {

        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0


        }

        document.title = `${this.Capitalltr(this.props.category)}-MonkeyNews`;

    }
    async UpdateNews() {
        this.props.setProgress(10);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults
            , loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {

        this.UpdateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&author=${this.props.author}&category=${this.props.category}&apiKey=72baee7d91a544e8836262973518048f&page=1&pageSize=${this.props.pageSize}`;

        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults
        //     , loading: false
        // })

    }


    HandPrevious = async () => {
        // console.log("prev")

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72baee7d91a544e8836262973518048f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data= await fetch(url);
        // let parseData= await  data.json();
        // console.log(parseData);
        // this.setState({

        //        page:this.state.page-1,
        //        articles:parseData.articles,
        //        loading:false
        // })

        this.setState({ page: this.state.page - 1 });
        this.UpdateNews();
    }

    HandNext = async () => {
        // console.log("next")
        // if(!(this.state.page+ 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))  {

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72baee7d91a544e8836262973518048f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true})
        //     let data= await fetch(url);
        //     let parseData= await  data.json();
        //     console.log(parseData);
        //     this.setState({
        //            page:this.state.page+1,
        //            articles:parseData.articles,
        //            loading:false
        //     })

        // }

        this.setState({ page: this.state.page + 1 });
        this.UpdateNews();
    }

    fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles:this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
           
        })


      
      };
    
    render() {

        return (

            <>
                <h1 className="text-center mt-2">WorldTopNews- {this.Capitalltr(this.props.category)}  Headlines</h1>
                {/* <spinner/> */}
                {this.state.loading && <Ssp/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Ssp/>}
                >

<div className="container">
                    
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 mt-3 " key={element.url}>
                                <NewsItems title={element.title ? element.title : ""} Description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
  
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary mx-4" onClick={this.HandPrevious}>&larr; Priveous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagSize))} type="button" className="btn btn-primary" onClick={this.HandNext}>Next &rarr;</button>
                </div> */}


            </>
        )
    }

}

export default News

