import styles from "./page.module.css";
import ProductCard from "@/components/Card/Card";
import DefaultMetadata from "@/modules/Metadata/default";


export const metadata = new DefaultMetadata().editValue({
    title: "DCH | Home"
});

export default function HomePage() {
    return (
        <>
            <div className={styles.cardContainer}>
                <ProductCard
                    title="Minecraft Server Hosting"
                    description="Enjoy seamless gameplay on our reliable self-hosted server designed for you and your friends."
                    image="/images/card/minecraft_server.jpg"
                    readMore="#"
                />
                <ProductCard
                    title="Discord Bot Hosting"
                    description="Power up your Discord server with reliable hosting for your bots, ensuring they're always online and ready to assist."
                    image="/images/card/discord_bot.png"
                    readMore="#"
                />
                <ProductCard
                    title="Website Hosting"
                    description="Get reliable hosting for your website, ensuring it's always online and accessible to your visitors."
                    image="/images/card/website_hosting.jpg"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
            </div>
        </>
    );
}