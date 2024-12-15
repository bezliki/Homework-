
import React, { useState } from 'react'

const App = () => {
    const [isVisible, setIsVisible] = useState(true); 

    const handleHideBox = () => {
        setIsVisible(false); 
    };

    return (
        <div>
            {isVisible && (
                <div className="bg-red-500 w-52 h-52 flex items-center justify-center text-white text-lg">
                    Коробка
                </div>
            )}
            <button onClick={handleHideBox} className="ml-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Скрыть коробку
            </button>
        </div>
    )
}

export default App
