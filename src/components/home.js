
import React, { PureComponent } from 'react'
import {useSelector} from 'react-redux';


const Home = () => {

    const counter = useSelector(state => state.counterReducer);


    return (
        <div>
            <h1>Home component</h1>

            <p>Counter state - {counter}</p>
        </div>
    )
}

export default Home;