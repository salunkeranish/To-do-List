import React from 'react';

const ToDoItem = ({
    task,
    onComplete,
    onDelete,
    onStartEditing,
    onSaveEdit,
    editTaskId,
    editText,
    setEditText,
}) => {
    return (
        <li className={task.completed ? 'completed' : ''}>
            {editTaskId === task.id ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} // Update the edit text
                        onBlur={() => onSaveEdit(task.id)} // Save on blur
                    />
                    <button onClick={() => onSaveEdit(task.id)}>Save</button>
                </div>
            ) : (
                <>
                    {task.text}
                    <div>
                        <button onClick={() => onComplete(task.id)}>Complete</button>
                        <button onClick={() => onDelete(task.id)}className="delete-btn">Delete</button>
                        <button onClick={() => onStartEditing(task.id, task.text)}>
                            Edit
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default ToDoItem;
