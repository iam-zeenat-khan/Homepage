import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Boards = () => {
  const [boards, setBoards] = useState([
    { name: 'Angola Production' },
    { name: 'Attendance Reporting' },
    { name: 'CHIVA RYH' },
  ]);

  const [newBoard, setNewBoard] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleInputChange = (e) => {
    setNewBoard(e.target.value);
  };

  const handleAddBoard = () => {
    if (newBoard.trim()) {
      setBoards([...boards, { name: newBoard }]);
      setNewBoard('');
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="component-container max-w-7xl mx-auto p-4 sm:p-6 space-y-6 bg-[#ECD4EA] text-[#693B69] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Create a New Board</h2>
        <button
          onClick={toggleCollapse}
          className="action-btn bg-[#511F52] text-white p-2 rounded-lg flex items-center hover:bg-[#693B69] transition duration-300 ease-in-out"
        >
          {isCollapsed ? <FaPlus className="mr-2" /> : <FaMinus className="mr-2" />}
          {isCollapsed ? 'Add New Board' : 'Close'}
        </button>
      </div>

      {/* Collapsible Form for Adding a New Board */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-full'}`}>
        <div className="bg-[#A987A8] p-4 sm:p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            value={newBoard}
            onChange={handleInputChange}
            placeholder="Board Name"
            className="input-field w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <button
            onClick={handleAddBoard}
            className="action-btn w-full bg-[#511F52] text-white p-2 rounded-lg flex items-center justify-center hover:bg-[#693B69] transition duration-300 ease-in-out"
          >
            <FaPlus className="mr-2" /> Add Board
          </button>
        </div>
      </div>

      {/* Responsive Board List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {boards.map((board, index) => (
          <div
            key={index}
            className="board-item bg-[#511F52] p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out text-center"
          >
            <h4 className="text-sm sm:text-base lg:text-sm font-bold text-white">
              {board.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
