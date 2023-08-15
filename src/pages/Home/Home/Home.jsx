import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import NancyChair from "../NancyChair/NancyChair";
import ArtDeco from "./ArtDeco/ArtDeco";
import TableWood from "./TableWood/TableWood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NancyChair></NancyChair>
            <TableWood></TableWood>
            <ArtDeco></ArtDeco>
            <BestSelling></BestSelling>
        </div>
    );
};

export default Home;