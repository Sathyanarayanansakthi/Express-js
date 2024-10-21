import { useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result); // Show the response from the backend
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <form className="bg-gray-500 p-5 rounded shadow-lg w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold text-center mb-4 ">Express Form</h2>

                {/* Name Input */}
                <input
                    className="w-full mb-3 p-2 border rounded"
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={handleChange}
                />

                {/* Email Input */}
                <input
                    className="w-full mb-3 p-2 border rounded"
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                />

                {/* Password Input */}
                <input
                    className="w-full mb-3 p-2 border rounded"
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={formData.Password}
                    onChange={handleChange}
                />

                {/* Submit Button */}
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
