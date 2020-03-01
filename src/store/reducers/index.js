import { combineReducers } from "redux";
import searchVideo from "../../components/search-bar/store/reducers/searchVideo.reducer";

const rootReducer = combineReducers({
  searchVideo
});

export default rootReducer;
