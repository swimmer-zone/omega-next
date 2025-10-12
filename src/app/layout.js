import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
    title: 'Ω',
    description: 'Ω - My music',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
    author: 'Omega'
}

export const viewport = {
    colorScheme: 'light',
    themeColor: '#6a6eec',
    width: 'device-width',
    initialScale: 1,
};

const RootLayout = ({ children }) => {
    return (<html lang="en">
        <body>
            {children}
            <div style={{minHeight: '50px'}}>
                <Analytics/>
                <SpeedInsights/>
            </div>
        </body>
    </html>)
}

export default RootLayout;
