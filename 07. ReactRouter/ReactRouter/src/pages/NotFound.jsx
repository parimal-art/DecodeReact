import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 text-red-500">
      <FaExclamationTriangle size={50} />
      <h1 className="text-3xl mt-4">404 - Page Not Found</h1>
    </div>
  );
}