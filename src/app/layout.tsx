import { MantineProvider } from '@mantine/core';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
     
      
      theme={{
        // Specify colorScheme and primaryColor directly
       
        primaryColor: 'blue',
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </MantineProvider>
  );
}
