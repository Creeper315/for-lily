import useSound from 'use-sound';
import sound from '../sound/etude.mp3';

import { useContext } from 'react';
import { SoundContext } from '../sound/soundProvider_unused';
import { Link } from 'react-router-dom';

const Main = () => {
    const [playLocal] = useSound(sound);
    const { playMusic, setplayMusic } = useContext(SoundContext);
    return (
        <div>
            <button onClick={() => setplayMusic(true)}>global play</button>
            <button onClick={playLocal}>local play</button>
            <a href="/">ooo</a>
            <br />
            <Link to={'/'}>link</Link>
        </div>
    );
};

export default Main;
