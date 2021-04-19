<<<<<<< HEAD
export default function HomePage() {
    return(
        <>
            <main>
                <h1>HomePage</h1>
            </main>
        </>
=======
import DestinationCard from '../components/DestinationCard/index';
import ActivityCard from '../components/ActivityCard/index';

export default function HomePage() {
    return (
        <div className="Home">
            <h1>HomePage</h1>
            <DestinationCard />
            <ActivityCard />
        </div>
>>>>>>> cd85836f521150a0cd10dad4b832a64710ea536b
    );
}