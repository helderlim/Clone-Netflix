import './App.css';

import React, { useEffect, useState } from 'react';

import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import Tmdb from './tmdb';

export default () => {

    const [moveiList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(()=>{
        const loadAll = async () => {
            //pegando a lista total 
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //pegando o filme em destaque 
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen];
            
        }
        loadAll();
    }, []);

    return (
        <div className="page">

            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }

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