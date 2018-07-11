import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import { AppContainer } from 'react-hot-loader';

const Index = () => {
    return <div className={styles.title}>Hello   React!</div>;
}

ReactDOM.render(
    <AppContainer>
        <Index />       
    </AppContainer>
    , 
    document.getElementById('index'));