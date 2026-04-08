'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './code.scss';

export default function CodeClient({ code, language }: { code: string; language?: string }) {
    return (<div className="codeParent">
        <SyntaxHighlighter language={language} showLineNumbers={true} style={atelierForestDark} wrapLines={true}>
            {code}
        </SyntaxHighlighter>
    </div>);
}