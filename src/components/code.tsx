'use server';

import { JSX } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import CodeClient from './codeClient';

type Props = {
    file: string;
    language?: string;
};

export default async function Code({ file, language }: Props): Promise<JSX.Element> {
    const filePath = path.join(process.cwd(), 'src/code/', file);
    const code = await fs.readFile(filePath, 'utf8');

    return <CodeClient code={code} language={language} />;
}