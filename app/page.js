import styles from "./page.module.css";
import ProductCard from "@/components/Card/Card";


export default function Page() {
    return (
        <>
            {/* <div class="Test">
                <h1>This is test</h1>
            </div> */}


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
                <ProductCard
                    title="Test"
                    description="Test test test test test test test test test test test test test test test test test test test test test"
                    readMore="#"
                />
            </div>
            {/* <script src="./script.js" async></script> */}
        </>
    );
}