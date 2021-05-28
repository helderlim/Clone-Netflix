import React, { useEffect, useState } from 'react';

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
        <div>
            Ola mundo
        </div>
    )
}