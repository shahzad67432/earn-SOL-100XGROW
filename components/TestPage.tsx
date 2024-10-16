// pages/tests.tsx
"use client";

import React, { useEffect, useState } from "react";
import TestCard from "./TestCard"; // Assuming TestCard component exists
import { useRouter } from "next/navigation";
import { getTests } from "@/actions/test";
import { getUser } from "@/actions/user";
import { useSession } from "next-auth/react";
import TestPageLoading from "./loading/TestPageLoading";

const TestPage = ({type}:{type: string}) => {
  const router = useRouter();
  const [tests, setTests] = useState<any[]>([]); // Use an array, not null
  const [loading, setLoading] = useState(false); // Set loading state
  const [user, setUser] = useState<any>({}); // Use an object, not null
  const {data: session} = useSession()

  const handleTestClick = (type: string, id: number) => {
    // Redirect to the test page based on the type of test
    router.push(`/contest/${id}`);
    console.log(`Starting ${type} test`);
  };

  useEffect(() => {
    const fetchUser = async () => {
      console.log("session", session);
      console.log("session email from fetch user", session?.user?.email);
    
      // Check if the session or email is missing
      if (!session?.user?.email) {
        console.log("User email not found");
        return;
      }
    
      try {
        // Assuming getUser is an async function, you should await it
        const user = await getUser(session.user.email);
        
        // Check if the user was found
        console.log("user found", user);
        setUser(user);  // Assuming setUser is a state setter function
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    const fetchTests = async () => {
      setLoading(true)
      try {
        const fetchedTests = await getTests();
        console.log("fetched tests",fetchedTests)
        if (fetchedTests && fetchedTests.length > 0) {
          setTests(fetchedTests); // Set tests if fetched
          setLoading(false);
        } else {
          setTests([]); // Set an empty array if no tests are found
        }
        setLoading(false); // Set loading to false once fetching is done
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      }
    };

    fetchUser();
    fetchTests();
  }, [session]);

  // Loading state handling
  if (loading) {
    return <div> <TestPageLoading/> </div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tests
          .filter((test) => ( test.type === type))
          .map((test, idx) =>(
            <div key={idx}>
              {test.type === type && 
                <TestCard
                  key={test.id}
                  threshold={test.threshold}
                  isContest={test.isContest}
                  isAdmin={true}
                  imageUrl={test.imageUrl}
                  totalFee={test.totalFee}
                  paidUsers={test.paidUsers}
                  fee={test.fee}
                  testId={test.id}
                  userId={user.id}
                  isPremium={test.isPremium}
                  premiumAccess={user.premiumAccess}
                  title={test.title}
                  description={test.description}
                  questions={test.questions.length}
                  duration={test.duration}
                  type={test.type}
                  onClick={() => handleTestClick(test.type, test.id)}
                />
              }
           </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
