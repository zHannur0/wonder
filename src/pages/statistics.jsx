import Layout from "../components/layout.jsx";
import ProfitChart from "../components/ProfitChart.jsx";
import OrderStatistics from "../components/OrderStatistics.jsx";
import CityChart from "../components/CityChart.jsx";
import StockBar from "../components/StockBar.jsx";
import ProductChart from "../components/ProductChart.jsx";

export default function Statistics() {
    return (
        <Layout>
            <div className={`space-y-[20px] py-[10px] px-[20px]`}>
                <ProfitChart/>
                <div className={"flex gap-[20px]"}>
                    <OrderStatistics/>
                    <CityChart/>
                </div>
                <div className={"flex gap-[20px]"}>
                    <StockBar/>
                    <ProductChart/>
                </div>
            </div>
        </Layout>
    )
}
