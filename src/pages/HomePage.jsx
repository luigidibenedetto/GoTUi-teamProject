import DestinationCard from '../components/DestinationCard/index';
import ActivityCard from '../components/ActivityCard/index';

export default function HomePage() {
    return (
        <div className="Home">
            <h1>HomePage</h1>
            <DestinationCard />
            <ActivityCard />
        </div>
    );
}