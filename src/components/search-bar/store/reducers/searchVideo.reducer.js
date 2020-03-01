const INITIAL_STATE = {
  listVideo: [],
  loading: false,
  error: false
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_VIDEO_START":
      return {
        ...state,
        listVideo: [],
        loading: true,
        error: false
      };
    case "SEARCH_VIDEO_SUCCESS":
      return {
        ...state,
        listVideo: action.listVideo,
        loading: false,
        error: false
      };
    case "SEARCH_VIDEO_ERROR":
      return {
        ...state,
        listVideo: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
