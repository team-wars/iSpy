let initialState = {
  sessionID:null,
  isRedTurn:true,
  TeamObj:{
    members:[
      {
        username:'',
        isSpyMaster:false,
      }
    ],
    wordsLeft:[],
  },
  currUser:{
    userName: '',
    isSpyMaster: false,
    team: ''
  },gameBoard:[
    {
      word:'',
      ID: '',
      cardStatus: '',
      team: ' ',
    }
  ]
}