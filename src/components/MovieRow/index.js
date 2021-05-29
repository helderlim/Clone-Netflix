import './MovieRow.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';

const  MovieRow = ({title, items}) =>{
    return(
        <div className="movieRow">
            <div className="movieRow--left">
                <ArrowBackIosIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right">
                <ArrowForwardIosIcon style={{fontSize: 50}}/>
            </div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default MovieRow;