import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import CartModalContextProvider from './store/CartModalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartModalContextProvider><App /></CartModalContextProvider>);
