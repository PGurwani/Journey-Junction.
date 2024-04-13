import React, { useState, useEffect } from 'react';

const Notify = () => {
  const [groupLink, setGroupLink] = useState('');

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:8081/api/groups")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with a 'group_link' property
        if (data.length > 0) {
          setGroupLink(data[0].group_link); // Assuming you want to use the group_link from the first item
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '250px', backgroundColor: '#f5ebe0', borderRadius: '10px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#007bff',fontWeight: 'bold' }}>Thank You for Joining!</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        We appreciate your payment and are excited to have you on board.
        You will be added to the group soon. For any further updates, stay tuned!
        <br />
        {groupLink && <a href={groupLink} style={{ color: '#007bff', textDecoration: 'underline' }}>Join our WhatsApp Group</a>}
      </p>
      <p style={{ color: '#555', fontStyle: 'italic', marginTop: '20px' }}>- The Journey Junction Team</p>
    </div>
  );
};

export default Notify;
