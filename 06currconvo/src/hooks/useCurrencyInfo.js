import { useState } from "react"

function useCurrencInfo(currency){
    const[data , setData] = useState([])
    useEffect(() => {
        fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_aY3JENa3MDR5anEg7DzQGO3mq5p0zSl2Z3lBQEva&base_currency=" + currency)
        .then((res) => res.json)
        .then((res) => setData(res[data]))
    }, [currency])

    return data;
    
} 

export default useCurrencInfo;

