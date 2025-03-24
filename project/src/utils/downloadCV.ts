const downloadCV = () => {
  // Create a Blob from the PDF data
  const pdfData = new Uint8Array([/* Your PDF data here */]);
  const blob = new Blob([pdfData], { type: 'application/pdf' });
  
  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Mithunan_Jeyamohan_CV.pdf';
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export default downloadCV;