const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create two users

  const basicTests = [
    {
      title: "Solana Fundamentals",
      description: "Test your knowledge of Solana basics",
      duration: 12,
      imageUrl: "https://serokell.io/files/au/auku16b.Solana_Smart_Contract_Development_pic2.jpg",
      type: "basic",
      isPremium: false,
      questions: [
        {
          question: "What is the native token of Solana?",
          options: ["SOL", "ETH", "BTC", "ADA"],
          correctAnswer: 0
        },
        {
          question: "Which consensus mechanism does Solana use?",
          options: ["Proof of History", "Proof of Work", "Proof of Stake", "Delegated Proof of Stake"],
          correctAnswer: 0
        },
        {
          question: "What is the average block time on Solana?",
          options: ["400 milliseconds", "1 second", "10 seconds", "1 minute"],
          correctAnswer: 0
        },
        {
          question: "Who founded Solana?",
          options: ["Anatoly Yakovenko", "Vitalik Buterin", "Changpeng Zhao", "Gavin Wood"],
          correctAnswer: 0
        },
        {
          question: "In which year was Solana launched?",
          options: ["2017", "2018", "2019", "2020"],
          correctAnswer: 2
        },
        {
          question: "What programming language is primarily used for Solana development?",
          options: ["Rust", "JavaScript", "Solidity", "Python"],
          correctAnswer: 0
        },
        {
          question: "What is Solana's primary focus in the blockchain space?",
          options: ["High scalability", "Privacy", "Interoperability", "Governance"],
          correctAnswer: 0
        },
        {
          question: "What is the name of Solana's main network?",
          options: ["Mainnet Beta", "Solana Prime", "Sol-1", "Genesis"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Ecosystem",
      description: "Explore the Solana ecosystem and its projects",
      duration: 20,
      imageUrl: "https://img.freepik.com/free-vector/data-safe-storage-center-isometric-composition-illustration_1284-55932.jpg?t=st=1728208990~exp=1728212590~hmac=808ffd54c3ef5c2635e0ef3c60cbec10e1531143a3f952013af2a4340f61cfa5&w=1480",
      type: "basic",
      isPremium: false,
      questions: [
        {
          question: "Which decentralized exchange is native to Solana?",
          options: ["Serum", "Uniswap", "PancakeSwap", "SushiSwap"],
          correctAnswer: 0
        },
        {
          question: "What is the name of Solana's token standard for fungible tokens?",
          options: ["SPL", "ERC-20", "BEP-20", "TRC-20"],
          correctAnswer: 0
        },
        {
          question: "Which Solana-based lending protocol allows users to earn interest on deposits?",
          options: ["Solend", "Aave", "Compound", "MakerDAO"],
          correctAnswer: 0
        },
        {
          question: "What is the name of Solana's popular NFT marketplace?",
          options: ["Magic Eden", "OpenSea", "Rarible", "Nifty Gateway"],
          correctAnswer: 0
        },
        {
          question: "Which stablecoin project is native to the Solana ecosystem?",
          options: ["USDC", "Tether", "DAI", "Binance USD"],
          correctAnswer: 0
        },
        {
          question: "What is the name of Solana's hackathon series?",
          options: ["Solana Hackathon", "Solana Breakpoint", "Solana Ignition", "Solana Wormhole"],
          correctAnswer: 2
        },
        {
          question: "Which Solana wallet is developed by the Solana Foundation?",
          options: ["Phantom", "Solflare", "Sollet", "Coin98"],
          correctAnswer: 2
        },
        {
          question: "What is the name of Solana's decentralized domain name service?",
          options: ["Bonfida", "ENS", "Unstoppable Domains", "Handshake"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Technical Features",
      description: "Dive into the technical aspects of Solana",
      duration: 10,
      imageUrl: "https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/04/solana-tech-gID_7.png@webp",
      type: "basic",
      isPremium: false,
      questions: [
        {
          question: "What is the name of Solana's parallel smart contract runtime?",
          options: ["Sealevel", "Tsunami", "Avalanche", "Tornado"],
          correctAnswer: 0
        },
        {
          question: "Which feature allows Solana to achieve high throughput?",
          options: ["Tower BFT", "Sharding", "Plasma", "Rollups"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of Solana's Gulf Stream feature?",
          options: ["Mempool management", "Consensus", "Data storage", "Token creation"],
          correctAnswer: 0
        },
        {
          question: "Which Solana feature enables efficient state management?",
          options: ["Cloudbreak", "Turbine", "Pipelining", "Archivers"],
          correctAnswer: 0
        },
        {
          question: "What is the maximum theoretical TPS (Transactions Per Second) of Solana?",
          options: ["65,000", "50,000", "100,000", "1,000,000"],
          correctAnswer: 0
        },
        {
          question: "Which cryptographic technique does Solana use for transaction verification?",
          options: ["Ed25519", "SHA-256", "Keccak", "RIPEMD-160"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of Solana's Turbine protocol?",
          options: ["Block propagation", "Token staking", "Governance voting", "Oracle data feeding"],
          correctAnswer: 0
        },
        {
          question: "Which programming model does Solana use for its smart contracts?",
          options: ["Programs", "Smart Contracts", "DApps", "Scripts"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Tokenomics",
      description: "Understand the economic model of Solana",
      duration: 8,
      imageUrl: "https://coinguides.org/wp-content/uploads/2021/04/solana-custom-tokens.jpg",
      type: "basic",
      isPremium: false,
      questions: [
        {
          question: "What was the initial supply of SOL tokens at mainnet launch?",
          options: ["500 million", "1 billion", "10 billion", "Unlimited"],
          correctAnswer: 0
        },
        {
          question: "What percentage of transaction fees are burned in Solana?",
          options: ["50%", "100%", "75%", "25%"],
          correctAnswer: 1
        },
        {
          question: "What is the primary purpose of staking SOL tokens?",
          options: ["Secure the network", "Earn interest", "Governance voting", "Token burning"],
          correctAnswer: 0
        },
        {
          question: "How often are staking rewards distributed on Solana?",
          options: ["Every epoch", "Daily", "Weekly", "Monthly"],
          correctAnswer: 0
        },
        {
          question: "What is the minimum stake amount required to become a Solana validator?",
          options: ["1 SOL", "100 SOL", "1000 SOL", "No minimum"],
          correctAnswer: 3
        },
        {
          question: "What is the current inflation rate of Solana (as of 2023)?",
          options: ["~5%", "~10%", "~15%", "0%"],
          correctAnswer: 0
        },
        {
          question: "How does Solana's inflation rate change over time?",
          options: ["Decreases", "Increases", "Stays constant", "Fluctuates randomly"],
          correctAnswer: 0
        },
        {
          question: "What is the primary use of SOL tokens in the Solana ecosystem?",
          options: ["Pay transaction fees", "Governance", "Collateral", "Data storage"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Development",
      description: "Test your knowledge of Solana development basics",
      duration: 10,
      imageUrl: "https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?t=st=1728209453~exp=1728213053~hmac=6bc445708ced59230951eec163930cea353005c8a16cd00e45345389e57e729b&w=1060",
      type: "basic",
      isPremium: false,
      questions: [
        {
          question: "What is the primary IDE used for Solana development?",
          options: ["Anchor", "Remix", "Truffle", "Hardhat"],
          correctAnswer: 0
        },
        {
          question: "Which command-line tool is used to interact with Solana programs?",
          options: ["Solana CLI", "npm", "cargo", "yarn"],
          correctAnswer: 0
        },
        {
          question: "What is the name of Solana's web3 JavaScript API?",
          options: ["@solana/web3.js", "ethers.js", "web3.js", "solana.js"],
          correctAnswer: 0
        },
        {
          question: "Which of these is NOT a Solana cluster?",
          options: ["Mainnet", "Testnet", "Devnet", "Localnet"],
          correctAnswer: 3
        },
        {
          question: "What is the purpose of the Solana Program Library (SPL)?",
          options: ["Provide on-chain programs", "Manage validators", "Handle transactions", "Store user data"],
          correctAnswer: 0
        },
        {
          question: "Which of these is a popular Solana wallet adapter?",
          options: ["@solana/wallet-adapter-react", "@solana/wallet-connect", "@solana/metamask", "@solana/phantom-adapter"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of the 'solana-test-validator' command?",
          options: ["Run a local Solana cluster", "Validate transactions", "Test smart contracts", "Generate keypairs"],
          correctAnswer: 0
        },
        {
          question: "Which file format is used to define the structure of Solana accounts?",
          options: [".idl", ".sol", ".rs", ".js"],
          correctAnswer: 0
        }
      ]
    }
  ];


  const premiumTests = [
    {
      title: "Advanced Solana Programming",
      description: "Deep dive into Solana smart contract development",
      duration: 12,
      imageUrl: "https://dsb.edu.in/wp-content/uploads/2023/08/Understanding-DeFi-The-New-Way-of-Finance.jpg",
      type: "premium",
      isPremium: true,
      fee: 0.0002,
      questions: [
        {
          question: "What is the purpose of the 'entrypoint!' macro in Solana programs?",
          options: ["Define the program's entry point", "Create a new account", "Initialize a token", "Handle errors"],
          correctAnswer: 0
        },
        {
          question: "Which crate is commonly used for serialization and deserialization in Solana programs?",
          options: ["borsh", "serde", "bincode", "postcard"],
          correctAnswer: 0
        },
        {
          question: "What is the maximum size of a Solana transaction?",
          options: ["1232 bytes", "1024 bytes", "2048 bytes", "4096 bytes"],
          correctAnswer: 0
        },
        {
          question: "Which of these is NOT a valid Solana account type?",
          options: ["Program-derived Address (PDA)", "System Account", "Token Account", "Smart Contract Account"],
          correctAnswer: 3
        },
        {
          question: "What is the purpose of the 'rent_exempt' parameter in Solana account creation?",
          options: ["Ensure account isn't purged", "Set account permissions", "Define account owner", "Limit account size"],
          correctAnswer: 0
        },
        {
          question: "Which instruction is used to create a new token mint in Solana?",
          options: ["InitializeMint", "CreateMint", "NewToken", "MintInitialize"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of the 'invoke_signed' function in Solana programs?",
          options: ["Call another program with a PDA", "Sign a transaction", "Verify a signature", "Create a new keypair"],
          correctAnswer: 0
        },
        {
          question: "Which of these is a correct way to define a Solana program in Rust?",
          options: [
            "use solana_program::entrypoint;",
            "solana::program::main();",
            "#[program] mod myprogram { ... }",
            "fn solana_main() { ... }"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the purpose of the 'space' parameter when creating a new account?",
          options: ["Allocate account data size", "Set account balance", "Define account type", "Specify rent exemption"],
          correctAnswer: 0
        },
        {
          question: "Which Rust attribute is used to derive the AnchorSerialize and AnchorDeserialize traits?",
          options: ["#[derive(AnchorSerialize, AnchorDeserialize)]", "#[anchor_traits]", "#[solana::serialize]", "#[program::anchor]"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana DeFi Mechanics",
      description: "Explore the intricacies of Decentralized Finance on Solana",
      duration: 15,
      imageUrl: "https://cdn.prod.website-files.com/634054c00f602044abb3060d/655b97df0bfd8a797d32ed92_Solana%20a%20Good%20Investment.webp",
      type: "premium",
      isPremium: true,
      fee: 0.0001,
      questions: [
        {
          question: "What is the primary advantage of Solana for DeFi applications?",
          options: ["High throughput and low fees", "Smart contract flexibility", "Cross-chain compatibility", "Privacy features"],
          correctAnswer: 0
        },
        {
          question: "Which Solana DeFi protocol allows for decentralized perpetual futures trading?",
          options: ["Mango Markets", "Raydium", "Orca", "Serum"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of liquidity pools in Solana DeFi?",
          options: ["Facilitate token swaps", "Store user funds", "Execute smart contracts", "Validate transactions"],
          correctAnswer: 0
        },
        {
          question: "Which Solana feature enables atomic composability in DeFi applications?",
          options: ["Single-block transactions", "Proof of History", "Gulf Stream", "Sealevel"],
          correctAnswer: 0
        },
        {
          question: "What is the role of the 'Loan-to-Value' (LTV) ratio in Solana lending protocols?",
          options: ["Determine collateral requirements", "Set interest rates", "Calculate rewards", "Measure network congestion"],
          correctAnswer: 0
        },
        {
          question: "Which Solana DeFi protocol introduced the concept of 'concentrated liquidity'?",
          options: ["Orca", "Raydium", "Serum", "Saber"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of 'yield farming' in Solana DeFi?",
          options: ["Earn additional rewards", "Create new tokens", "Increase transaction speed", "Reduce gas fees"],
          correctAnswer: 0
        },
        {
          question: "Which Solana DeFi protocol allows users to create synthetic assets?",
          options: ["Synthetify", "Mirror Protocol", "Ampleforth", "UMA"],
          correctAnswer: 0
        },
        {
          question: "What is the primary function of Solana's 'Token Swap' program?",
          options: ["Enable token exchanges", "Create new tokens", "Manage token accounts", "Burn tokens"],
          correctAnswer: 0
        },
        {
          question: "Which consensus mechanism does Serum, a Solana-based DEX, use for order matching?",
          options: ["CLOB (Central Limit Order Book)", "AMM (Automated Market Maker)", "RFQ (Request for Quote)", "Dutch Auction"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana NFT Ecosystem",
      description: "Dive into the world of Non-Fungible Tokens on Solana",
      duration: 10,
      imageUrl: "https://strapi-public-bucket.s3.amazonaws.com/medium_Tab_Trader_Academy_Proof_of_Stake_Po_S_4fe49f5e4e.png",
      type: "premium",
      isPremium: true,
      fee: 0.0003,
      questions: [
        {
          question: "What standard is used for NFTs on Solana?",
          options: ["Metaplex Token Standard", "ERC-721", "ERC-1155", "SPL-721"],
          correctAnswer: 0
        },
        {
          question: "Which Solana program is commonly used for creating and managing NFTs?",
          options: ["Token Metadata Program", "NFT Creator", "Solana Art", "Token Minter"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of the Metaplex Candy Machine?",
          options: ["Facilitate NFT minting", "Create artwork", "Store NFT metadata", "Trade NFTs"],
          correctAnswer: 0
        },
        {
          question: "Which file system is commonly used to store Solana NFT metadata?",
          options: ["Arweave", "IPFS", "Filecoin", "Storj"],
          correctAnswer: 0
        },
        {
          question: "What is the maximum size of on-chain metadata for a Solana NFT?",
          options: ["10KB", "100KB", "1MB", "Unlimited"],
          correctAnswer: 1
        },
        {
          question: "Which Solana wallet is specifically designed for NFT collectors?",
          options: ["Phantom", "Solflare", "Sollet", "Math Wallet"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of the 'update authority' in Solana NFTs?",
          options: ["Modify NFT metadata", "Transfer NFT ownership", "Burn the NFT", "Create new NFTs"],
          correctAnswer: 0
        },
        {
          question: "Which Solana NFT marketplace introduced the concept of 'programmable NFTs'?",
          options: ["Magic Eden", "Solanart", "DigitalEyes", "Solsea"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of 'royalties' in Solana NFT sales?",
          options: ["Provide ongoing revenue to creators", "Pay network fees", "Fund NFT development", "Incentivize buyers"],
          correctAnswer: 0
        },
        {
          question: "Which Solana tool is used for verifying the authenticity of NFT collections?",
          options: ["Metaplex Certified Collections", "SolScan", "Solana Explorer", "NFT Auditor"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Governance and Tokenomics",
      description: "Understand the governance model and advanced tokenomics of Solana",
      duration: 20,
      imageUrl: "https://datanatives.io/wp-content/uploads/2022/08/Imagen1.jpg",
      type: "premium",
      isPremium: true,
      fee: 0.0002,
      questions: [
        {
          question: "What is the primary governance mechanism for the Solana network?",
          options: ["Solana Foundation", "DAO", "Validator voting", "Token holder voting"],
          correctAnswer: 0
        },
        {
          question: "How are major protocol upgrades implemented in Solana?",
          options: ["Hard forks", "Soft forks", "On-chain voting", "Solana Improvement Proposals (SIPs)"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of the 'inflation schedule' in Solana's tokenomics?",
          options: ["Control token supply growth", "Set transaction fees", "Determine staking rewards", "Regulate validator participation"],
          correctAnswer: 0
        },
        {
          question: "How does Solana's inflation rate change over time?",
          options: ["Disinflationary", "Inflationary", "Fixed", "Deflationary"],
          correctAnswer: 0
        },
        {
          question: "What percentage of newly minted SOL tokens are allocated to staking rewards?",
          options: ["100%", "95%", "80%", "50%"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of 'stake concentration' in Solana's consensus?",
          options: ["Prevent centralization", "Increase network speed", "Reduce transaction costs", "Improve security"],
          correctAnswer: 0
        },
        {
          question: "How are validator rewards distributed in Solana?",
          options: ["Per epoch", "Daily", "Weekly", "Monthly"],
          correctAnswer: 0
        },
        {
          question: "What is the role of the 'leader schedule' in Solana's consensus?",
          options: ["Determine block producers", "Set transaction fees", "Manage token supply", "Control inflation rate"],
          correctAnswer: 0
        },
        {
          question: "How does Solana handle 'slashing' for validator misbehavior?",
          options: ["No slashing mechanism", "Burn staked tokens", "Temporary stake lockup", "Permanent validator ban"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of 'vote credits' in Solana's staking mechanism?",
          options: ["Measure validator participation", "Determine transaction priority", "Calculate inflation rate", "Control token minting"],
          correctAnswer: 0
        }
      ]
    },
    {
      title: "Solana Security and Best Practices",
      description: "Learn about security considerations and best practices for Solana development",
      duration: 16,
      imageUrl: "https://img.step.finance/unsafe/s-1500/plain/https%3A%2F%2Fsf-cms.step.finance%2Fassets%2F625dd197-71e0-4850-ad78-88efad7df17c",
      type: "premium",
      isPremium: true,
      fee: 0.0002,
      questions: [
        {
          question: "What is the purpose of the 'rent' mechanism in Solana?",
          options: ["Prevent state bloat", "Fund validators", "Increase transaction speed", "Manage token supply"],
          correctAnswer: 0
        },
        {
          question: "Which Solana program is responsible for managing system-level operations?",
          options: ["System Program", "Token Program", "Stake Program", "Vote Program"],
          correctAnswer: 0
        },
        {
          question: "What is the primary purpose of Program Derived Addresses (PDAs) in Solana?",
          options: ["Deterministic account creation", "Increase program speed", "Manage user wallets", "Store large data"],
          correctAnswer: 0
        },
        {
          question: "How does Solana prevent the 'double-spending' problem?",
          options: ["Proof of History", "Proof of Stake", "Proof of Work", "Sharding"],
          correctAnswer: 0
        },
        {
          question: "What is the recommended way to handle errors in Solana programs?",
          options: ["Custom error enums", "Panic macro", "Result type", "Exception handling"],
          correctAnswer: 0
        },
        {
          question: "Which of these is a best practice for Solana program security?",
          options: ["Validate all inputs", "Use unsafe Rust", "Store private keys on-chain", "Ignore rent exemption"],
          correctAnswer: 0
        },
        {
          question: "What is the purpose of the 'SignerSeeds' in Solana transactions?",
          options: ["Generate PDAs", "Create new accounts", "Sign messages", "Encrypt data"],
          correctAnswer: 0
        },
        {
          question: "How does Solana handle program upgrades to maintain security?",
          options: ["Upgradeable BPF loaders", "Hard forks", "Manual redeployment", "Automatic updates"],
          correctAnswer: 0
        },
        {
          question: "What is the recommended way to store large amounts of data in Solana?",
          options: ["Off-chain with on-chain hash", "Multiple accounts", "Single large account", "Compression on-chain"],
          correctAnswer: 0
        },
        {
          question: "Which of these is NOT a valid method to prevent reentrancy attacks in Solana?",
          options: ["Using locks", "Check-effects-interactions pattern", "Function modifiers", "PDA management"],
          correctAnswer: 2
        }
      ]
    },
    {
      title: "Solana Interoperability and Cross-Chain Solutions",
      description: "Explore Solana's ecosystem integrations and cross-chain capabilities",
      duration: 30,
      imageUrl: "https://www.datocms-assets.com/84319/1709123804-decentralizedmaxarticlecover.jpg",
      type: "premium",
      isPremium: true,
      fee: 0.0002,
      questions: [
        {
          question: "What is the primary purpose of Wormhole in the Solana ecosystem?",
          options: ["Cross-chain asset transfers", "Layer 2 scaling", "NFT marketplace", "Decentralized exchange"],
          correctAnswer: 0
        },
        {
          question: "Which protocol allows Ethereum assets to be used on Solana?",
          options: ["Portal Bridge", "Avalanche Bridge", "Polygon Bridge", "Cosmos IBC"],
          correctAnswer: 0
        },
        {
          question: "What is the role of Sollet in Solana's interoperability?",
          options: ["Wrapped asset issuance", "Cross-chain messaging", "Decentralized oracle", "Layer 2 rollup"],
          correctAnswer: 0
        },
        {
          question: "Which project aims to bring Bitcoin to Solana?",
          options: ["Wrapped Bitcoin (WBTC)", "renBTC", "tBTC", "sBTC"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of the Allbridge protocol in relation to Solana?",
          options: ["Multi-chain transfers", "Layer 2 scaling", "Decentralized lending", "NFT bridging"],
          correctAnswer: 0
        },
        {
          question: "Which Solana native stablecoin has multi-chain support?",
          options: ["USDC", "USDT", "DAI", "BUSD"],
          correctAnswer: 0
        },
        {
          question: "What technology does Wormhole use for cross-chain communication?",
          options: ["Guardian network", "Relay chain", "Atomic swaps", "State channels"],
          correctAnswer: 0
        },
        {
          question: "Which of these is NOT a supported blockchain in Solana's cross-chain ecosystem?",
          options: ["Ethereum", "Binance Smart Chain", "Avalanche", "Ripple"],
          correctAnswer: 3
        },
        {
          question: "What is the purpose of the 'Token Bridge' in Wormhole?",
          options: ["Transfer tokens between chains", "Create new tokens", "Burn tokens", "Stake tokens"],
          correctAnswer: 0
        },
        {
          question: "Which project provides oracle services for Solana, enabling off-chain data access?",
          options: ["Pyth Network", "Chainlink", "Band Protocol", "API3"],
          correctAnswer: 0
        }
      ]
    },
  ];

  async function main() {
    // Create basic tests
    for (const test of basicTests) {
      await prisma.test.create({
        data: {
          title: test.title,
          description: test.description,
          duration: test.duration,
          imageUrl: test.imageUrl,
          type: test.type,
          isPremium: test.isPremium,
          questions: test.questions
        }
      });
    }
  
    console.log('Basic tests seeding finished.');

    for (const test of premiumTests) {
      await prisma.test.create({
        data: {
          title: test.title,
          description: test.description,
          duration: test.duration,
          imageUrl: test.imageUrl,
          type: test.type,
          isPremium: test.isPremium,
          fee: test.fee,
          questions: test.questions
        }
      });
    }
  
    console.log('Premium tests seeding finished.');

  }
  main()

  // Create earnings for each test
  for (let i = 0; i < 6; i++) {
    const test = premiumTests[i];
    const earningAmount = (test.fee ?? 0) * 10; // Use nullish coalescing in case fee is null

    await prisma.earning.create({
      data: {
        userId: 1,
        title: test.title,
        totalEarnings: earningAmount,
        month: new Date(2024, i, 1) // This will create earnings for Jan, Feb, Mar, Apr, May 2024
      }
    });

    console.log(`Created earning for test: ${test.title}`);
  }

  console.log('Earnings seeding finished.');

  const learnData = [
    {
      title: 'Introduction to Solana Blockchain',
      learnImage: [
        'https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-Solana-800x533.png',
        'https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Solana is a fast, decentralized, and scalable blockchain platform that utilizes a proof-of-stake (PoS) consensus algorithm. 
        It was founded in 2017 by Anatoly Yakovenko and is known for its high transaction throughput and low latency.
  
        Solana's architecture is designed to support high-performance applications and provides a robust platform for building decentralized applications (dApps). 
        The platform uses a novel consensus algorithm called Proof of History (PoH), which allows for faster transaction processing times.
  
        Solana has gained significant attention in recent years due to its impressive performance metrics, including:
        - Block time: 400 milliseconds
        - Block size: 20 transactions
        - Transaction throughput: 65,000 transactions per block
        - Scalability: Supports up to 1,000,000 transactions per second
  
        The Solana ecosystem is growing rapidly, with various use cases emerging in areas such as decentralized finance (DeFi), gaming, and social media.
      `,
      type: 'Beginner',
    },
    {
      title: 'Understanding Solana\'s Consensus Algorithm',
      learnImage: [
        'https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Solana's consensus algorithm is based on proof-of-stake (PoS), which is an energy-efficient alternative to traditional proof-of-work (PoW) algorithms. 
        This allows Solana to process transactions quickly and securely.
  
        The algorithm works as follows:
        1. Validators are selected to create new blocks based on their staked tokens.
        2. Each validator creates a new block and broadcasts it to the network.
        3. The network verifies the block and updates the blockchain.
  
        Solana's consensus algorithm provides several benefits, including:
        - Energy efficiency: Reduces energy consumption compared to traditional PoW algorithms.
        - Scalability: Supports high transaction throughput and fast block times.
        - Security: Provides robust security features to protect against attacks.
      `,
      type: 'Beginner',
    },
    {
      title: 'Getting Started with Solana Wallet',
      learnImage: [
        'https://img.freepik.com/free-vector/web-3-0-technology-isometric-with-blockchain-process-vector-illustration_1284-75508.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        The Solana wallet is a crucial tool for interacting with the Solana blockchain. 
        It allows users to store, send, and receive SOL tokens, as well as interact with decentralized applications (dApps).
  
        Popular Solana wallets include:
        - Phantom Wallet
        - Solflare Wallet
        - Math Wallet
  
        To get started with a Solana wallet:
        1. Choose a wallet provider.
        2. Download and install the wallet software.
        3. Create a new wallet and secure it with a password.
        4. Fund your wallet with SOL tokens.
      `,
      type: 'Beginner',
    },
    {
      title: 'Building Decentralized Applications on Solana',
      learnImage: [
        'https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480196.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Building decentralized applications (dApps) on Solana requires a deep understanding of the platform's architecture and ecosystem.
  
        Key Considerations:
  
        1. Choose a programming language: Rust, C++, or JavaScript.
        2. Select a framework: Solana's Web3.js or a third-party library.
        3. Design a user-friendly interface.
        4. Ensure scalability and performance.
  
        Popular Solana dApps:
  
        1. DeFi platforms: Oxygen, Sunny Aggregator.
        2. Gaming platforms: Star Atlas, SolChicks.
        3. Social media platforms: Dialect, Hearing.
  
  
        Development Tools:
  
        1. Solana CLI.
        2. Solana Studio.
        3. Visual Studio Code extensions.
  
  
        Best Practices:
  
        1. Follow security guidelines.
        2. Optimize for performance.
        3. Test thoroughly.
      `,
      type: 'Intermediate',
    },
    {
      title: 'Solana\'s Smart Contract Language: Rust',
      learnImage: [
        'https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Rust is the primary language used for building smart contracts on Solana.
  
        Key Features:
  
        1. Memory safety guarantees.
        2. Performance optimization.
        3. Compatibility with Solana's runtime.
  
  
        Writing Smart Contracts in Rust:
  
  
        1. Define contract functions.
        2. Use Solana's SDK.
        3. Test and deploy.
  
  
        Popular Rust Libraries for Solana:
  
  
        1. Solana-program.
        2. Anchor.
        3. Solana-sdk.
  
  
        Best Practices:
  
  
        1. Follow Solana's documentation.
        2. Use established libraries.
        3. Test thoroughly.
      `,
      type: 'Intermediate',
    },
    {
      title: 'Solana\'s Ecosystem and Use Cases',
      learnImage: [
        'https://img.freepik.com/free-vector/gradient-style-nft-concept_23-2148964783.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Solana's ecosystem is growing rapidly, with various use cases emerging.
  
  
        Key Use Cases:
  
  
        1. DeFi (Decentralized Finance).
        2. Gaming.
        3. Social Media.
  
  
        Popular Solana Ecosystem Projects:
  
  
        1. Serum (DeFi).
        2. Star Atlas (Gaming).
        3. Dialect (Social Media).
  
  
        Ecosystem Tools:
  
  
        1. Solana CLI.
        2. Solana Studio.
        3. Visual Studio Code extensions.
  
  
        Participating in the Ecosystem:
  
  
        1. Join Solana's community.
        2. Attend events.
        3. Contribute to open-source projects.
      `,
      type: 'Intermediate',
    },
    {
      title: 'Optimizing Solana Smart Contracts for Performance',
      learnImage: [
        'https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480176.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
        'https://img.freepik.com/free-vector/holographic-display-isometric-neon-digital-futuristic-technology-user-interface-development-design_39422-977.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid'
      ],
      content: `
        Optimizing Solana smart contracts for performance is crucial for ensuring scalability and efficiency.
  
  
        Key Optimization Techniques:
  
  
        1. Minimize computational complexity.
        2. Optimize data storage.
        3. Leverage caching.
  
  
        Advanced Optimization Strategies:
  
  
        1. Parallel processing.
        2. Asynchronous execution.
        3. Memoization.
  
  
        Best Practices:
  
  
        1. Profile contract performance.
        2. Test thoroughly.
        3. Monitor network conditions.
  
  
        Real-World Examples:
  
  
        1. Optimizing Serum's order book.
        2. Enhancing Star Atlas's gaming performance.
  
  
        Conclusion:
        Optimizing Solana smart contracts requires careful consideration of performance metrics and optimization techniques.
      `,
      type: 'Advanced',
    },
    {
      title: 'Advanced Solana Network Architecture',
      learnImage: [
        'https://www.solana.com/images/proof-of-history.pnghttps://img.freepik.com/free-photo/ai-cloud-concept-with-cube_23-2149739756.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/3d-rendering-geometric-glass-shape_23-2150979652.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid',
      ],
      content: `
        Solana's network architecture is designed for high performance and scalability.
  
  
        Key Components:
  
  
        1. Proof-of-History (PoH).
        2. Leader Election.
        3. Gossip Protocol.
  
  
        Advanced Network Architecture Concepts:
  
  
        1. Sharding.
        2. Off-chain transactions.
        3. Cross-chain interoperability.
  
  
        Best Practices:
  
  
        1. Design for scalability.
        2. Ensure security.
        3. Monitor network performance.
  
  
        Real-World Applications:
  
  
        1. Building decentralized exchanges.
        2. Creating scalable gaming platforms.
  
  
        Conclusion:
        Understanding Solana's advanced network architecture is crucial for building high-performance applications.
      `,
      type: 'Advanced',
    },
  ];

  for(const data of learnData) {
    await prisma.learn.create({
      data,
    });
  }
  console.log('Learn data has been added successfully.');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
