import useSound from 'use-sound';
import sound from './etude.mp3';
import { useContext } from 'react';
import { SoundContext } from '../sound/soundProvider';

const SoundComp = () => {
    const [play] = useSound(sound);
    const { playMusic } = useContext(SoundContext);

    if (playMusic == true) {
        play();
    }
    console.log('p m ', playMusic);
    return <div>sss</div>;
};

export default SoundComp;
