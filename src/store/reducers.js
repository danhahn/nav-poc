import { combineReducers } from "redux";
import { TYPES } from "./actions";

const rawNavData = (state = [], action) => {
  switch (action.type) {
    case TYPES.GET_NAVIGATION_SUCCESS:
      return action.items;
    default:
      return state;
  }
};

const transformedNavData = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET_NAV_DATA:
      return action.data;
    default:
      return state;
  }
}

const levelOneData = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_ONE_ITEMS:
      return action.items;
    case TYPES.RESET_NAV:
      return [];
    default:
      return state;
  }
};

const levelTwoData = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_TWO_ITEMS:
      return action.items;
    case TYPES.RESET_LEVEL_TWO_ITEMS:
      return [];
    case TYPES.RESET_NAV:
      return [];
    default:
      return state;
  }
};

const levelTwoTemplate = (state = null, action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_TWO_TEMPLATE:
      return action.template;
    case TYPES.RESET_LEVEL_TWO_TEMPLATE:
      return null;
    case TYPES.RESET_NAV:
      return null;
    default:
      return state;
  }
};

const levelTwoMedia = (state = null, action) => {
  switch(action.type) {
    case TYPES.SET_LEVEL_TWO_MEDIA:
      return action.media;
    default:
      return state;
  }
}

export default combineReducers({
  rawNavData,
  transformedNavData,
  levelOneData,
  levelTwoData,
  levelTwoTemplate,
  levelTwoMedia
});