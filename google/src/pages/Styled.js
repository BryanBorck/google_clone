import './Styled.css';
import Mic from '../images/microphone_google.png';
import { RiEditLine, RiSunLine, RiMoonClearLine, RiYoutubeFill, RiSteamFill, RiWhatsappFill, RiSnapchatFill, RiTwitterFill, RiFacebookCircleFill, RiMediumFill, RiNetflixFill, RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Styled() {

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
        <div className="AppStd">
        <div className="Top_appStd">  
            <button className="Change_themeStd" onClick={() => setColor('#212121', '#292929', '#4e4e4e', 'white')}>
                <RiMoonClearLine size="2.5vh" color="gray"/>
            </button>
            <button className="Change_themeStd" onClick={() => setColor('white', 'rgb(235, 235, 235, 0.7)', 'rgb(225, 225, 225, 1)', '#212121')}>
                <RiSunLine size="2.5vh" color="gray"/>
            </button>
        </div>
        <div className="WrapperStd"> 
            <div className="Google_title">
            <p>
                <span className="blueStd">G</span>
                <span className="redStd">o</span>
                <span className="yellowStd">o</span>
                <span className="blueStd">g</span>
                l
                <span className="redStd">e</span>
            </p>
            </div>
            <div className="Search_barStd">
                <RiSearchLine size="3vh" color="gray"/>
                <input className="Input_searchStd" placeholder="Search"></input>
                <img className="MicStd" src={Mic} alt='mic'></img>
            </div> 
            <div className="Icons_barStd">
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiYoutubeFill size="4.5vh" color="red"/>
                </div>
                <div className="Icon_textStd">Youtube</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiMediumFill size="4.5vh" color="black"/>
                </div>
                <div className="Icon_text">Medium</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiNetflixFill size="4.5vh" color="red"/>
                </div>
                <div className="Icon_textStd">Netflix</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiFacebookCircleFill size="4.5vh" color="blue"/>
                </div>
                <div className="Icon_textStd">Facebook</div>
            </div>
            </div> 
            <div className="Icons_barStd">
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiTwitterFill size="4.5vh" color="cyan"/>
                </div>
                <div className="Icon_textStd">Twitter</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiSnapchatFill size="4.5vh" color="yellow"/>
                </div>
                <div className="Icon_textStd">Snapchat</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiWhatsappFill size="4.5vh" color="green"/>
                </div>
                <div className="Icon_textStd">Whatsapp</div>
            </div>
            <div className="IconStd">
                <div className="Icon_roundStd">
                    <RiSteamFill size="4.5vh" color="blue"/>
                </div>
                <div className="Icon_textStd">Steam</div>
            </div>
            </div> 
        </div>
        <div className="Bottom_appStd">  
            <button className="Change_themeStd" onClick={() => history("/")}>
                <RiEditLine size="2.5vh" color="gray"/>
            </button>
        </div>
        </div>
    );
}

export default Styled;