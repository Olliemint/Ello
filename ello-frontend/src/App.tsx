import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ReadingListProvider } from "./context.tsx/ReadingListContext";
import AllBooks from "./frontend/components/AllBooks";
import { AnimatedWrapper } from "./frontend/components/AnimatedWrapper";
import ReadingList from "./frontend/components/ReadingList";
import TabSwitch from "./frontend/components/TabSwitch";
  import { ToastContainer, Bounce } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <AnimatedWrapper key={1}>
            <AllBooks />
          </AnimatedWrapper>
        );
      case 2:
        return (
          <AnimatedWrapper key={2}>
            <ReadingList />
          </AnimatedWrapper>
        );
      default:
        return (
          <AnimatedWrapper key={1}>
            <AllBooks />
          </AnimatedWrapper>
        );
    }
  };

  return (
    <ReadingListProvider>
      <div className="w-full px-4">
        <ToastContainer
          transition={Bounce}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="mx-auto max-w-screen-xl mt-4">
          <div className=""></div>
          <TabSwitch activeTab={activeTab} onTabChange={handleTabChange} />

          <div className="mt-6 md:mt-12">
            <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
          </div>
        </div>
      </div>
    </ReadingListProvider>
  );
};

export default App;
