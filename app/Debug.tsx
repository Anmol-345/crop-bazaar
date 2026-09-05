import { useEffect } from 'react';
export default function Debug() {
  useEffect(() => {
    const div = document.createElement('div');
    div.className = 'max-w-2xl w-full max-w-7xl';
    document.body.appendChild(div);
    console.log('max-w-2xl:', getComputedStyle(div).maxWidth);
    div.className = 'max-w-7xl';
    console.log('max-w-7xl:', getComputedStyle(div).maxWidth);
    document.body.removeChild(div);
  }, []);
  return null;
}
