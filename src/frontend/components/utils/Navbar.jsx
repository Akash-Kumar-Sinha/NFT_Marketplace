import { Link } from "react-router-dom";

const Navbar = ({ web3Handler, account }) => {
    return (
        <header className="bg-gradient-to-b from-purple-900 to-purple-600">
            <div className="container mx-auto px-4 py-1">
                <h1 className="text-4xl font-bold text-white mb-8">NFT Marketplace</h1>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <p className="text-lg text-white">
                            {account ? (
                                <a
                                    href={`https://etherscan.io/address/${account}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {`${account.slice(0, 5)}...${account.slice(38, 42)}`}
                                </a>
                            ) : (
                                <button onClick={web3Handler}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:border-blue-700 transition duration-300 ease-in-out"                                >Connect Wallet</button>
                            )}
                        </p>
                    </div>
                    <nav className="bg-gradient-to-r from-purple-600 to-purple-900 text-white py-4 px-8 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a8 8 0 0 1 5.657 13.657l-5.657 5.657-5.657-5.657A8 8 0 0 1 10 2zm-1.414 1.414A6 6 0 1 0 16.243 12l-5.657 5.657-5.657-5.657A6 6 0 0 0 8.243 3.414z" clipRule="evenodd" />
                        </svg>
                        <div className="space-x-4">
                            <Link to="/" className="hover:text-gray-300">Home</Link>
                            <Link to="/create" className="hover:text-gray-300">Create</Link>
                            <Link to="/my-listed-items" className="hover:text-gray-300">My Listed Items</Link>
                            <Link to="/my-purchases" className="hover:text-gray-300">My Purchases</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
