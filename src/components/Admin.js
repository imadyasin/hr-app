import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Admin.css";


export default function Admin() {
    const [userDocuments, setUserDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      // Fetch user documents from the backend API
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT');
      const data = await response.json();
      setUserDocuments(data);
    } catch (error) {
      console.error('Error fetching user documents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin</h2>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get All Users'}
      </button>

      {userDocuments.length > 0 && (
        <div className="documents-list">
          <h3>User Documents:</h3>
          <ul>
            {userDocuments.map((document, index) => (
              <li key={index}>{document.name}</li>
              // Adjust the key and property based on your document structure
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
