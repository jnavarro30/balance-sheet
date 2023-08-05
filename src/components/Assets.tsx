import { useState } from "react";

function Assets() {
    const [savings, setSavings] = useState(8000);
    const [stocks, setStocks] = useState(33);
    const [stocksCost, setStocksCost] = useState(84);
    
    return (
        <div className="income grid grid-cols-2 border-2">
                <div className="label border-2">
                    <h1 className="bg-black text-white align-left">Assets</h1>
                    <p className="savings">Savings:</p>
                    <p className="stocks">Stocks:</p>
                    <p className="vnq">VNQ</p>
                </div>
                <div className="amount border-2">
                    <h1 className="bg-black text-white">Amount</h1>
                    <p className="amount-savings">{savings}</p>
                    <p className="amount-stocks text-white">blank</p>
                    <p className="amount-vnq">{stocks} shares @ {stocksCost}</p>

                </div>
            </div>
    )
}

export default Assets;