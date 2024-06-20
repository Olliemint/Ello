import { motion } from "framer-motion";
import { useReadingList } from "../../context/ReadingListContext";

type TabSwitchProps = {
  activeTab: number;
  onTabChange: (tab: number) => void;
};

const tabs = [
  { id: 1, name: "All Books" },
  { id: 2, name: "Reading List" },
];

const TabSwitch: React.FC<TabSwitchProps> = ({ activeTab, onTabChange }) => {
  const { readingList } = useReadingList();
  return (
    <nav className="w-full border-b-[1.1px] py-1 border-[#E8E8E8] mt-8 lg:py-2 sticky top-0 ">
      <ul className="flex justify-between divide-x">
        {tabs.map(({ id, name }) => (
          <li
            key={id}
            className={`text-sm font-medium text-[#868686] cursor-pointer w-1/2 inline-flex items-center justify-center transition-all duration-500 ease-in-out relative sm:text-base ${
              id === activeTab ? "text-[#335C6E]" : ""
            }`}
            onClick={() => onTabChange(id)}
          >
            <p className="inline-flex items-center gap-x-1">
              {name}
              {id === 2 && (
                <span className="bg-[#F76434] text-xs ml-1 h-5 w-5 flex items-center justify-center rounded-full text-white">
                  {readingList.length}
                </span>
              )}
            </p>
            {id === activeTab && (
              <motion.div
                className="w-full h-[2px] bg-[#FABD33] absolute -bottom-[5.5px] rounded-md lg:-bottom-[9.5px]"
                layoutId="underline"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabSwitch;
