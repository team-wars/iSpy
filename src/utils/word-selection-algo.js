
const selectWords = () => {

    //generate 25 unique word ids
    const ids = [];

    while (ids.length < 25) {
        const id = Math.ceil(Math.random() * 250);
        if (ids.includes(id)) continue;
        else ids.push(id); 
    }
    //join array into string of ids
    let idString = ids.join(', ');
    
    //pull words from SQL
    pool.query(`SELECT * FROM 'Dictionary' WHERE 'ID' in (${idString})`, (err, result) => {
        if (err) {
            return res.status(400).json({ error: 'error from retrieve words' });
        }
        //iterate through result and create array of word object
        const wordArray = []
        Object.keys(result).forEach((key, i) => {
            const row = result[key];
            //assign affliation
            let affiliation;
            if (i === 0) affiliation = 'assassin';
            else if (i >= 1 && i <= 7) affiliation = 'neutral';
            else if (i >= 8 && i <= 16 ) affiliation = 'blue';
            else if (i >= 17) affiliation = 'red';
            const wordObj = {
                word = row.word,
                id = row._id,
                affiliation = affiliation,
                selected = false
            };
            wordArray.push(wordObj);
        })

        //randomize words in the word array
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        shuffleArray(wordArray);

        //add location to word obj
        wordArray.forEach((word, i) => {
            word.location = i
        })

        //put words in board table
        pool.query(`INSERT INTO board (word_id,affiliation,word,selected,location) VALUES ?`, [wordArray], (err, result) =>{
            if (err) console.log('error in inserting words into board table ', err)
            else console.log(result)
        })
        //return array

        pool.close();
        return res.status(200).json(wordArray);

        
    })
  
};