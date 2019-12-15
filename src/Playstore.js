import React from 'react'

export default function Playstore(props) {
    console.log(props)
    return(
        <div className = 'playstore'>
            <h2>Results</h2>
            <div className = 'app_name'>App:{props.App}</div>
            <div className="app_category">Category: { props.Category }</div>
            <div className="app_rating">Rating:{ props.Rating }</div>
            <div className="app_reviews">Reviews:{props.Reviews}</div>
            <div className = 'app_size'>Size:{props.Size}</div>
            <div className="app_installs">Installs: { props.Installs }</div>
            <div className="app_type">Type:{ props.Type }</div>
            <div className="app_price">Price:{props.Price}</div>
            {/* <div className = 'app_content_rating'>Content rating:{props.ContentRating}</div> */}
            <div className="app_genres">Genres: { props.Genres }</div>
            {/* <div className="app_last_updated">Last updated:{ props.LastUpdated }</div>
            <div className="app_current_ver">Current Ver:{props.CurrentVer}</div>
            <div className="app_android_ver">android Ver:{props.AndroidVer}</div> */}
        </div>
    )
}