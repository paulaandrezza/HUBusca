'use client';

import { SearchBar } from '@/components/SearchBar';
import { Select } from '@/components/Select';
import options from '@/utils/options.json';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button } from './theme/sharedStyles';

export default function Home() {
  const [currentProfile, setCurrentProfile] = useState('');

  return (
    <main
      style={{
        display: 'flex',
        margin: '50px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>
        <FaGithub />
        Helloooo
      </Button>
      <Select options={options} placeholder="Linguagem" />
      <SearchBar
        value={currentProfile}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentProfile(e.target.value)
        }
      />
    </main>
  );
}
