import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function Layout({ children }) {
    return (
        <div>
            <div className={"flex"}>
                <Sidebar />
                <div className={`w-full`}>
                    <Header />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}

