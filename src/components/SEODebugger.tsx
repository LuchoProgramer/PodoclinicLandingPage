"use client";

import { useState } from 'react';
import { getAllDescriptions, validateUniqueDescriptions } from '@/data/seo-metadata';

export default function SEODebugger() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const allDescriptions = getAllDescriptions();
  const isUnique = validateUniqueDescriptions();
  const descriptions = Object.values(allDescriptions);
  const duplicates = descriptions.filter((desc, index) => descriptions.indexOf(desc) !== index);
  const uniqueDuplicates = Array.from(new Set(duplicates));

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`px-4 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 ${
          isUnique 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
        }`}
      >
        SEO {isUnique ? '✅' : '⚠️'} ({Object.keys(allDescriptions).length})
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 w-96 max-h-96 overflow-y-auto bg-white rounded-lg shadow-2xl border p-4 text-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">SEO Meta Descriptions</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="mb-4 p-3 rounded-lg bg-gray-50">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-medium">Total páginas:</div>
                <div className="text-lg font-bold text-blue-600">
                  {Object.keys(allDescriptions).length}
                </div>
              </div>
              <div>
                <div className="font-medium">Descriptions únicas:</div>
                <div className={`text-lg font-bold ${
                  isUnique ? 'text-green-600' : 'text-red-600'
                }`}>
                  {new Set(Object.values(allDescriptions)).size}
                </div>
              </div>
            </div>
          </div>

          {!isUnique && uniqueDuplicates.length > 0 && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">⚠️ Duplicados encontrados:</h4>
              {uniqueDuplicates.map((desc, index) => {
                const pagesWithDuplicate = Object.entries(allDescriptions)
                  .filter(([, pageDesc]) => pageDesc === desc)
                  .map(([page]) => page);
                
                return (
                  <div key={index} className="mb-3 p-2 bg-red-100 rounded text-xs">
                    <div className="font-medium text-red-900 mb-1">
                      Páginas: {pagesWithDuplicate.join(', ')}
                    </div>
                    <div className="text-red-700 italic">
                      "{desc.substring(0, 100)}..."
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="max-h-48 overflow-y-auto">
            <h4 className="font-bold mb-2">Todas las páginas:</h4>
            {Object.entries(allDescriptions).map(([page, description]) => (
              <div key={page} className="mb-2 p-2 bg-gray-50 rounded text-xs">
                <div className="font-medium text-blue-800">{page}</div>
                <div className="text-gray-600 italic">
                  "{description.substring(0, 80)}..."
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}