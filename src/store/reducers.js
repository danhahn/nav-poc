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

const levelOneData = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_ONE_ITEMS:
      return action.items;
    default:
      return state;
  }
};

const levelTwoData = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_TWO_ITEMS:
      return action.items;
    default:
      return state;
  }
};

const levelTwoTemplate = (state = null, action) => {
  switch (action.type) {
    case TYPES.UPDATE_LEVEL_TWO_TEMPLATE:
      return action.template;
    default:
      return state;
  }
};

export default combineReducers({
  rawNavData,
  levelOneData,
  levelTwoData,
  levelTwoTemplate
});