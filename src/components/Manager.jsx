import React from "react";
import { useState } from "react";

const Manager = () => {
    const [show, setShow] = useState(false);
    const [form, setform] = useState({ site: "", username: "", password: "" });

    const showpassword = () => {
        setShow((prev) => !prev);
    };

    const savePassword = () => {

    }
    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});

    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

            {/* Content */}
            <div className="flex justify-center items-center ">
                <div className="w-full max-w-3xl p-5 bg-green-50 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-blue-600">
                            &lt;<span className="text-gray-800">Pass</span>
                            <span className="text-green-500">OP</span>/&gt;
                        </h1>
                        <p className="mt-2 text-gray-500 text-lg">
                            Your own Password Manager
                        </p>
                    </div>

                    {/* Compact Form Row */}
                    <input
                        type="text" onChange={e=>handleChange(e)}
                        value={form.site}
                        name="site"
                        placeholder="Enter website URL"
                        className="flex-1 px-1  rounded-md bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm
              w-full py-2 my-1"
                    />
                    <div className="flex gap-4 justify-center w-full">

                        <input 
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={e=>handleChange(e)}
                            placeholder="Enter username"
                            className=" px-3 py-2 rounded-md bg-green-50 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-400 text-sm"
                        />
                        <div className="relative ">
                            <input 
                                name="password"
                                value={form.password} onChange={e=>handleChange(e)}
                                type={show ? "text" : "password"}
                                placeholder="Enter Password"
                                className=" px-3 py-2 rounded-md bg-purple-50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-400 text-sm"
                            />
                            <span className="absolute right-0 top-0" onClick={showpassword} onChange={handleChange}><img className="px-1 py-2 " width={28} src={show ? "/icons/eyecross.png" : "/icons/eye.png"} alt="eye" /></span>
                        </div>



                        <button onClick={savePassword} className="flex rounded-full bg-green-500 px-2 py-1 justify-center items-center hover:bg-green-300">
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Add Password
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manager;
