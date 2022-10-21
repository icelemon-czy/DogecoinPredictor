import './App.css';

import React,{useState,useEffect} from "react";
import Amplify,{API,graphqlOperation} from 'aws-amplify';
import awsExports from "./aws-exports";

import {updateDoge} from "./graphql/mutations";
import {getDoge} from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
    const [dogePrice, setDogePrice] = useState(0);

    async function fetchDogePrice() {
        try {
            const dogeData = await API.graphql(graphqlOperation(getDoge));
            const dogePrice = dogeData.data.getDoge.price;
            setDogePrice(dogePrice);
        } catch (err) {
            console.log("error fetching dogePrice");
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDogePrice()
    }, [])

    async function updateDogePrice() {
        const dogeData = await API.graphql(graphqlOperation(getDoge));
        // console.log(dogeData);
        const dogePrice = dogeData.data.getDoge.price + 0.1 ;

        const updatedDogePrice = await API.graphql(graphqlOperation(updateDoge,{input: dogePrice}))
        setDogePrice(updatedDogePrice.data.updateDoge.price);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Dogecoin Price Predictor
                </h1>

                <p>
                    One click = 10 cents
                </p>

                <h2>
                    $ {dogePrice}
                </h2>

                <button onClick={updateDogePrice}>Doge 🚀</button>

            </header>
        </div>
    );
}

export default App;
