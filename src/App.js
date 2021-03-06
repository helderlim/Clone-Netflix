import './App.css';

import React, { useEffect, useState } from 'react';

import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import Tmdb from './tmdb';

export default () => {

    const [moveiList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async () => {
            //pegando a lista total 
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //pegando o filme em destaque 
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }
        loadAll();
    }, []);

    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false)
            }
        }   
        window.addEventListener('scroll', scrollListener);

        return () =>{
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className="page">
            <Header black={blackHeader}/>
            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }

        <section className="lists">
            {moveiList.map((item, key)=>(
                <MovieRow key={key} 
                title={item.title} 
                items={item.items}/>
            ))}
        </section>
        <footer>
            Feito com <span role="img" aria-label="coração">❤️</span> pelo Helder Lima<br /> 
            Direitos de Imagem para Netflix<br />
            Dados pegos do site Themoviedb.org
        </footer>

        {moveiList.length <= 0 &&  
        <div className="loading">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/948471635620655778/092A8E2EB6F19BEADC8D3570DD7DC8432D7B6EEF/" />
        </div>
}
        </div>
    )
}