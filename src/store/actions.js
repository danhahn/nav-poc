export const TYPES = {
  GET_NAVIGATION_SUCCESS: 'GET_NAVIGATION_SUCCESS',
  UPDATE_LEVEL_ONE_ITEMS: 'UPDATE_LEVEL_ONE_ITEMS',
  UPDATE_LEVEL_TWO_ITEMS: 'UPDATE_LEVEL_TWO_ITEMS',
  RESET_LEVEL_TWO_ITEMS: 'RESET_LEVEL_TWO_ITEMS',
  UPDATE_LEVEL_TWO_TEMPLATE: 'UPDATE_LEVEL_TWO_TEMPLATE',
  RESET_LEVEL_TWO_TEMPLATE: 'RESET_LEVEL_TWO_TEMPLATE',
  SET_NAV_DATA: 'SET_NAV_DATA',
  RESET_NAV: 'RESET_NAV',
  SET_LEVEL_TWO_MEDIA: 'SET_LEVEL_TWO_MEDIA',
  SET_LEVEL_TWO_HASFILTER: 'SET_LEVEL_TWO_HASFILTER',
};

export const resetNav = () => ({
  type: TYPES.RESET_NAV
});

export const loadNavData = data => ({
  type: TYPES.SET_NAV_DATA,
  data
});

export const navSuccess = items => ({
  type: TYPES.GET_NAVIGATION_SUCCESS,
  items
});

export const updateLevelOneItems = items => ({
  type: TYPES.UPDATE_LEVEL_ONE_ITEMS,
  items
});

export const updateLevelTwoItems = items => ({
  type: TYPES.UPDATE_LEVEL_TWO_ITEMS,
  items
});

export const resetLevelTwoItems = () => ({
  type: TYPES.RESET_LEVEL_TWO_ITEMS
});

export const updateLevelTwoTemplate = template => ({
  type: TYPES.UPDATE_LEVEL_TWO_TEMPLATE,
  template
});

export const resetLevelTwoTemplate = () => ({
  type: TYPES.RESET_LEVEL_TWO_TEMPLATE
});

export const setLevelTwoMedia = media => ({
  type: TYPES.SET_LEVEL_TWO_MEDIA,
  media
});

export const setLevelHasFilter = hasFilter => ({
  type: TYPES.SET_LEVEL_TWO_HASFILTER,
  hasFilter
});