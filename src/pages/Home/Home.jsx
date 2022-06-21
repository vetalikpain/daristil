import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Link, Outlet} from "react-router-dom";
const Home = () => {
    return (
        <div style={{minHeight: '100%',display:'flex', flexDirection:'column'}}>
            <Header/>
            <Outlet style={{flex:'1 1 auto'}}></Outlet>
            <Footer/>
        </div>
    )
}
export default Home