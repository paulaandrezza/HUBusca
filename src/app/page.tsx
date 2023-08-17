'use client';

import { FaGithub } from 'react-icons/fa';
import { Button } from './theme/sharedStyles';

export default function Home() {
  return (
    <main>
      <Button>
        <FaGithub />
        Helloooo
      </Button>
    </main>
  );
}
