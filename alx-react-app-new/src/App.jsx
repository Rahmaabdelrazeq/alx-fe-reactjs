import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

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
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    </div>
  );
}

export default App;
