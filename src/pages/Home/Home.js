import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import './Home.scss'

const Home =  () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="content">
                <Navbar/>
home
            </div>
        </div>
    )
}

export default Home;