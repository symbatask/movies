import React from 'react';

const Trailer = ({movie}) => {
    return (
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default Trailer;