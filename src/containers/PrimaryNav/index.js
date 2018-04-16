import { connect } from "react-redux";
import PrimaryNav from "../../component/PrimaryNav";
import {
  navSuccess,
  updateLevelOneItems,
  updateLevelTwoItems,
  updateLevelTwoTemplate,
  resetNav
} from "../../store/actions";

const mapStateToProps = state => ({
  items: state.navigation.transformedNavData,
  levelOneItems: state.navigation.levelOneData,
  levelTwoItems: state.navigation.levelTwoData,
  levelTwoTemplate: state.navigation.levelTwoTemplate
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
