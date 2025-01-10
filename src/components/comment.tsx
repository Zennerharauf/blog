'use client';
import React, { useEffect, useState } from 'react';

export default function Comment() {
    const [comment, setcomment] = useState('');
    const [comments, setcomments] = useState<string[]>([]);

    // Load comments from localStorage on component mount
    useEffect(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            setcomments(JSON.parse(savedComments));
        }
    }, []);

    // Function to add a new comment
    const addcomment = () => {
        if (comment.trim() !== '') {
            const mycomment = [...comments, comment];
            setcomments(mycomment); // Update state
            setcomment(''); // Clear input field
            localStorage.setItem('comments', JSON.stringify(mycomment)); // Save to localStorage
        }
    };

    return (
        <div>
            <h1 className='text-3xl font-bold mt-4 capitalize'>Comment Box</h1>
            <input
                type="text"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                placeholder="Drop Comment Here"
                className="border border-[#363b56] mt-4 p-2 w-80 rounded"
            />
            <br />
            <button
                className="bg-[#363b56] text-white p-2 mt-4 rounded"
                onClick={addcomment}
            >
                Add Comment
            </button>
            <div>
                <h2 className="mt-2 text-lg capitalize">All Comments</h2>
                {comments.length === 0 ? (
                    <p>No comment yet. Add your comment</p>
                ) : (
                    <ul>
                        {comments.map((data, index) => (
                            <li key={index} className="border- p-2">
                                {data}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
