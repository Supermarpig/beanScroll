import { QuestionCard, SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const topQuestions: string[] = [
  "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  "",
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const questions: QuestionCard[] = [
  {
    _id: 1,
    title: "Efficient Sorting Algorithm Comparision",
    tags: [
      {
        _id: 1,
        name: "java",
      },
      {
        _id: 2,
        name: "NEXT",
      },
      {
        _id: 3,
        name: "java script",
      },
    ],
    Author: "Vista Vincent",
    AuthorImg: "",
    days: 6,
    likes: 4,
    comments: 6,
    votes: 3,
    views: 100,
  },
  {
    _id: 2,
    title: "Tailwind is noice?",
    tags: [
      {
        _id: 1,
        name: "CSS",
      },
      {
        _id: 2,
        name: "NEXT",
      },
      {
        _id: 3,
        name: "java script",
      },
    ],
    Author: "Vista Vincent",
    AuthorImg: "",
    days: 6,
    likes: 4,
    comments: 6,
    votes: 3,
    views: 100,
  },
];
