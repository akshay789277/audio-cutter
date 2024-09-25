"use client"; // This component uses hooks and must be a client component

import { useState, useEffect } from 'react';
import { Container, Text, FileInput, Button, Group, Card, Loader } from '@mantine/core';

export default function HomePage() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Custom Header */}
      <Container size="md" mt={20}>
      <Text size="lg" align="center">

          Audio Cutter Tool
        </Text>
      </Container>

      {/* Main Content */}
      <Container size="md" mt={50}>
        {isLoaded ? (
          <>
            <Text align="center" size="xl">Upload your audio file</Text>
            <FileInput
              placeholder="Select audio file"
              accept="audio/*"
              value={audioFile}
              onChange={setAudioFile}
            />

            {audioFile && <AudioPlayer file={audioFile} />}
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
}

// Component to display the audio player and options to cut
function AudioPlayer({ file }: { file: File }) {
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);

  const handleCut = () => {
    console.log('Cutting audio from', startTime, 'to', endTime);
    // Cutting functionality goes here using Web Audio API
  };

  return (
    <Card shadow="sm" mt={20}>
      <Text>{file.name}</Text>
      <audio controls>
        <source src={URL.createObjectURL(file)} type={file.type} />
      </audio>

      <Group position="center" mt="md">
        <Text>Start Time: </Text>
        <input
          type="number"
          min="0"
          value={startTime}
          onChange={(e) => setStartTime(Number(e.target.value))}
        />
        <Text>End Time: </Text>
        <input
          type="number"
          min="0"
          value={endTime}
          onChange={(e) => setEndTime(Number(e.target.value))}
        />
      </Group>

      <Button fullWidth mt="md" onClick={handleCut}>
        Cut Audio
      </Button>
    </Card>
  );
}
