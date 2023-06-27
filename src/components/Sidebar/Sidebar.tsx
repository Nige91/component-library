import React, {useState} from "react";

export type SidebarItem = {
  title: string;
  onClick: () => void;
};

type SidebarProps = {
  items: SidebarItem[];
};

export const Sidebar: React.FC<{ items: SidebarItem[] }> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (title: string, onClick: () => void) => {
    setSelectedItem(title);
    onClick();
  };

  return (
    <div className="flex flex-col w-32 bg-gray-100 p-2 space-y-2">
      {items.map((item) => (
        <button
          key={item.title}
          className={`flex items-center justify-start w-full px-4 py-2 rounded-md transition-colors ${
            selectedItem === item.title
              ? 'bg-primary-300'
              : 'hover:bg-primary-100'
          }`}
          onClick={() => handleItemClick(item.title, item.onClick)}
        >
          <span className="text-gray-900">{item.title}</span>
        </button>
      ))}
    </div>
  );
};