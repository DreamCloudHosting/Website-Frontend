import ProductCard from "@/components/Card/Card";


export default function Page() {
    return (
        <>
            {/* <div class="Test">
                <h1>This is test</h1>
            </div> */}

            <ProductCard
                title="Minecraft Server Hosting"
                description="A reliable self-hosting server is used to provide the best service for you to play with your friends."
                readMore="#"
            />

            {/* <script src="./script.js" async></script> */}
        </>
    );
}