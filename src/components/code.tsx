'use server';
import CodeClient from './CodeClient';
import { promises as fs } from 'fs';
import path from 'path';

interface CodeProps {
    file: string;
    language?: string;
}

export default async function Code({ file, language }: CodeProps) {
    const filePath = path.join(process.cwd(), 'src/code/', file);
    const code = await fs.readFile(filePath, 'utf8');

    return <CodeClient code={code} language={language} />;
}
