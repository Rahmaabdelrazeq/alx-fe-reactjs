import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={28} bio="Traveler & Food Enthusiast" />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
