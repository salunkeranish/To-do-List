import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTaskId, setEditTaskId] = useState(null); 
    const [editText, setEditText] = useState(''); 

    const addTask = () => {
        if (newTask.trim() === '') return;

        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, task]);
        setNewTask('');
    };

    const completeTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Start editing the task
    const startEditing = (id, currentText) => {
        setEditTaskId(id);
        setEditText(currentText);
    };

    // Save edited task
    const saveEdit = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, text: editText } : task
            )
        );
        setEditTaskId(null);
        setEditText('');
    };

    return (
        <div>
            <Header />
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ToDoList
                tasks={tasks}
                onComplete={completeTask}
                onDelete={deleteTask}
                onStartEditing={startEditing}
                onSaveEdit={saveEdit}
                editTaskId={editTaskId}
                editText={editText}
                setEditText={setEditText} // Allow editing text
            />
        </div>
    );
};

export default App;
