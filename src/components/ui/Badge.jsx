// components/ui/Badge.jsx
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full 
                  bg-gray-800/80 text-gray-200 
                  px-3 py-1 text-sm font-medium 
                  whitespace-nowrap
                  hover:bg-gray-700/90 
                  transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
}
