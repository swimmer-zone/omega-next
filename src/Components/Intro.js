import React from 'react';
import Async from 'react-async';
import ReactMarkdown from 'react-markdown';
import './_scss/intro.scss';

const Intro = () => {
    const loadIntro = () =>
        fetch('../../README.md')
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.text());
        
    return (
        <section className="intro">
            <Async promiseFn={loadIntro}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {intro => {
                        return (<ReactMarkdown>{intro}</ReactMarkdown>)
                    }}
                </Async.Fulfilled>
                <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                </Async.Rejected>
            </Async>
        </section>
    );
};

export default Intro;