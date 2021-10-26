const api = {
  mode: false,
  play: false,
  profile: "",
  account:  [{
        image: 'String',
        user_name: 'nhapho',
        user_lastname: 'nophora',
        user_email: 'String',
        user_password: '98765433',
        date: '123456789',}],
  comment: false,
  nav: true,
  accounts: [],

  home: true,
  vewss: [],

  movies: [],
  selected: [],
  selectvideo: '',


  photos: '/movie/:id',
  Photourl: [],
  name: 'alita',
  pnumber:1,
  back: false,
};

const anyplayReducer = (state = api, action) => {
  switch (action.type) {
    case "MODE":
      state = { ...state, mode: action.payload };
      break;
    case "PLAY":
      state = { ...state, play: action.payload };
      break;
    case "PROFILE":
      state = { ...state, profile: action.payload };
      break;
    case "ACCOUNT":
      state = { ...state, account: action.payload };
      break;
    case "ACCOUNTS":
      state = { ...state, accounts: action.payload };
      break;
    case "COMMENT":
      state = { ...state, comment: action.payload };
      break;
    case "NAV":
      state = { ...state, nav: action.payload };
      break;
    case "MOVIES":
      state = { ...state, movies: action.payload };
      break;
    case "VEWSS":
      state = { ...state, vewss: action.payload };
      break;
    case "SELECTED":
      state = { ...state, selected: action.payload };
      break;
    case "HOME":
      state = { ...state, home: action.payload };
      break;
    case "SELECTVIDEO":
      state = { ...state, selectvideo: action.payload };
      break;
    case "PHOTOS":
      state = { ...state, photos: action.payload };
      break;
      case "PHOTOURL":
      state = { ...state, photourl: action.payload };
      break;
      case "NAME":
      state = { ...state, name: action.payload };
      break;
      case "PNUMBER":
      state = { ...state, pnumber: action.payload };
      break;
    case "BACK":
      state = { ...state, back: action.payload };
      break;
    default:
      state = api;
  }
  return state;
};

export default anyplayReducer;
