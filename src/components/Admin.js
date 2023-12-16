import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Admin.css";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      // Fetch all users from the backend API
      const response = await fetch('http://localhost:8080/api/users/getAll');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadClick = (user) => {
    const { userId, name, email, image, contentType } = user;
  
    // Set a default file extension if contentType is not defined or unexpected
    const fileExtension = contentType ? contentType.split('/')[1] || 'unknown' : 'unknown';
  
    // Convert image data to a Blob
    const blob = new Blob([image], { type: contentType });
  
    // Create an anchor element with a download attribute
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
  
    // Determine the file extension based on content type
    downloadLink.download = `${userId}_${name}_${email}_image.${fileExtension}`;
    downloadLink.click();
  };
  
  return (
    <div className="admin-container">
      <h2>Admin</h2>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get All Users'}
      </button>

      {users.length > 0 && (
        <div className="users-list">
          <h3>User List:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDownloadClick(user)}>Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
