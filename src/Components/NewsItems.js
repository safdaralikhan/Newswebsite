import React from 'react'


const NewsItems =(props)=> {

   
        let { title, Description, imageUrl, newsUrl, author, date } =props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-85791254,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-52840/85791254.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{author}</h5> */}
                        <h6 className="card-title">{title} <span className="badge bg-success">Latest Update</span></h6>


                        <p className="card-text">{Description}</p>
                        {/* <h5 className="card-title">{publishedAt}</h5> */}
                        <p className="card-text"><small className="text-danger">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItems