const testData = require("../data/TestData.json");

exports.randomExam = async (req, res) => {
  const wardTypesArr = ["adjective", "adverb", "noun", "verb"];
  let randomArr = [];
  let fullyRandomize = [];
  const getWordType = (type) => {
    let words = testData?.wordList?.filter((word) => word.pos === type);
    randomArr?.push(words[Math.floor(Math.random() * words?.length)]);
  };

  for (let y = 0; y < 4; y++) {
    getWordType(wardTypesArr[y]);
  }
  for (let i = 0; randomArr?.length < 10; i++) {
    let randomIndex =
      testData?.wordList[
        Math.floor(Math.random() * testData?.wordList?.length)
      ];
    randomArr?.includes(randomIndex) ? "" : randomArr?.push(randomIndex);
  }
  for (let x = 0; fullyRandomize?.length < 10; x++) {
    let randomIndex = randomArr[Math.floor(Math.random() * randomArr?.length)];
    fullyRandomize?.includes(randomIndex)
      ? ""
      : fullyRandomize?.push(randomIndex);
  }
  res?.send(fullyRandomize);
};

exports.examResult = async (req, res) => {
  const bigerThen = testData?.scoresList?.filter(
    (score) => score < req?.body?.score
  );
  const resualt = Number(
    ((bigerThen?.length * 100) / testData?.scoresList?.length).toFixed(2)
  );
  res?.send({ resualt: resualt });
};

exports.trueOrFalse = async (req, res) => {
  const trueOrFalse = testData?.wordList?.find(
    (word) => word?.word === req?.body?.word
  );

  const mark = req?.body?.a === trueOrFalse?.pos ? true : false;
  res?.send({ mark: mark });
};
