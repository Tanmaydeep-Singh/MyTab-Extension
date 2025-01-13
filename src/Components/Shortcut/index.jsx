import React, { useState } from 'react';

const ShortcutSection = () => {
  const [shortcuts, setShortcuts] = useState([
    { name: 'YouTube', url: 'https://www.youtube.com', icon: 'https://www.youtube.com/favicon.ico' },
    { name: 'LeetCode', url: 'https://leetcode.com', icon: 'https://leetcode.com/favicon.ico' },
  ]);
  const [showAddShortcut, setShowAddShortcut] = useState(false);
  const [newShortcut, setNewShortcut] = useState({ name: '', url: '' });

  const handleAddShortcut = () => {
    if (newShortcut.name.trim() && newShortcut.url.trim()) {
      setShortcuts([
        ...shortcuts,
        {
          name: newShortcut.name,
          url: newShortcut.url,
          icon: `${new URL(newShortcut.url).origin}/favicon.ico`, 
        },
      ]);
      setNewShortcut({ name: '', url: '' });
      setShowAddShortcut(false);
    }
  };

  return (
    <div className="w-full p-4 flex justify-center gap-6 flex-wrap">
      {shortcuts.map((shortcut, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center w-20"
        >
          <a
            href={shortcut.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 overflow-hidden"
          >
            {shortcut.icon ? (
              <img
                src={shortcut.icon}
                alt={shortcut.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-600 text-sm font-bold">
                {shortcut.name[0]}
              </span>
            )}
          </a>
          <p className="mt-2 text-sm text-gray-700">{shortcut.name}</p>
        </div>
      ))}

      {/* Add Shortcut Button */}
      <div
        className="flex flex-col items-center justify-center text-center w-20 cursor-pointer"
        onClick={() => setShowAddShortcut(true)}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-300">
          <span className="text-gray-700 text-2xl font-bold">+</span>
        </div>
        <p className="mt-2 text-sm text-gray-700">Add shortcut</p>
      </div>

      {/* Add Shortcut Modal */}
      {showAddShortcut && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Add Shortcut</h3>
            <input
              type="text"
              placeholder="Name"
              value={newShortcut.name}
              onChange={(e) => setNewShortcut({ ...newShortcut, name: e.target.value })}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="url"
              placeholder="URL"
              value={newShortcut.url}
              onChange={(e) => setNewShortcut({ ...newShortcut, url: e.target.value })}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddShortcut(false)}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddShortcut}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortcutSection;