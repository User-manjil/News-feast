import React, { Component } from "react";
import NewsItem from "./Pages/NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:"us",
    pageSize:9,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aabe4859ed6d4784bb6341c0bebd21fc&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true
      })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles ,
      loading:false,
       totalResults:parsedData.totalResults
      });
  }
  handleOnNext = async () => {
    if(this.state.page+1> Math.ceil(this.state.totalResults/12)){}
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aabe4859ed6d4784bb6341c0bebd21fc&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize} `;
        this.setState({loading:true})
        let data = await fetch(url);
     
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
        this.setState({
          page: this.state.page + 1,
          loading:false,
          articles: parsedData.articles,
        });
    }
   
  };
  handleOnPrev = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aabe4859ed6d4784bb6341c0bebd21fc&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({});
    this.setState({
      page: this.state.page - 1,
      loading:false,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 key="headline" className="text-center"> Top Headlines - Feast</h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  author={element.author}
                  date={element.publishedAt}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handleOnPrev}
          >
            &larr; Previous{" "}
          </button>
          <button
            type="button"
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)}
            className="btn btn-dark"
            onClick={this.handleOnNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
