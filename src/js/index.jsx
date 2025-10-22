import React from 'react';
import { createRoot } from 'react-dom/client';

import '../scss/styles.scss';

const Greeting = () => {
    return <h1 className='text-center'>Hi. I am boxy.</h1>;
}

const Body = () => {
    return (
        <>
            <div className='list-group'>
                <a href="HomePage/" className='list-group-item list-group-item-action'>My Custom Home Page</a>
                <a href="computers/" className='list-group-item list-group-item-action'>Computer Things</a>
            </div>
        </>
    );
}

const App = () => {
    return (
        <div>
            <Greeting />
            <Body />
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);