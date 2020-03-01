import youtubeSearch from "youtube-api-v3-search";
import { API_KEY } from "../../../../services/apiKey";

export const searchVideoStart = () => {
  return {
    type: "SEARCH_VIDEO_START",
    loading: true,
    error: false
  };
};

export const searchVideoSuccess = listVideo => {
  return {
    type: "SEARCH_VIDEO_SUCCESS",
    listVideo,
    loading: false,
    error: false
  };
};

export const searchVideoError = () => {
  return {
    type: "SEARCH_VIDEO_ERROR",
    loading: false,
    error: true
  };
};

export const searchVideo = term => {
  return dispatch => {
    dispatch(searchVideoStart());
    youtubeSearch(API_KEY, {
      q: term
    })
      .then(data => dispatch(searchVideoSuccess(data.items)))
      .catch(() => dispatch(searchVideoError()));
  };
};
