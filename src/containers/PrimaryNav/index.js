import { connect } from "react-redux";
import PrimaryNav from "../../component/PrimaryNav";
import {
  navSuccess,
  updateLevelOneItems,
  updateLevelTwoItems,
  updateLevelTwoTemplate,
  resetLevelTwoItems,
  resetLevelTwoTemplate,
  resetNav,
  setLevelTwoMedia
} from "../../store/actions";

const mapStateToProps = state => ({
  items: state.navigation.transformedNavData,
  levelOneItems: state.navigation.levelOneData,
  levelTwoItems: state.navigation.levelTwoData,
  levelTwoTemplate: state.navigation.levelTwoTemplate,
  levelTwoMedia: state.navigation.levelTwoMedia
});

const mapDispatchToProps = dispatch => ({
  navSuccess: data => dispatch(navSuccess(data)),
  updateLevelOneData: levelOneData => {
    dispatch(updateLevelOneItems(levelOneData));
  },
  updateLevelOneReset: () => {
    dispatch(resetNav())
  },
  updateLevelTwoData: (levelTwoData, template) => {
    dispatch(updateLevelTwoItems(levelTwoData));
    dispatch(updateLevelTwoTemplate(template));
  },
  resetLevelTwoData: () => {
    dispatch(resetLevelTwoItems());
    dispatch(resetLevelTwoTemplate());
  },
  updateLevelTwoMedia: (id, levelOneItems) => {
    const [selectedItem] = levelOneItems.filter(item => item.id === id);
    dispatch(setLevelTwoMedia(selectedItem.media));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
