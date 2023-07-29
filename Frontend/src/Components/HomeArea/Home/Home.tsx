import "./Home.css";
import imageSource from "../../../Assets/Images/homeImage.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
			<h2>Welcome</h2>

            <img src={imageSource}></img>
        </div>
    );
}

export default Home;
