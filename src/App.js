// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SoundProvider from './sound/soundProvider';
// import SoundComp from './sound/soundComp';

import Login from './section1/login';
import Main from './section1/Main/main';
import NotFound from './section1/notFound';

// import Para from './section2/para';
import ImgShow from './section2/imgShow';
import SvgScene from './section1/Main/svgScene';
import SvgSunny from './section1/Main/svgSunny';
import SvgMain from './section1/Main/svgMain';

function App() {
    return (
        <div className="App">
            {/* <SoundProvider>
                <SoundComp></SoundComp> */}
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/main" element={<Main />}></Route>
                    <Route path="/s1" element={<ImgShow />}></Route>
                    <Route path="/svg1" element={<SvgScene />}></Route>
                    <Route path="/svg2" element={<SvgSunny />}></Route>
                    <Route path="/svg" element={<SvgMain />}></Route>

                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </Router>
            {/* </SoundProvider> */}
        </div>
    );
}

export default App;
