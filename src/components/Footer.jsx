import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto px-6 py-6 text-center text-zinc-500 border-t border-zinc-800 text-sm">
      &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
    </footer>
  );
}