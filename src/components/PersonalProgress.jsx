import React, { useState } from 'react';
import { LinearProgress, Tooltip, CircularProgress } from '@mui/material';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProgressTracking = () => {
  const [progressList, setProgressList] = useState([
    { id: 1, name: 'Project A', percentage: 45, type: 'linear' },
    { id: 2, name: 'Project B', percentage: 70, type: 'linear' },
    ]);

  const [newProgress, setNewProgress] = useState({
    name: '',
    percentage: 0,
    type: 'linear',
  });

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProgress((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProgress = () => {
    if (newProgress.name && newProgress.percentage >= 0 && newProgress.percentage <= 100) {
      const progressToAdd = { id: progressList.length + 1, ...newProgress };
      setProgressList([...progressList, progressToAdd]);

      setNewProgress({
        name: '',
        percentage: 0,
        type: 'linear',
      });
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="progress-container max-w-7xl mx-auto p-8 space-y-6 bg-[#FFFFFF] text-[#693B69] rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Track Progress</h2>
        <button
          onClick={toggleCollapse}
          className="bg-[#A987A8] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#693B69] transition duration-300 ease-in-out"
        >
          {isCollapsed ? <FaPlus className="mr-2" /> : <FaMinus className="mr-2" />}
          {isCollapsed ? 'Add Progress' : 'Close'}
        </button>
      </div>

      {/* Collapsible Form for Adding New Progress */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-full'}`}>
        <div className="bg-[#ECD4EA] p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            name="name"
            value={newProgress.name}
            onChange={handleInputChange}
            placeholder="Project/Task Name"
            className="w-full p-3 border border-[#693B69] rounded-lg bg-[#FFFFFF] text-[#693B69] focus:outline-none focus:ring focus:ring-[#693B69] transition duration-200 ease-in-out"
          />
          <input
            type="number"
            name="percentage"
            value={newProgress.percentage}
            onChange={handleInputChange}
            placeholder="Progress Percentage (0 - 100)"
            className="w-full p-3 border border-[#693B69] rounded-lg bg-[#FFFFFF] text-[#693B69] focus:outline-none focus:ring focus:ring-[#693B69] transition duration-200 ease-in-out"
          />
          <select
            name="type"
            value={newProgress.type}
            onChange={handleInputChange}
            className="w-full p-3 border border-[#693B69] rounded-lg bg-[#FFFFFF] text-[#693B69] focus:outline-none focus:ring focus:ring-[#693B69] transition duration-200 ease-in-out"
          >
            <option value="linear">Linear Progress</option>
            <option value="circular">Circular Progress</option>
          </select>
          <button
            onClick={handleAddProgress}
            className="w-full bg-[#A987A8] text-white py-2 rounded-lg flex items-center justify-center hover:bg-[#693B69] transition duration-300 ease-in-out"
          >
            <FaPlus className="mr-2" /> Add Progress
          </button>
        </div>
      </div>

      {/* Responsive Progress List */}
      
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {progressList.map(progress => (
          <div
            key={progress.id}
            className="bg-[#511F52] p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">{progress.name}</h4>
            {progress.type === 'linear' ? (
              <Tooltip title={`${progress.percentage}%`} arrow>
                <div className="w-full">
                  <LinearProgress
                    variant="determinate"
                    value={progress.percentage}
                    sx={{
                      height: 12,
                      borderRadius: 8,
                      background: '#ECD4EA',
                      '& .MuiLinearProgress-bar': {
                        background: '#57CC99',
                      },
                    }}
                  />
                </div>
              </Tooltip>
            ) : (
              <Tooltip title={`${progress.percentage}%`} arrow>
                <div className="flex justify-center items-center">
                  <CircularProgress
                    variant="determinate"
                    value={progress.percentage}
                    size={80}
                    thickness={5}
                    sx={{
                      color: '#57CC99',
                    }}
                  />
                </div>
              </Tooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracking;
