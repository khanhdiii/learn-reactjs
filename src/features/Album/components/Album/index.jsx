import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className='album__thumnail'>
                <img src={album.thumnailURL} alt={album.name}/>
            </div>
            <p className='album__name'>{album.name}</p>
        </div>
    );
}

export default Album;