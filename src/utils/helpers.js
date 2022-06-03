const helpers = {

    /**
     * Calculates the most frequent answer type for all the answered questions
     * @param {Map} questAnswerMap, a map containing answers for every question, e.g. {1: "A", 2: "C", 3: "A"}
     * @returns {String} the most frequent answer, e.g. "A" 
     */
     getMostFrequentAnswer: function (questAnswerMap) {
        let maxCount = 0;
        let mostFrequentAnswer = '';
        const answerCountMap = {};

        questAnswerMap.forEach((value, key) => {
          answerCountMap[value] = (answerCountMap[value] || 0) + 1;
          if ( answerCountMap[value] > maxCount ) {
            mostFrequentAnswer = value;
            maxCount = answerCountMap[value];
          }
        });

        return mostFrequentAnswer;

      }
}

export default helpers;
