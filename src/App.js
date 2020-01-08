import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import store from './store/idex';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './Components/Header/index';

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    )
}

export default App;