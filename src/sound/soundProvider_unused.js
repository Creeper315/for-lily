// import useSound from 'use-sound';
// import sound from './etude.mp3';
import { createContext, useState } from 'react';

export const SoundContext = createContext();

const SoundProvider = (props) => {
    // const [playMusic] = useSound(sound);
    const [playMusic, setplayMusic] = useState(false);

    return (
        <SoundContext.Provider value={{ playMusic, setplayMusic }}>
            {props.children}
        </SoundContext.Provider>
    );
};

export default SoundProvider;
