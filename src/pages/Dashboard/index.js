import Header from "../../components/Header/Header";
import Filters from "../../components/Filter/Filter"
import SidebarContainer from "../../components/Sidebar/Sidebar";
import Balance from "../../components/Balance/Balance";
import StatisticClients from "../../components/StatistcClients/StatisticClients";
import Footer from "../../components/footer/Footer";
import SmallBalance from "../../components/SmallBalance/SmallBalance";


export default function Dashboard(){
    return(
        <>
        <Header/>
        <Filters/>
        <Balance/>
        <StatisticClients/>
        <SmallBalance/>
        <Footer/>
        <SidebarContainer/>
        </>
    )
}