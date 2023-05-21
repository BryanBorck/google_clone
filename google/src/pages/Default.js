import './Default.css';
import Mic from '../images/microphone_google.png';
import { RiEditLine, RiSunLine, RiMoonClearLine, RiYoutubeFill, RiSteamFill, RiWhatsappFill, RiSnapchatFill, RiTwitterFill, RiFacebookCircleFill, RiMediumFill, RiNetflixFill, RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Default() {

    const history = useNavigate();

    // useEffect(() => {
    //   const color = getComputedStyle(document.documentElement).getPropertyValue('--color-bkg');
    //   console.log(color);
    // }, []);

    function setColor (newColorBkg, newColorFake, newColorDeep, newColorFont){
        document.documentElement.style.setProperty('--color-bkg', newColorBkg);
        document.documentElement.style.setProperty('--fake-color', newColorFake);
        document.documentElement.style.setProperty('--deep-color', newColorDeep);
        document.documentElement.style.setProperty('--font-color', newColorFont);
    }

    return (
        <div className="App">
        <div className="Top_app">  
            <button className="Change_theme" onClick={() => setColor('#212121', '#292929', '#4e4e4e', 'white')}>
            <RiMoonClearLine size="2.5vh" color="gray"/>
            </button>
            <button className="Change_theme" onClick={() => setColor('white', 'rgb(235, 235, 235, 0.7)', 'rgb(225, 225, 225, 1)', '#212121')}>
            <RiSunLine size="2.5vh" color="gray"/>
            </button>
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
                <RiSearchLine size="3vh" color="gray"/>
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
                <RiMediumFill size="4.5vh" color="black" onClick={() => history("/form")}/>
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
            <button className="Change_theme" onClick={() => history("/styled")}>
            <RiEditLine size="2.5vh" color="gray"/>
            </button>
        </div>
        </div>
    );
}

export default Default;