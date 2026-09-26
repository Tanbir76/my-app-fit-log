import footerLogo from "@/assets/logo.png"
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="container mx-auto py-10 ">
            <div className="grid  md:flex justify-between items-center">
                <div className="flex  items-center gap-2 text-xl">
                    <Image src={footerLogo} alt="logo"></Image>
                    <h1 className="font-bold ">FITLOG</h1>
                </div>
                <div>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;