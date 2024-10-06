"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPerPostLearningContent } from '@/actions/LearnActions';
import { Loader2 } from 'lucide-react';

interface LearnContent {
  title: string;
  content: string;
  learnImage: string[];
}

const LearnChildPage: React.FC = () => {
  const [learn, setLearn] = useState<LearnContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchLearn = async () => {
      try {
        setLoading(true);
        const ID = parseInt(id as string);
        const res = await getPerPostLearningContent(ID);
        if (res.success && res.learn) {
          setLearn(res.learn);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLearn();

    // Custom cursor effect
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [id]);

  const splitContent = (content: string, chunkSize: number): string[] => {
    const contentArray = content.split(' ');
    const chunks = [];
    for (let i = 0; i < contentArray.length; i += chunkSize) {
      chunks.push(contentArray.slice(i, i + chunkSize).join(' '));
    }
    return chunks;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-50">
        <Loader2 className="animate-spin text-green-600 w-12 h-12" />
      </div>
    );
  }

  if (!learn) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-50">
        <p className="text-green-800 text-xl">Content not found</p>
      </div>
    );
  }

  const contentChunks = splitContent(learn.content, 150);
  const images = learn.learnImage || [];

  return (
    <div className="bg-green-50 min-h-screen relative overflow-hidden cursor-none pt-12 px-44">
      {/* Custom cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-8">{learn.title}</h1>
        
        {images[0] && (
          <div className="mb-12">
            <img src={images[0]} alt={learn.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <div className="space-y-12 pt-12">
          {contentChunks.map((chunk, index) => (
            <div key={index} className="mb-12">
              {index % 2 === 0 ? (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <p className="text-green-700 md:w-1/2 leading-relaxed">{chunk}</p>
                  {images[index + 1] && (
                    <img
                      src={images[index + 1]}
                      alt={`Image ${index + 1}`}
                      className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
                    />
                  )}
                </div>
              ) : (
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <p className="text-green-700 md:w-1/2 leading-relaxed">{chunk}</p>
                  {images[index + 1] && (
                    <img
                      src={images[index + 1]}
                      alt={`Image ${index + 1}`}
                      className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-green-700 mb-6 text-lg">Explore more topics to enhance your learning experience!</p>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 text-lg font-semibold shadow-md"
            onClick={() => router.push('/learn')}
          >
            Explore More
          </button>
        </div>
      </div>

      <style jsx global>{`
        .custom-cursor {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(34, 197, 94, 0.6);
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
          transform: translate(-50%, -50%);
        }

        .custom-cursor:hover {
          transform: translate(-50%, -50%) scale(1.5);
        }

        /* Hide the default cursor */
        body {
          cursor: none;
        }

        /* Show default cursor on interactive elements for better UX */
        a, button, input, textarea, select {
          cursor: auto;
        }
      `}</style>
    </div>
  );
};

export default LearnChildPage;