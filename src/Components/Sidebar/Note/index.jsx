import React, { useState, useEffect, useCallback } from 'react';
import { jsPDF } from 'jspdf';

function Note() {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleDownloadPdf = () => {
        const doc = new jsPDF();

        doc.setFontSize(10);
        doc.text(text, 10, 10);

        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}_${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;
        doc.save(`note_${formattedDate}.pdf`);
    };



    const handleKeydown = useCallback((event) => {
        if (event.ctrlKey && event.key === '`') {
                handleDownloadPdf();  
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [handleKeydown]);

    return (
        <div >
            <div className="border border-white/20 p-6 rounded-lg bg-white/10  shadow-lg">
                <h3 className="font-semibold text-xl text-gray-800">Notepad</h3>
                <textarea
                    className="w-full h-32 mt-4 p-3 bg-transparent border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900"
                    placeholder="Write a poem or quote here..."
                    value={text}
                    onChange={handleTextChange}
                />
            </div>
        </div>
    );
}

export default Note;
