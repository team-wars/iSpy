module.exports = {
  populateBoard(session_id, socket, io) {
    // generate 25 unique word ids

    const ids = [];

    while (ids.length < 25) {
      const id = Math.ceil(Math.random() * 100);
      if (ids.includes(id)) continue;
      else ids.push(id);
    }
    // join array into string of ids
    const idString = ids.join(', ');

    // pull words from SQL
    db.query(`SELECT * FROM dictionary WHERE id in (${idString})`, (err, result) => {
      if (err) {
        console.log('error picking words for socket req: ', err);
        return;
      }
      // iterate through result and create array of word object
      const wordArray = [];
      result.rows.forEach((foundWord, i) => {
        // assign affliation
        // console.log('foundWord ', foundWord);
        let affiliation;
        if (i === 0) affiliation = 'assassin';
        else if (i >= 1 && i <= 7) affiliation = 'neutral';
        else if (i >= 8 && i <= 16) affiliation = 'blue';
        else if (i >= 17) affiliation = 'red';
        // const wordObj = [
        //   foundWord.id,
        //   affiliation,
        //   false,
        //   session_id,
        // ];
        const wordObj = {
          ...foundWord,
          affiliation,
          selected: false,
        };
        wordArray.push(wordObj);
      });

      // randomize words in the word array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      shuffleArray(wordArray);

      // add location to word obj and build up sql string for insertion with one query
      let sqlValues = '';
      wordArray.forEach((word, i) => {
        word.location = i;
        sqlValues += `(${word.id}, '${word.affiliation}', ${word.selected}, '${session_id}', ${word.location})`;
        // add comma if it's NOT the last item in the array
        if (i !== 24) { sqlValues += ','; }
      });

      // put words in board table
      db.query(`INSERT INTO board (word_id,affiliation,selected,room,location) VALUES ${sqlValues}`, (error, ressy) => {
        if (error) {
          console.log('error in inserting words into board table ', error);
          return;
        }
        console.log(ressy);

        // close is not a function, per error message
        // b/c db only has the query method attached to it
        // db.close();

        // send back wordArray of objects, to frontend
        io.to(room).emit('board populated', (wordArray));
        // return res.status(200).json(wordArray);
      });
      // return array
    });
  },
};
