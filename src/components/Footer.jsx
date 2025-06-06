import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-center py-6 border-t border-zinc-800 text-zinc-500 text-sm">
      &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
    </footer>
  );
}
