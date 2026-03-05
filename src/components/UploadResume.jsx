function UploadResume() {

  const handleUpload = () => {
    alert("Resume uploaded successfully!");
  };

  return (
    <div>
      <h2>Upload Resume</h2>

      <input type="file" />

      <br /><br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
}

export default UploadResume;