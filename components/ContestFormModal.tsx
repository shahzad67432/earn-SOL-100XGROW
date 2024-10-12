"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTest } from '@/actions/contestActions';

const FormModal = ({ isOpen, onClose }: { isOpen: any, onClose: any }) => {
  const [title, setTitle] = useState<string | null>();
  const [desc, setDesc] = useState<string>();
  const [duration, setDuration] = useState<any>();
  const [questions, setQuestions] = useState<any>();
  const [thresholdValue, setThresholdValue] = useState<any>();
  const [type, setType] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const threshold = parseFloat(thresholdValue)
      const postTest = await createTest({
        title,
        description: desc,
        duration,
        questions,
        threshold,
        type,
        imageUrl,
      });

      if (postTest.success) {
        alert(postTest.message);
      }
    } catch (e) {
      console.log('error posting/creating a test', e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative overflow-hidden">
        {/* Floating objects */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <h2 className="text-2xl font-bold mb-4 text-center">Create the Test</h2>
        <p className="text-gray-600 mb-6 text-center">Create the contest type of test and set the threshold</p>

        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="p-2"
              placeholder="title of the contest"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="desc of the contest"
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="type of the contest"
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="threshold of the contest"
              onChange={(e) => setThresholdValue(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="imageUrl of the contest"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="number"
              placeholder="duration of the test"
              onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor=""></label>
            <input
              type="json"
              placeholder="questions"
              onChange={(e) => setQuestions(e.target.value)}
            />
            <button className="flex justify-center items-center p-2 bg-green-950 text-green-50" type="submit">
              Create Contest
            </button>
          </form>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default FormModal;
