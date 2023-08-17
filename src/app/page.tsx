'use client';

import { SearchGitHubUser } from '@/components/SearchGitHubUser';

export default function Home() {
  return (
    <main style={{ width: '800px', margin: '160px 32px' }}>
      <SearchGitHubUser />
    </main>
  );
}
