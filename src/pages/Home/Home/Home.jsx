import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import DecoCollection from "../DecoCollection/DecoCollection";
import NancyChair from "../NancyChair/NancyChair";
import OurBlog from "../OurBlog/OurBlog";
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
            <DecoCollection></DecoCollection>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;