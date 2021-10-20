import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {

    // articles = [
    //     {
    //         "source": {
    //             "id": "news24",
    //             "name": "News24"
    //         },
    //         "author": "Khanyiso Tshwaku",
    //         "title": "KZN Cricket boss admits Aya Myoli treated unfairly in Robbie Frylinck assault case",
    //         "description": "KwaZulu-Natal Cricket chief executive officer Heinrich Strydom admitted that Robert Frylinck's case when he assaulted teammate Ayavuya Myoli wasn't handled well.",
    //         "url": "https://www.news24.com/sport/Cricket/kzn-cricket-boss-admits-aya-myoli-treated-unfairly-in-robbie-frylinck-assault-case-20211018",
    //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/11388/36983df1a05a47918334908ecc6baebb.jpg",
    //         "publishedAt": "2021-10-18T17:19:58+00:00",
    //         "content": "<ul><li>KZN Cricket CEO Heinrich Strydom admitted that Ayavuya Myoli's case when he was assaulted by then-teammate Robert Frylinck should have been handled better.</li><li>Strydom revealed that Fryli… [+2914 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
   
 
 
    constructor() {
        super()
        //    console.log("This is news");
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }

    }
    async componentDidMount(){

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f0a8e883eafe4216870c83ab2ebbf29d&page=1`;
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState(
            {
                articles: parseData.articles,
                page: 1
            }
        )                    
    }

    handlePrev = async () =>{
        console.log("pre");

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f0a8e883eafe4216870c83ab2ebbf29d&page=${this.state.page-1}&{this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState(
            {
                articles: parseData.articles,
                page: this.state.page - 1,
                totalResults: this.state.totalResults
            }
        )

     }
 
      handleNext = async () =>{
          console.log("next");

          if (this.state.page+1 > Math.ceil( this.state.totalResults/this.props.pageSize)){
                
          }

          let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f0a8e883eafe4216870c83ab2ebbf29d&page=${this.state.page+1}&{this.props.pageSize}`;
          let data = await fetch(url);
          let parseData = await data.json();
          // console.log(parseData);
          this.setState(
              {
                  articles: parseData.articles,
                  page: this.state.page  + 1,
                  totalResults: this.state.totalResults
              }
          )
     }
   
   
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 className="mb-4 text-center bolder" style={{color:"black"}}>Top Heading of {this.props.category}</h2>
                    <div className="row">

                        {this.state.articles.map( (element) =>{

                           return <div className="col-4 col-md-4 col-12 my-4" key={element.url}>
                                <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://static.toiimg.com/thumb/msid-87121415,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-51210/87121415.jpg"}
                                url={element.url}
                                date={element.publishedAt}
                                author = {element.author}
                                source={element.source.name}/>
                            </div>
                        }
                        )}
                    </div>

                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                    <button type="button"  className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>



            </>
        )
    }
}
