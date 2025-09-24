import TextImageBlock from "../components/TextImageBlock";

const Car = () => {
    return (
        <div className="w3-content w3-padding-64" style={{ maxWidth: "1200px" }}>
            <TextImageBlock title="Car" text="Coming Soon!
            (Blurred for Confidentiality)" image="/car/car.png" />
        </div>
    );
}

export default Car;