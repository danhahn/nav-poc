export const TYPES = {
  GET_NAVIGATION_SUCCESS: 'GET_NAVIGATION_SUCCESS',
  UPDATE_LEVEL_ONE_ITEMS: 'UPDATE_LEVEL_ONE_ITEMS',
  UPDATE_LEVEL_TWO_ITEMS: 'UPDATE_LEVEL_TWO_ITEMS',
  UPDATE_LEVEL_TWO_TEMPLATE: 'UPDATE_LEVEL_TWO_TEMPLATE',
};

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

export const updateLevelTwoTemplate = template => ({
  type: TYPES.UPDATE_LEVEL_TWO_TEMPLATE,
  template
});