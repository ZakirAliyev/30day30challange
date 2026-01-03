import './index.scss'
import Sidebar from "../../../components/UserComponents/Sidebar/index.jsx";
import MainLayout from "../../../components/UserComponents/MainLayout/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <Sidebar/>
            <MainLayout/>
        </section>
    );
}

export default HomePage;
