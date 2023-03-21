import React from "react";

const Contact2 = () => {
    return (
        <div className="con">
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder="Abc" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="abc@xyz.com"
                        />
                    </div>

                    <div>
                        <label>Message</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your query..."
                        />
                    </div>

                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    );
};

export default Contact2;
