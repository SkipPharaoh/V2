const userProfile = `https://leetcode.com/graphql?query=query
{
  matchedUser(username: "SkipCodes") {
    contestBadge {
      name
      expired
      hoverText
      icon
    }
    username
    githubUrl
    twitterUrl
    linkedinUrl
    profile {
      ranking
      userAvatar
      realName
      aboutMe
      school
      websites
      countryName
      company
      jobTitle
      skillTags
      postViewCount
      postViewCountDiff
      reputation
      reputationDiff
      solutionCount
      solutionCountDiff
      categoryDiscussCount
      categoryDiscussCountDiff
    }
  }
}`;

const userLanguageStats = `https://leetcode.com/graphql?query=query
{
  matchedUser(username: "SkipCodes") {
    languageProblemCount {
      languageName
      problemsSolved
    }
  }
}`;

const userSkillStats = `https://leetcode.com/graphql?query=query
{
  matchedUser(username: "SkipCodes") {
    tagProblemCounts {
      advanced {
        tagName
        tagSlug
        problemsSolved
      }
      intermediate {
        tagName
        tagSlug
        problemsSolved
      }
      fundamental {
        tagName
        tagSlug
        problemsSolved
      }
    }
  }
}`;

const recentSubmissionList = `https://leetcode.com/graphql?query=query
{ 
  recentSubmissionList(username:"SkipCodes") {
    title
    titleSlug
    timestamp
    statusDisplay
    lang
    __typename
    }
}`;

const userSubmissionCount = `https://leetcode.com/graphql?query=query
{
   matchedUser(username: "SkipCodes"){
      submitStats: submitStatsGlobal {
                    acSubmissionNum {
                      difficulty
                      count
                      submissions
                        __typename
                    }
                    totalSubmissionNum {
                      difficulty
                      count
                      submissions
                       __typename
                      }
                     __typename
        }
    } 
}`;

const userProfileCalendar = `https://leetcode.com/graphql?query=query
{
  matchedUser(username: "SkipCodes") {
    userCalendar(year: 2024) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
        timestamp
        badge {
          name
          icon
        }
      }
      submissionCalendar
    }
  }
}`;

const userStreakCounter = `https://leetcode.com/graphql?query=query
{
  streakCounter {
    streakCount
    daysSkipped
    currentDayCompleted
  }
}`;

const questionOfTheDay = `https://leetcode.com/graphql?query=query
{
  activeDailyCodingChallengeQuestion {
    date
    userStatus
    link
    question {
      acRate
      difficulty
      freqBar
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      hasVideoSolution
      hasSolution
      topicTags {
        name
        id
        slug
      }
    }
  }
}`;

export {
  userProfile,
  userLanguageStats,
  userSkillStats,
  recentSubmissionList,
  userSubmissionCount,
  userProfileCalendar,
  userStreakCounter,
  questionOfTheDay,
};
