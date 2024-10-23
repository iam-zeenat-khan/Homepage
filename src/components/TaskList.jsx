import React, { useState } from 'react';
import { FaCheck, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete report', completed: false },
    { id: 2, title: 'Review PRs', completed: false },
    { id: 3, title: 'Plan meeting agenda', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      alert('Task title cannot be empty');
      return;
    }

    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedTaskCount = tasks.filter(task => task.completed).length;
  const taskCompletionPercentage = (completedTaskCount / tasks.length) * 100;

  return (
    <div className="tasklist-container max-w-7xl mx-auto p-6 space-y-6 bg-[#ECD4EA] text-[#693B69] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Task List</h2>
        <button
          onClick={() => setIsTaskFormOpen(!isTaskFormOpen)}
          className="bg-[#511F52] text-white p-2 rounded-lg flex items-center hover:bg-[#693B69] transition duration-300"
        >
          {isTaskFormOpen ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
          {isTaskFormOpen ? "Close" : "Add New Task"}
        </button>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${isTaskFormOpen ? 'max-h-full' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.5s ease' }}
      >
        <div className="tasklist-form bg-[#A987A8] p-4 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <button
            onClick={handleAddTask}
            className="w-full bg-[#511F52] text-white p-2 rounded-lg flex items-center justify-center hover:bg-[#693B69] transition duration-300"
          >
            <FaPlus className="mr-2" /> Add Task
          </button>
        </div>
      </div>

      <div className="tasklist-progress-bar h-4 bg-[#693B69] rounded-lg mb-4">
        <div className="h-4 bg-[#511F52] rounded-lg" style={{ width: `${taskCompletionPercentage}%` }}></div>
      </div>

      <ul className="tasklist-tasks space-y-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-[#511F52] text-[#ECD4EA] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <span className={`${task.completed ? 'line-through text-[#A987A8]' : ''}`}>{task.title}</span>
            <div className="flex space-x-4">
              <button
                onClick={() => handleCompleteTask(task.id)}
                className={`p-2 rounded-lg ${task.completed ? 'bg-[#A987A8] text-white' : 'bg-[#ECD4EA] text-[#693B69]'}`}
              >
                <FaCheck />
              </button>
              <button onClick={() => handleDeleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
