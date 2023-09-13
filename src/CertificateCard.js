import React from 'react';
import './certificateCard.scss'; // Import your SCSS file


const CertificateCard = ({ name, description, source, link }) => {
  const handleClick = () => {
    // Handle the click event, e.g., open the link in a new tab
    window.open(link, '_blank');
  };

  return (
    <div className="certificate-card" onClick={handleClick}>
      <h3 className='certificate-title certificate-link'>{name}</h3>
      <p className='certificate-description'>{description}</p>
      <p className='certificate-details'>Issued by: {source}</p>
    </div>
  );
};

export default CertificateCard;
