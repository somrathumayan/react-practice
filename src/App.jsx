import ArrayMap from "./component/ArrayMap";
import ConditionalRendering from "./component/ConditionalRendering";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ImmediateltInvokedFunction from "./component/ImmediateltInvokedFunction";
import InvokeFunction from "./component/InvokeFunction";
import LogicalAnsAnd from "./component/LogicalAnsAnd";
import PropsTitle from "./component/PropsTitle";

import SwitchRendering from "./component/SwitchRendering";
import TernaryOperator from "./component/TernaryOperator";

const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <InvokeFunction/>
        <ArrayMap/>
        <ImmediateltInvokedFunction/>
        <ConditionalRendering/>
        <TernaryOperator/>
        <SwitchRendering/>
        <LogicalAnsAnd/>
        <ContactForm/>
        <PropsTitle title="Humayan" des="Description"/>
        <Footer/>      
    </div>
  );
};

export default App;