/* eslint-disable */
import axios from 'axios';

export default {

  async fetchTitles({ commit }) {
    const output = await axios.get(`${process.env.VUE_APP_BASE_URI}/api/title`);
    // console.log(output);
    commit('SET_TITLES', output.data);
  },
  async fetchQuestions({ commit }) {
    const output = await axios.get(`${process.env.VUE_APP_BASE_URI}/api/ques`);
    // console.log(output);
    commit('SET_QUESTIONS', output.data);
  },
  saveReports({ commit }, data) {
    const report = {};
    const answers = [];
    data.forEach((element) => {
      answers.push(element.userAnswer);
    });
    report.total_questions = data.length;
    report.answers = answers.length;
    report.correctAnswers = correctAnswers(data);
    report.percentage = Math.round((correctAnswers(data) / answers.length) * 100);
    console.log('here', data, report);
    commit('SET_REPORTS', report);
  },
};

const correctAnswers = (data) => {
  let counts;
  counts = 0;
  data.forEach((ans) => {
    if (ans[`ch${ans.r_ch}`]=== ans.userAnswer) {
      counts += 1;
    }
  });
  return counts;
};
