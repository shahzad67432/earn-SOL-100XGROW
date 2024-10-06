const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create two users
  const user1 = await prisma.user.create({
    data: {
      name: 'Shahzad Ali',
      email: 'shaa1891640@gmail.com',
      premiumAccess: true,
      posts: {
        create: Array.from({ length: 10 }).map((_, index) => ({
          url: `https://posturl.com/post${index + 1}`,
        })),
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });

  // Create basic tests (free)
  const basicTest1 = await prisma.test.create({
    data: {
      description: 'Basic Test 1',
      duration: 60,
      questions: [
        { question: 'What is 2 + 2?', options: [2, 3, 4, 5], answer: 4 },
        { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Madrid'], answer: 'Paris' },
      ],
      title: 'Math & Geography Test',
      type: 'basic',
      fee: 0,
      isPremium: false,
    },
  });

  const basicTest2 = await prisma.test.create({
    data: {
      description: 'Basic Test 2',
      duration: 45,
      questions: [
        { question: 'What is the color of the sky?', options: ['Blue', 'Green', 'Yellow', 'Red'], answer: 'Blue' },
        { question: 'What is 10 x 10?', options: [50, 100, 150, 200], answer: 100 },
      ],
      title: 'Science & Math Test',
      type: 'basic',
      fee: 0,
      isPremium: false,
    },
  });

  // Create premium tests
  const premiumTests = await Promise.all([
    prisma.test.create({
      data: {
        description: 'Premium Test 1',
        duration: 90,
        questions: [
          { question: 'Solve x: 2x + 3 = 7', options: [1, 2, 3, 4], answer: 2 },
          { question: 'What is the capital of Japan?', options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'], answer: 'Tokyo' },
        ],
        title: 'Algebra & Geography Test',
        type: 'premium',
        fee: 10.5,
        isPremium: true,
      },
    }),
    prisma.test.create({
      data: {
        description: 'Premium Test 2',
        duration: 75,
        questions: [
          { question: 'What is the speed of light?', options: ['299,792,458 m/s', '100,000 km/h', '1,000,000 m/s', '1,000 km/h'], answer: '299,792,458 m/s' },
          { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Hemingway', 'Faulkner', 'Tolstoy'], answer: 'Shakespeare' },
        ],
        title: 'Physics & Literature Test',
        type: 'premium',
        fee: 12.0,
        isPremium: true,
      },
    }),
    prisma.test.create({
      data: {
        description: 'Premium Test 3',
        duration: 60,
        questions: [
          { question: 'What is the formula for water?', options: ['H2O', 'CO2', 'NaCl', 'O2'], answer: 'H2O' },
          { question: 'What is 5 x 5?', options: [10, 15, 25, 30], answer: 25 },
        ],
        title: 'Chemistry & Math Test',
        type: 'premium',
        fee: 8.5,
        isPremium: true,
      },
    }),
    prisma.test.create({
      data: {
        description: 'Premium Test 4',
        duration: 90,
        questions: [
          { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cell Membrane'], answer: 'Mitochondria' },
          { question: 'What is 8 / 2?', options: [2, 4, 6, 8], answer: 4 },
        ],
        title: 'Biology & Math Test',
        type: 'premium',
        fee: 15.0,
        isPremium: true,
      },
    }),
  ]);

  // Create leaderboards for basic tests
  await prisma.leaderboard.createMany({
    data: [
      {
        userId: user1.id,
        testId: basicTest1.id,
        highestScore: 100,
      },
      {
        userId: user2.id,
        testId: basicTest1.id,
        highestScore: 80,
      },
      {
        userId: user1.id,
        testId: basicTest2.id,
        highestScore: 95,
      },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
