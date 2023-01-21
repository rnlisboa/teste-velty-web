import Header from "../../components/Header/Header";
import Filters from "../../components/Filter/Filter"
import SidebarContainer from "../../components/Sidebar/Sidebar";
import Balance from "../../components/Balance/Balance";

export default function Dashboard(){
    return(
        <>
        <Header/>
        <Filters/>
        <Balance/>
        <SidebarContainer/>
        <h1>Dashboard</h1>
        </>
    )
}