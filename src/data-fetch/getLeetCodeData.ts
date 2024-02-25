"use server";

import {
  userProfile,
  userLanguageStats,
  userSkillStats,
  recentSubmissionList,
  userSubmissionCount,
  userProfileCalendar,
  userStreakCounter,
  questionOfTheDay,
} from "@public/queries/Leetcode";

interface QuestionOfTheDayData<T extends Record<string, string | number>> {
  date: string;
  userStatus: string;
  link: string;
  difficulty: string;
  acceptance_rate: number;
  ID: number;
  title: string;
  topics: T[];
}

interface UserSkillStats<T extends Record<string, string | number>> {
  fundamental: T[];
  intermediate: T[];
  advanced: T[];
}

async function getUserProfileData() {
  const userProfileResponse = await fetch(userProfile);
  const userProfileData = await userProfileResponse.json();

  const profile = userProfileData.data.matchedUser;

  return {
    username: profile.username as string,
    rank: profile.profile.ranking as number,
  };
}

async function getUserLanguageData<
  T extends Record<string, string | number>
>(): Promise<{ language: T[] }> {
  const userLanguageResponse = await fetch(userLanguageStats);
  const userLanguageData = await userLanguageResponse.json();

  const userLanguage = userLanguageData.data.matchedUser.languageProblemCount;

  return { language: userLanguage };
}

async function getUserSkillData<
  T extends Record<string, string | number>
>(): Promise<UserSkillStats<T>> {
  const userSkillResponse = await fetch(userSkillStats);
  const userSkillData = await userSkillResponse.json();

  const userSkill = userSkillData.data.matchedUser.tagProblemCounts;

  return {
    fundamental: userSkill.fundamental,
    intermediate: userSkill.intermediate,
    advanced: userSkill.advanced,
  };
}

async function getRecentSubmissionData<
  T extends Record<string, string>
>(): Promise<{ recent_submission_list: T[] }> {
  const recentSubmissionResponse = await fetch(recentSubmissionList);
  const recentSubmissionData = await recentSubmissionResponse.json();

  return {
    recent_submission_list: recentSubmissionData.data.recentSubmissionList,
  };
}

async function getUserSubmissionData<
  T extends Record<string, string | number>
>(): Promise<{ difficulty: T[] }> {
  const userSubmissionResponse = await fetch(userSubmissionCount);
  const userSubmissionData = await userSubmissionResponse.json();

  const userSubmission = userSubmissionData.data.matchedUser.submitStats;

  return {
    difficulty: userSubmission.acSubmissionNum,
  };
}

async function getUserProfileCalendarData() {
  const userProfileCalendarResponse = await fetch(userProfileCalendar);
  const userProfileCalendarData = await userProfileCalendarResponse.json();

  const profileCalendar = userProfileCalendarData.data.matchedUser.userCalendar;

  return {
    active_years: profileCalendar.activeYears as number[],
    totalActiveDays: profileCalendar.totalActiveDays as number,
  };
}

async function getUserStreakData() {
  const userStreakResponse = await fetch(userStreakCounter);
  const userStreakData = await userStreakResponse.json();

  const streakCount = userStreakData.data.streakCounter;

  return {
    // count: streakCount.streakCount as number,
    // days_skipped: streakCount.daysSkipped as number,
    streakCount,
  };
}

async function getQuestionOfTheDayData<
  T extends Record<string, string | number>
>(): Promise<QuestionOfTheDayData<T>> {
  const questionOfTheDayResponse = await fetch(questionOfTheDay);
  const questionOfTheDayData = await questionOfTheDayResponse.json();

  const QOTD = questionOfTheDayData.data.activeDailyCodingChallengeQuestion;

  return {
    date: QOTD.date,
    userStatus: QOTD.userStatus,
    link: QOTD.link,
    difficulty: QOTD.question.difficulty,
    acceptance_rate: QOTD.question.acRate,
    ID: parseInt(QOTD.question.frontendQuestionId),
    title: QOTD.question.title,
    topics: QOTD.question.topicTags,
  };
}

export {
  getUserProfileData,
  getUserLanguageData,
  getUserSkillData,
  getRecentSubmissionData,
  getUserSubmissionData,
  getUserProfileCalendarData,
  getUserStreakData,
  getQuestionOfTheDayData,
};
