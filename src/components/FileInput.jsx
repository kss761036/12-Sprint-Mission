function FileInput({ name, onChange }) {
  const handleFileChange = (e) => {
    onChange(name, e.target.files[0]);
    console.log(e.target.files);
  };

  return <input type="file" name="{name}" id="add_img" onChange={handleFileChange} />;
}

export default FileInput;
