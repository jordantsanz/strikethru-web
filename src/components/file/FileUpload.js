/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { useMemo } from 'react';
// import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { sendFile } from '../../actions';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function FileUpload(props) {
  const dispatch = useDispatch();
  const {
    acceptedFiles, getRootProps, getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ maxFiles: 1, accept: '.txt, .doc, .docx' });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isDragActive,
    isDragReject,
    isDragAccept,
  ]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const username = useSelector((state) => state.user.username);
  console.log('usernam!', username);

  const upload = () => {
    console.log('uploading');
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
    dispatch(sendFile(data, username));
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone', style })}>
        <input {...getInputProps()} />
        <p>Drag drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <button type="button" onClick={upload}>upload</button>
    </section>
  );
}
export default FileUpload;
