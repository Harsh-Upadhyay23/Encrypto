import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";



const Manager = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => setShow((prev) => !prev);

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) return; // avoid empty save
    const updated = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
    setForm({ site: "", username: "", password: "" }); // reset input after save
  };
   const deletePassword = (id) => {
    
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast("Copied to clipboard: " + text)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const editPassword = (e) => {
    console.log(e);
  }


  return (
    <>

      {/* Page Content */}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <div className="flex flex-col items-center justify-start  px-4  m-auto w-1/2">
        {/* Form Card */}
        <div className="w-full max-w-3xl p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600">
              Add New Password
            </h2>
            <p className="mt-2 text-gray-500 text-lg">
              Save and manage your passwords easily
            </p>
          </div>

          {/* Form Inputs */}
          <input
            type="text"
            onChange={handleChange}
            value={form.site}
            name="site"
            placeholder="Enter website URL"
            className="w-full px-3 py-2 mb-3 rounded-md bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="flex-1 px-3 py-2 rounded-md bg-green-50 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-400 text-sm"
            />
            <div className="relative flex-1">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type={show ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-3 py-2 rounded-md bg-purple-50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-400 text-sm"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  width={24}
                  src={show ? "/icons/eyecross.png" : "/icons/eye.png"}
                  alt="eye"
                />
              </span>
            </div>
            <button
              onClick={savePassword}
              className="flex items-center gap-1 rounded-md bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-500"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              Add
            </button>
          </div>
        </div>

        {/* Passwords Table */}
        <div className="w-[100%] max-w-4xl ">
          <h2 className="font-bold text-2xl py-4 text-center text-gray-800">
            Your Passwords
          </h2>
          {passwordArray.length === 0 ? (
            <div className="text-center text-gray-500">
              No passwords to show
            </div>
          ) : (
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="table-auto w-full text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-50 text-gray-800">
                  {passwordArray.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 text-center">{item.site}</td>
                      <td className="py-2 px-4 flex justify-center">{item.username} <span onClick={() => { copyText(item.username) }}><img width={20} src="/public/icons/3719119.png" alt="" /></span> </td>
                      <td className="py-2 px-4 "><span className="flex">{item.password} <span onClick={() => { copyText(item.password) }}><img width={20} src="/public/icons/3719119.png" alt="" /></span> </span></td>
                      <td className="py-2 px-4 text-center flex justify-center gap-2">
                        <span onClick={() => editPassword(item.id)}
                          className="cursor-pointer">
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                      <span onClick={() => deletePassword(item.id)} className="cursor-pointer">
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                    </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            </div>
          )}
      </div>
    </div >
    </>
  );
};

export default Manager;
