import React from 'react';
import chooLogo from './images/Logo1024.jpg';
import searchResults from './images/screenshots/SearchResults.png';
import follow from './images/screenshots/Follow.png';
import journeyDetails from './images/screenshots/JourneyDetails.png';
import journeyMapDetails from './images/screenshots/JourneyMapDetails.png';
import pickOnMap from './images/screenshots/PickOnMap.png';
import stopDepartures from './images/screenshots/StopDepartures.png';
import './App.css';
import {CSSProperties} from "react/index";

function App() {
    const linkStyle = {
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const logoStyle = {
        margin: 5,
        width : 100,
        height : 100,
        borderRadius: 10
    }
    const titleStyle = {
        color: "#111",
        fontWeight: "bold",
        fontSize: 32,
    }
    const subtitleStyle = {
        color: "#666",
        fontWeight: "bold",
        fontSize: 14,
    }
    const betaBadge = {
        background: "#fc0",
        fontWeight: "bold",
        fontSize: 12,
        padding : "3px 5px 3px 5px",
        borderRadius: 8,
        margin: 3,
    }
    return (
    <div className="App" style={{margin:10}} >
      <header className="ChooChooApp">
          <img src={chooLogo} className="App-logo" style={logoStyle}/>
          <div style={{
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
          }}>
              <div style={titleStyle as CSSProperties}>
                  ChooChooApp
              </div>
              <div style={betaBadge as CSSProperties}>
                  beta
              </div>
          </div>
          <div style={subtitleStyle as CSSProperties}>
              Simple and fast journey planner
          </div>
        <div
            onClick = { () => {
              window.open('https://testflight.apple.com/join/0xkik93p','mywindow');
            }}
            style={linkStyle as CSSProperties}
        >
            <div style={{
                background : "#2561A2",
                color: "#FFF",
                fontWeight: 600,
                padding : 5,
                margin: 15,
                borderRadius: 10
            }} >
                Try with TestFlight
            </div>
        </div>
        <img src={searchResults} className="App-logo" alt="logo"/>
        <img src={follow} className="App-logo" alt="logo" />
        <img src={journeyDetails} className="App-logo" alt="logo" />
        <img src={pickOnMap} className="App-logo" alt="logo" />
        <img src={journeyMapDetails} className="App-logo" alt="logo" />
        <img src={stopDepartures} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}

export default App;
