
import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-zinc-400 py-6 border-t border-zinc-700">
      &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
    </footer>
  );
}
