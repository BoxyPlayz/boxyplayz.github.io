import { createRoot } from 'react-dom/client';

import '../scss/styles.scss';
import { createElement } from 'react';

const Greeting = () => {
    return (
        <>
            <h1 className='text-center'>Hi. I am boxy.</h1>
            <p className='text-center'>I do things</p>
        </>
    );
}

const LinkedItem = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return createElement("a", {
        className: "list-group-item list-group-item-action " + props.className,
        ...props
    })
}

const Body = () => {
    return (
        <>
            <div className='list-group'>
                <LinkedItem href="HomePage">My Custom Home Page</LinkedItem>
                <LinkedItem href="SupremeLearnerPremium">Supreme Learner Premium</LinkedItem>
                <LinkedItem href="computers">Computer Things</LinkedItem>
                <LinkedItem href="lazybones">LAZYBONES CSS!</LinkedItem>
                <LinkedItem href="https://github.com/BoxyPlayz/boxy-backrooms">Boxy's Backrooms</LinkedItem>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);