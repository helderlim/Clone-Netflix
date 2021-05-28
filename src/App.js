import './App.css';

import React, { useEffect, useState } from 'react';

import MovieRow from './components/MovieRow';
import Tmdb from './tmdb';

export default () => {

    const [moveiList, setMovieList] = useState([]);

    useEffect(()=>{
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        loadAll();
    }, []);

    return (
        <div className="page">
        <section className="listis">
            {moveiList.map((item, key)=>(
                <MovieRow key={key} 
                title={item.title} 
                items={item.items}/>
            ))}
        </section>
        </div>
    )
}