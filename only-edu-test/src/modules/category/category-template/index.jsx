import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import CategoryCard from "../category-cards";

export const categories = [
  {
    id: 1,
    name: "Engineering",
    posts: [
      {
        id: 1,
        svg: "",
        title: "Software Engineering",
        subTitle: "Software and programming",
        TestAttempts: "97k",
        rankedYouth: "50k",
        img: "https://img.freepik.com/premium-vector/laptop-coding-concept-web-developer-programming-laptop-screen-code-illustration_100456-1753.jpg",
        tests: [
          {
            name: "Software Development Fundamentals Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "50k",
          },
          {
            name: "Software Testing Practices Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "45k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 2,
        title: "Mechanical Engineering",
        subTitle: "Wrenches and iron",
        TestAttempts: "45k",
        rankedYouth: "10k",
        img: "https://img.freepik.com/free-photo/architectural-blueprints_1359-431.jpg",
        tests: [
          {
            name: "Mechanical Design Principles Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "10k",
          },
          {
            name: "Thermodynamics and Fluid Mechanics Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "12k",
          },
          {
            name: "Mechanical Engineering Materials Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "8k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 3,
        title: "Electronic Engineering",
        subTitle: "Circuits and transistors",
        TestAttempts: "40k",
        rankedYouth: "2k",
        img: "https://img.freepik.com/free-vector/system-plate-pc-isometric-illustration-with-semiconductor-elements-slots-microchips-capacitors-diodes-transistors_1284-33000.jpg",
        tests: [
          {
            name: "Basic Circuit Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "2k",
          },
          {
            name: "Electronic Devices and Circuits Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "3k",
          },
          {
            name: "Digital Electronics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "2.5k",
          },
          {
            name: "Analog Circuits Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "2.8k",
          },
          {
            name: "Signal Processing Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "3.2k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 4,
        title: "Automobile Engineering",
        subTitle: "Cars and engines",
        TestAttempts: "10k",
        rankedYouth: "3k",
        img: "https://img.freepik.com/free-vector/illustration-machine-checklist_53876-20572.jpg",
        tests: [
          {
            name: "Automotive Fundamentals Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "3k",
          },
          {
            name: "Engine Design and Performance Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "2.5k",
          },
          {
            name: "Vehicle Dynamics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "2.8k",
          },
          {
            name: "Automobile Electronics Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "3.2k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 5,
        title: "Civil Engineering",
        subTitle: "Structures and infrastructure",
        TestAttempts: "60k",
        rankedYouth: "20k",
        img: "https://img.freepik.com/free-vector/flat-illustration-engineers-day-celebration_23-2149556023.jpg?size=338&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
        tests: [
          {
            name: "Structural Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "20k",
          },
          {
            name: "Construction Materials and Methods Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "18k",
          },
          {
            name: "Geotechnical Engineering Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "22k",
          },
          {
            name: "Transportation Engineering Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "19k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 6,
        title: "Aeronautical Engineering",
        subTitle: "Aircraft and aerospace systems",
        TestAttempts: "55k",
        rankedYouth: "15k",
        img: "https://img.freepik.com/free-vector/hand-drawn-airplane-outline-illustration_23-2150378092.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais",
        tests: [
          {
            name: "Aerodynamics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "15k",
          },
          {
            name: "Aircraft Structures Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "13k",
          },
          {
            name: "Propulsion Systems Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "16k",
          },
          {
            name: "Flight Dynamics and Control Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "14k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 7,
        title: "Chemical Engineering",
        subTitle: "Reactions and processes",
        TestAttempts: "70k",
        rankedYouth: "25k",
        img: "https://img.freepik.com/free-vector/flat-style-science-lab_23-2148507499.jpg",
        tests: [
          {
            name: "Chemical Kinetics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "25k",
          },
          {
            name: "Thermodynamics Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "23k",
          },
          {
            name: "Process Control Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "26k",
          },
          {
            name: "Fluid Mechanics Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "24k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 8,
        title: "Biomedical Engineering",
        subTitle: "Medical devices and systems",
        TestAttempts: "80k",
        rankedYouth: "30k",
        img: "https://img.freepik.com/free-vector/flat-design-biotechnology-concept_23-2148894960.jpg",
        tests: [
          {
            name: "Biomedical Instrumentation Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "30k",
          },
          {
            name: "Medical Imaging Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "28k",
          },
          {
            name: "Biomechanics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "32k",
          },
          {
            name: "Biomedical Signal Processing Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "29k",
          },
        ],
      },
    ],
  },
  {
    name: "Medical",
    id: 2,
    posts: [
      {
        id: 1,
        title: "M.B.B.S",
        subTitle: "Full stack MBBS",
        TestAttempts: "50k",
        rankedYouth: "4k",
        img: "https://img.freepik.com/free-vector/people-sitting-hospital-corridor-waiting-doctor-patient-clinic-visit-flat-vector-illustration-medicine-healthcare_74855-8507.jpg",
        tests: [
          {
            name: "MBBS Comprehensive Exam",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "4k",
          },
          {
            name: "MBBS Final Practical Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "5k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 2,
        title: "Surgical Doc",
        subTitle: "Surgeries and procedures",
        TestAttempts: "40k",
        rankedYouth: "3k",
        img: "https://img.freepik.com/free-vector/tiny-medical-professionals-examining-huge-face-woman-cartoon-persons-with-operation-equipment-clinic-flat-vector-illustration-plastic-cosmetic-surgery-beauty-healthcare-concept-banner_74855-25346.jpg",
        tests: [
          {
            name: "General Surgery Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "3k",
          },
          {
            name: "Orthopedic Surgery Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "2.5k",
          },
          {
            name: "Plastic Surgery Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "3.2k",
          },
          {
            name: "Cardiothoracic Surgery Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "2.8k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 3,
        title: "Anesthesiologist",
        subTitle: "Injections and drugs",
        TestAttempts: "30k",
        rankedYouth: "3k",
        img: "https://img.freepik.com/free-vector/patient-with-anesthesia-mask_1308-116891.jpg",
        tests: [
          {
            name: "Anesthesia Basics Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "3k",
          },
          {
            name: "Regional Anesthesia Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "2.7k",
          },
          {
            name: "Anesthetic Pharmacology Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "3.2k",
          },
          {
            name: "Anesthesia Complications Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "2.8k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 4,
        title: "Medical",
        subTitle: "Medicine specialist",
        TestAttempts: "50k",
        rankedYouth: "30k",
        img: "https://img.freepik.com/free-vector/pills-medical-realistic-composition_98292-1233.jpg",
        tests: [
          {
            name: "Internal Medicine Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "30k",
          },
          {
            name: "Pediatrics Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "28k",
          },
          {
            name: "Obstetrics and Gynecology Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "32k",
          },
          {
            name: "Surgery Test",
            subTitle: "Questions Attempt",
            TestTime: "2.5 hours",
            rankedYouth: "29k",
          },
          // Add more tests as needed
        ],
      },
    ],
  },
  {
    name: "Finance",
    id: 3,
    posts: [
      {
        id: 1,
        title: "Investment Banking",
        subTitle: "Financial markets and investments",
        TestAttempts: "60k",
        rankedYouth: "25k",
        img: "https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg",
        tests: [
          {
            name: "Investment Banking Fundamentals Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "25k",
          },
          {
            name: "Financial Market Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "30k",
          },
        ],
      },
      {
        id: 2,
        title: "Accounting",
        subTitle: "Financial statements and bookkeeping",
        TestAttempts: "55k",
        rankedYouth: "20k",
        img: "https://img.freepik.com/premium-vector/accounting-finance-concept-business-plan-budget-analyst-flat-illustration-vector-template_128772-1199.jpg",
        tests: [
          {
            name: "Financial Accounting Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "20k",
          },
          {
            name: "Managerial Accounting Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "18k",
          },
          {
            name: "Cost Accounting Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "22k",
          },
          {
            name: "Auditing Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "19k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 3,
        title: "Personal Finance",
        subTitle: "Budgeting and saving",
        TestAttempts: "70k",
        rankedYouth: "15k",
        img: "https://img.freepik.com/free-vector/piggy-bank_53876-25494.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais",
        tests: [
          {
            name: "Budgeting Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "15k",
          },
          {
            name: "Saving Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "12k",
          },
          {
            name: "Investment Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "17k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 5,
        title: "Financial Analysis",
        subTitle: "Interpreting financial data",
        TestAttempts: "75k",
        rankedYouth: "22k",
        img: "https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18129.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais",
        tests: [
          {
            name: "Financial Statement Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "22k",
          },
          {
            name: "Ratio Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "20k",
          },
          {
            name: "Cash Flow Analysis Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "24k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 6,
        title: "Financial Modeling",
        subTitle: "Forecasting and decision-making",
        TestAttempts: "85k",
        rankedYouth: "28k",
        img: "https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-20421.jpg?size=626&ext=jpg&ga=GA1.1.1827530304.1711584000&semt=ais",
        tests: [
          {
            name: "Financial Forecasting Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "28k",
          },
          {
            name: "Decision-making Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "26k",
          },
          {
            name: "Valuation Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "30k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 7,
        title: "Risk Management",
        subTitle: "Identifying and mitigating financial risks",
        TestAttempts: "90k",
        rankedYouth: "35k",
        img: "https://img.freepik.com/premium-vector/tiny-businessman-character-stand-huge-pile-money-bills-looking-cogwheel-with-risk-management-inscription-business-icons-around-magnifier-chart-rocket-cartoon-vector-illustration_87771-11279.jpg",
        tests: [
          {
            name: "Risk Identification Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "35k",
          },
          {
            name: "Risk Assessment Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "33k",
          },
          {
            name: "Risk Mitigation Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "37k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 8,
        title: "Economics",
        subTitle: "Macroeconomic and microeconomic principles",
        TestAttempts: "80k",
        rankedYouth: "30k",
        img: "https://img.freepik.com/free-vector/business-innovation-based-alternative-financial-services-digital-currency-market-exchange-financial-technology-flat-vector-illustration-fintech-startup-economy-finances-concept-banner_74855-22404.jpg",
        tests: [
          {
            name: "Microeconomics Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "30k",
          },
          {
            name: "Macroeconomics Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "28k",
          },
          {
            name: "Econometrics Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "32k",
          },
          // Add more tests as needed
        ],
      },
    ],
  },
  {
    name: "Computers",
    id: 4,
    posts: [
      {
        id: 1,
        title: "Computer Science Basics",
        subTitle: "Fundamentals of computing",
        TestAttempts: "80k",
        rankedYouth: "40k",
        img: "https://img.freepik.com/free-vector/young-tiny-girl-sitting-coding-via-laptop-computer-programmer-code-flat-vector-illustration-it-digital-technology_74855-8751.jpg",
        tests: [
          {
            name: "Computer Science Fundamentals Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "40k",
          },
          {
            name: "Data Structures and Algorithms Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "35k",
          },
        ],
      },
      {
        id: 2,
        title: "DSA",
        subTitle: "Optimizing code and problem-solving",
        TestAttempts: "90k",
        rankedYouth: "35k",
        img: "https://img.freepik.com/premium-vector/algorithm-concept-with-icon-set-with-big-word-text-center_25156-957.jpg",
        tests: [
          {
            name: "Arrays and Strings Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "35k",
          },
          {
            name: "Linked Lists Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "32k",
          },
          {
            name: "Sorting and Searching Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "38k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 3,
        title: "Machine Learning",
        subTitle: "Predictive analytics and pattern recognition",
        TestAttempts: "85k",
        rankedYouth: "30k",
        img: "https://img.freepik.com/free-vector/artificial-intelligence-template-landing-page_23-2148331041.jpg",
        tests: [
          {
            name: "Supervised Learning Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "30k",
          },
          {
            name: "Unsupervised Learning Test",
            subTitle: "Questions Attempt",
            TestTime: "2 hours",
            rankedYouth: "28k",
          },
          {
            name: "Deep Learning Test",
            subTitle: "Questions Attempt",
            TestTime: "2.5 hours",
            rankedYouth: "32k",
          },
          // Add more tests as needed
        ],
      },
    ],
  },
  {
    name: "Miscellaneous",
    id: 5,
    posts: [
      {
        id: 1,
        title: "Cooking",
        subTitle: "Recipes and culinary techniques",
        TestAttempts: "20k",
        rankedYouth: "5k",
        img: "https://img.freepik.com/premium-vector/smiley-woman-cooking-kitchen_23-2148534244.jpg",
        tests: [
          {
            name: "Cooking Essentials Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "5k",
          },
          {
            name: "Advanced Cooking Techniques Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "7k",
          },
        ],
      },
      {
        id: 2,
        title: "Photography",
        subTitle: "Composition and lighting",
        TestAttempts: "25k",
        rankedYouth: "8k",
        img: "https://img.freepik.com/free-vector/huge-camera-tiny-people-taking-pictures-photographer-with-camera-photos-landscapes-flat-vector-illustration-photography-occupation-concept-banner-website-design-landing-web-page_74855-23089.jpg",
        tests: [
          {
            name: "Composition Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "8k",
          },
          {
            name: "Lighting Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "7k",
          },
          {
            name: "Editing Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "10k",
          },
          // Add more tests as needed
        ],
      },
      {
        id: 3,
        title: "Fitness",
        subTitle: "Workouts and nutrition",
        TestAttempts: "30k",
        rankedYouth: "10k",
        img: "https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg",
        tests: [
          {
            name: "Cardio Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "10k",
          },
          {
            name: "Strength Training Test",
            subTitle: "Questions Attempt",
            TestTime: "1 hour",
            rankedYouth: "9k",
          },
          {
            name: "Nutrition Test",
            subTitle: "Questions Attempt",
            TestTime: "1.5 hours",
            rankedYouth: "12k",
          },
          // Add more tests as needed
        ],
      },
    ],
  },
];

const CategoryTemplate = () => {
  return (
    <div className=" mx-auto bg-[#F5EFE6] border rounded-3xl py-12 shadow-md">
      <div className="sm:px-6 px-3">
        <h1 className="capitalize mb-5 sm:mb-10 font-semibold sm:text-8xl lg:text-9xl tracking-tighter line-clamp-1">
          Only tests
        </h1>
        <TabGroup>
          <div className="sort flex gap-x-2 text-[#115e5d] py-5 overflow-x-scroll">
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="bg-[#9dcdd3e0] px-4 py-2 rounded-full cursor-pointer data-[selected]:bg-[#fd7c22] data-[selected]:text-white hover:bg-[#fd7c22] hover:text-white transition-colors ease-in-out border active "
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels className="">
            {categories.map(({ name, posts }) => (
              <>
                <TabPanel
                  key={name}
                  className="grid xl:grid-cols-4 py-2 gap-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                >
                  {posts.map((post) => (
                    <CategoryCard key={post?.id} name={name} post={post} />
                  ))}
                </TabPanel>
              </>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default CategoryTemplate;
