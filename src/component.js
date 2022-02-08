import './styles.css';
import IOT from './images/iot.png';
export default function Component() {
    return (
        <div className="container">
            <div className='card'>
                <img src={IOT} />
                <h2>Internet Of Things</h2>
                <p>The Internet of Things, or IoT, refers to the billions of physical devices around the world that are connected to the internet, all collecting and sharing data.</p>
                <a href="#">SHARE</a><a href='#'>LEARN MORE</a>
            </div>
        </div>
    )
}