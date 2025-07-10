import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  iframeSrc: string;
  title?: string;
}

export const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  iframeSrc,
  title = "Content",
}) => {
  // Close overlay on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto"; // Restore scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Use createPortal to render the overlay at the document body level
  const overlayContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      style={{ zIndex: 2147483647 }}
    >
      <div className="relative w-[80vw] max-w-6xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden" style={{ zIndex: 2147483647 }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close overlay"
          >
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Iframe Content */}
        <div className="w-full h-full">
          <iframe
            src={iframeSrc}
            className="w-full h-full border-0"
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  );

  // Only render portal on client side to avoid hydration issues
  if (typeof window === 'undefined') return null;
  
  return createPortal(overlayContent, document.body);
};

export default Overlay; 