import React from 'react';
import { createRoot } from 'react-dom/client';

// Import our custom CSS
import '../scss/styles.scss';

const Greeting = () => {
    return <h1 className='text'>Hi. I am boxy. This is where you can see some of my projects</h1>;
}

const App = () => {
    return (
        <div>
            <Greeting />
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);