// pages/tests.tsx
"use client";

import React, { useEffect, useState } from "react";
import TestCard from "./TestCard"; // Assuming TestCard component exists
import { useRouter } from "next/navigation";
import { getTests } from "@/actions/test";
import { getUser } from "@/actions/user";
import { useSession } from "next-auth/react";

const PremiumTestPage = () => {
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
      // Check if the session or email is missing
    //   if (!session?.user?.email) {
    //     console.log("User email not found");
    //     return;
    //   }
    
      try {
        // Assuming getUser is an async function, you should await it
        if(!session || !session.user || !session.user.email){
          return ;
        }
        const user = await getUser(session?.user?.email);
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
      try {
        setLoading(true);
        const fetchedTests = await getTests();
        console.log(fetchedTests)
        if (fetchedTests && fetchedTests.length > 0) {
          setTests(fetchedTests); // Set tests if fetched
        } else {
          setTests([]); // Set an empty array if no tests are found
        }
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchUser();
    fetchTests();
  }, []);

  return (
    <div className="mt-12">
        <h3 className="text-2xl font-semibold text-green-950 mb-6">Popular Tests</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tests.map((test: any) => (
                <TestCard
                  key={test.id}
                  isContest={test.contest}
                  threshold={test.threshold}
                  isAdmin={true}
                  totalFee={test.totalFee}
                  paidUsers={test.paidUsers}
                  imageUrl={test.imageUrl}
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
            )
        )}
        </div>
    </div>
  );
};

export default PremiumTestPage;
