import DestinationCard from '../components/DestinationCard/DestinationCard';
import ActivityCard from '../components/ActivityCard/ActivityCard';

export default function HomePage() {
    return (
        <div className="Home">
            <h1>HomePage</h1>
            <DestinationCard />
            <ActivityCard />
        </div>
    );
}