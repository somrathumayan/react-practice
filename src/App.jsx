import ArrayMap from "./component/ArrayMap";
import ConditionalRendering from "./component/ConditionalRendering";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import InvokeFunction from "./component/InvokeFunction";
import SwitchRendering from "./component/SwitchRendering";

const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <InvokeFunction/>
        <ArrayMap/>
        <ConditionalRendering/>
        <SwitchRendering/>
        <ContactForm/>
        <Footer/>      
    </div>
  );
};

export default App;