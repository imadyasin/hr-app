import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Admin.css";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/users/getAll');
      const data = await response.json();
      setUsers(data);
      console.log(data[0])
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadClick = (user) => {
    try {
      console.log(user.image);
      const binaryData = new Uint8Array(atob(user.image).split('').map(char => char.charCodeAt(0)));
      console.log(binaryData);
      const blob = new Blob([binaryData], { type: user.contentType });
      console.log(blob);
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      link.href = url;
      
      link.setAttribute('download', `${user.name}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  
  const handleDeleteClick = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/delete/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {

        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleLogout = () => {
    
    navigate('/adminlogin');
  };
  
  

  
  
  return (
    <>
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get All Users'}
      </button>
      <button className="btn btn-secondary ml-2" onClick={handleLogout}>
          Logout
        </button>

      {users.length > 0 && (
        <div className="users-list">
          <h3>User List:</h3>
          <table className="table">
            <thead>
              <tr>
                 <th>Name</th>
                  <th>Email</th>
                  <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-center">
                      <button className="btn btn-primary" onClick={() => handleDownloadClick(user)}>
                        Download
                      </button>{' '}
                      <button className="btn btn-danger" onClick={() => handleDeleteClick(user.id)}>
                        Delete
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}
    </div>
    </>
    
  );
}
