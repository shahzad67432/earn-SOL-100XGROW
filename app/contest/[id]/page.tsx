"use client";
import { getTest } from '@/actions/test';
import Test from '@/components/TestInterface';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { id } = useParams();
  const testId = parseInt(id as string);
  const [test, setTest] = useState<any>(null); // State to hold the fetched test data
  const [loading, setLoading] = useState(true); // State for loading indication

  useEffect(() => {
    const fetchTest = async () => {
      const fetchedTest = await getTest(testId);
      if (!fetchedTest) {
        // Handle case where test is not found
        setTest(null);
      } else {
        setTest(fetchedTest);
      }
      setLoading(false); // Set loading to false after fetching
    };

    fetchTest();
  }, [testId]); // Dependency array includes testId to refetch when it changes

  const handleSubmit = (answers: number[]) => {
    // Handle submission of answers here
    console.log("Submitted answers:", answers);
  };

  // Display loading state or test data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!test) {
    return <div>Test not found</div>;
  }

  return (
    <div>
      <Test
        id={test.id}
        title={test.title}
        duration={test.duration}
        questions={test.questions}
        onSubmit={handleSubmit} // Pass the handleSubmit function here
      />
    </div>
  );
};

export default Page;
