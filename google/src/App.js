import './App.css';
import Mic from './images/microphone_google.png';
import { RiYoutubeFill, RiSteamFill, RiWhatsappFill, RiSnapchatFill, RiTwitterFill, RiFacebookCircleFill, RiMediumFill, RiNetflixFill, RiSearchLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <div className="Top_app">  
      </div>
      <div className="Wrapper"> 
        <div className="Google_title">
          <p>
            <span className="blue">G</span>
            <span className="red">o</span>
            <span className="yellow">o</span>
            <span className="blue">g</span>
            l
            <span className="red">e</span>
          </p>
        </div>
        <div className="Search_bar">
          <RiSearchLine size="24px" color="gray"/>
          <input className="Input_search"></input>
          <img className="Mic" src={Mic} alt='mic'></img>
        </div> 
        <div className="Icons_bar">
          <div className="Icon">
            <div className="Icon_round">
              <RiYoutubeFill size="4.5vh" color="red"/>
            </div>
            <div className="Icon_text">Youtube</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiMediumFill size="4.5vh" color="black"/>
            </div>
            <div className="Icon_text">Medium</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiNetflixFill size="4.5vh" color="red"/>
            </div>
            <div className="Icon_text">Netflix</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiFacebookCircleFill size="4.5vh" color="blue"/>
            </div>
            <div className="Icon_text">Facebook</div>
          </div>
        </div> 
        <div className="Icons_bar">
        <div className="Icon">
            <div className="Icon_round">
              <RiTwitterFill size="4.5vh" color="cyan"/>
            </div>
            <div className="Icon_text">Twitter</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiSnapchatFill size="4.5vh" color="yellow"/>
            </div>
            <div className="Icon_text">Snapchat</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiWhatsappFill size="4.5vh" color="green"/>
            </div>
            <div className="Icon_text">Whatsapp</div>
          </div>
          <div className="Icon">
            <div className="Icon_round">
              <RiSteamFill size="4.5vh" color="blue"/>
            </div>
            <div className="Icon_text">Steam</div>
          </div>
        </div> 
      </div>
      <div className="Bottom_app">  
      </div>
    </div>
  );
}

export default App;
