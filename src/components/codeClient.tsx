'use client';

import { JSX } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './code.scss';

type Props = {
    code: string;
    language?: string
};

export default function CodeClient({ code, language }: Props): JSX.Element {
    return (<div className="codeParent">
        <SyntaxHighlighter language={language} showLineNumbers={true} style={atelierForestDark} wrapLines={true}>
            {code}
        </SyntaxHighlighter>
    </div>);
}