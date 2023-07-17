import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px dashed #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedFileName, setDraggedFileName] = useState<string | null>(null);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setDraggedFileName(file.name);
    }
  };

  return (
    <div>
      <Container
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: isDragging ? '2px dashed #007bff' : '2px dashed #aaa' }}
      >
        {draggedFileName ? (
          <p>{draggedFileName}</p>
        ) : (
          <p>Drag and drop a file here</p>
        )}
      </Container>
    </div>
  );
};

export default DragAndDrop;
