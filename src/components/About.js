import React from 'react';

const About = (props) => {
    return <>
        <h2 className={`text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>This is About Page</h2>
    </>;
}
export default About;