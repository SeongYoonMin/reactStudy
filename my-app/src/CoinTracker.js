import { useEffect, useState } from "react"

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, setMyMoney] = useState("");
    const onChange = (event) => {
        setMyMoney(event.target.value);
    }
    
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json); 
            setLoading(false);
        });
    }, [])
    return (
        <div>
            <h1>The Coins {loading ? <strong>Loading...</strong> : `(${coins.length})`}</h1>
            <input style={{width: "200px"}} type="number" placeholder="Change your Money into BTC" value={myMoney} onChange={onChange}/>
            <br />
            <select>
                {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${Math.round(myMoney/coin.quotes.USD.price)}</option>)}
            </select>
            
        </div>
    )
}

export default CoinTracker