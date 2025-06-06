import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm px-6 py-6 border-t border-zinc-800 text-zinc-500">
      &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
    </footer>
  );
}