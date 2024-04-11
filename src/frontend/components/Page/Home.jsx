import { useState, useEffect } from 'react'
import { ethers } from "ethers"

const Home = ({ marketplace, nft }) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const loadMarketplaceItems = async () => {
      // Load all unsold items
      const itemCount = await marketplace.itemCount()
      let items = []
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i)
        if (!item.sold) {
          // get uri url from nft contract
          const uri = await nft.tokenURI(item.tokenId)
          // use uri to fetch the nft metadata stored on ipfs 
          const response = await fetch(uri)
          const metadata = await response.json()
          // get total price of item (item price + fee)
          const totalPrice = await marketplace.getTotalPrice(item.itemId)
          // Add item to items array
          items.push({
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image
          })
        }
      }
      setLoading(false)
      setItems(items)
    }
  
    const buyMarketItem = async (item) => {
      await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
      loadMarketplaceItems()
    }

    useEffect(() => {
        loadMarketplaceItems()
    }, [])

    if (loading) return (
        <main className="flex justify-center items-center h-screen">
            <h2>Loading...</h2>
        </main>
    )

    return (
        <div className="flex justify-center">
            {items.length > 0 ?
                (<div className="px-5 container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-5">
                        {items.map((item, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <div className="bg-white shadow-md rounded-lg p-4">
                                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-gray-600">Buy for {ethers.utils.formatEther(item.totalPrice)} ETH</span>
                                        <button onClick={() => buyMarketItem(item)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
                :
                (<main className="flex justify-center items-center h-screen">
                    <h2>No listed assets</h2>
                </main>)
            }
        </div>
    );
}

export default Home;
