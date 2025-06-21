import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with our powerful task manager
        </p>
      </div>

      {/* Add Task Form */}
      <Card className="animate-fade-in">
        <form onSubmit={addTask} className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <Button type="submit" disabled={!newTask.trim()}>
            Add Task
          </Button>
        </form>
      </Card>

      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total</h3>
          <p className="text-3xl font-bold text-blue-600">{tasks.length}</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active</h3>
          <p className="text-3xl font-bold text-green-600">{activeTasks.length}</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Completed</h3>
          <p className="text-3xl font-bold text-purple-600">{completedTasks.length}</p>
        </Card>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 justify-center">
        {['all', 'active', 'completed'].map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </Button>
        ))}
        {completedTasks.length > 0 && (
          <Button
            variant="danger"
            size="sm"
            onClick={clearCompleted}
          >
            Clear Completed
          </Button>
        )}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {filter === 'all' 
                ? 'No tasks yet. Add your first task above!' 
                : `No ${filter} tasks found.`
              }
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card 
              key={task.id} 
              className={`animate-slide-up transition-all duration-200 ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="flex-1">
                  <p className={`text-gray-900 dark:text-white ${
                    task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                  }`}>
                    {task.text}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Created: {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager; 