import { Metadata } from "next";
import { Footer, MapClient, Menu } from "../../components";

export const metadata: Metadata = {
    title: "Travel Map",
    description: "All the places I have visited in descending order.",
};

export default function Travels() {
    return (
        <main>
            <Menu active="travels" />
            <MapClient />
            <Footer />
        </main>
    );
}