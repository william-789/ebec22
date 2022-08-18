import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Ebec from './components/Ebec';
import Modalities from './components/Modalities';
import Rounds from './components/Rounds';
import Networking from './components/Networking';
import Jury from './components/Jury';
import Partners from './components/Partners';
import CoreTeam from './components/CoreTeam/CoreTeam';
import Previous from './components/Previous';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Ebec />
    <Modalities />
    <Rounds />
    <Networking />
    <Jury />
    <Partners />
    <CoreTeam />
    <Previous />
    <FAQ />
    <Footer />
    </>
  );
}

export default App;
/*
Done(no touch):
Home
Corrections(intl):
Navbar (add EN|PT button)
Ebec
Navbar
Modalities
Rounds
Networking
Jury
Partners
CoreTeam
Pending(lots):
Previous
FAQs
Footer
*/