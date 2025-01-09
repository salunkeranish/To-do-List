import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onComplete, onDelete, onStartEditing, onSaveEdit, editTaskId, editText, setEditText }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    onStartEditing={onStartEditing}
                    onSaveEdit={onSaveEdit}
                    editTaskId={editTaskId}
                    editText={editText}
                    setEditText={setEditText}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
