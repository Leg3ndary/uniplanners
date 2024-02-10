import "@/styles/globals.css";
import Navigation from "@/pages/components/Navigation";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Footer from "@/pages/components/Footer";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={lato.className}>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
