import './Rightpane.css'
import SettingsMenu from './SettingsMenu'

const Userdetails = () => {



    return (<div className="right-pane">
        <div className="user-details">
            <div className="username">Username</div>
            <div className="setting-button">
                <SettingsMenu />
            </div>
        </div>
        <div className="recently-played">
            <h2 id="heading_1">Recently Played</h2>
            <div className="recent-history container"></div>
        </div>
    </div>)
}

export default Userdetails;