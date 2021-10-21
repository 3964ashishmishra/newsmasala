import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {

        let { title, description, imageUrl, url, date, author,source } = this.props;

        return (
            <>

                <div className="card" style={{ width: "" }}>
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger " style={{margin:' -10px -37px'}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>

                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}......</h5>
                        <p className="card-text">{description}......</p>
                        <p className="card-text"  style={{color:"#05074c"}}><small className="text-bold">By <span className="text-bold" style={{color:'green'}}>{source}</span> on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>




            </>
        )
    }
}
