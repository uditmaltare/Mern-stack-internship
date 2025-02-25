import Companyname from "./Companyname";


export default function Header() {
    return (
        <>
            <div className="flex text-white  justify-between items-center bg-gray-800 p-4">
                <Companyname />
                <nav className="flex justify-evenly items-center space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-500">Home</a>
                    <a href="#" className="text-blue-400 hover:text-blue-500">About</a>
                    <a href="#" className="text-blue-400 hover:text-blue-500">Service</a>
                    <a href="#" className="text-blue-400 hover:text-blue-500">Contact</a>
                </nav>
            </div>
        </>
    )
}
