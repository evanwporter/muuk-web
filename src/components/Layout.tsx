import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <Header /> 
            {children}
            <Footer />
        </div>
    );
}
