import React, { Component } from "react";
import LevelZeroItems from "../LevelZeroItems";
import LevelOneItems from "../LevelOneItems";
import LevelTwoItems from "../LevelTwoItems";
import classNames from "classnames";
import TrendsLinks from "../TrendsLinks";
import LinkWithImage from "../LinkWithImage";
import "./styles.css";

export default class PrimaryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelOneIsOpening: false,
      levelOneIsOpen: false,
      levelTwoIsOpening: false,
      levelTwoIsOpen: false,
      levelOneIsCloseing: false,
      levelOneIsClosed: false,
      primaryActive: null,
      secondaryActive: null
    };
    this.handlePrimaryMouseEnter = this.handlePrimaryMouseEnter.bind(this);
    this.handleSecondaryMouseEnter = this.handleSecondaryMouseEnter.bind(this);
  }
  componentDidMount = () => {
    this.props.navSuccess(this.props.data);
  };

  handlePrimaryMouseEnter(id, items) {
    const { updateLevelOneData } = this.props;
    this.setState({ levelOneIsOpening: true });
    setTimeout(() => {
      this.setState({
        levelOneIsOpening: false,
        levelOneIsOpen: true,
        primaryActive: id
      });
    }, 1000);
    updateLevelOneData(items);
  }

  handleSecondaryMouseEnter(id, items, template) {
    const { updateLevelTwoData } = this.props;
    this.setState({ levelTwoIsOpening: true, secondaryActive: id });
    updateLevelTwoData(items, template);
  }

  render() {
    const { items, levelOneItems, levelTwoItems } = this.props;
    const {
      levelOneIsOpening,
      levelOneIsOpen,
      levelTwoIsOpening,
      levelTwoIsOpen,
      levelOneIsCloseing,
      levelOneIsClosed,
      primaryActive,
      secondaryActive
    } = this.state;
    return (
      <React.Fragment>
        <LevelZeroItems
          items={items}
          handlePrimaryMouseEnter={this.handlePrimaryMouseEnter}
          primaryActive={primaryActive}
        />
        <LevelOneItems
          levelOneIsOpening={levelOneIsOpening}
          levelOneIsOpen={levelOneIsOpen}
          handleSecondaryMouseEnter={this.handleSecondaryMouseEnter}
          levelOneItems={levelOneItems}
          secondaryActive={secondaryActive}
        />
        <LevelTwoItems
          levelTwoIsOpening={levelTwoIsOpening}
          levelTwoIsOpen={levelTwoIsOpen}
          levelTwoItems={levelTwoItems}
        />
      </React.Fragment>
    );
  }
}

PrimaryNav.defaultProps = {
  data: [
    {
      id: "123",
      label: "Woman👱🏻‍♀️",
      l2: [
        {
          id: "123-1",
          title: "Trends",
          url: null,
          l3: [
            [
              { title: "KORS LOOKS", url: null, img: null, id: "123-1-1" },
              { title: "CUSTOM KORS", url: null, img: null, id: "123-1-2" },
              { title: "TRAVEL DIARIES", url: null, img: null, id: "123-1-3" },
              { title: "MICHAEL'S TAKE", url: null, img: null, id: "123-1-4" }
            ],
            {
              title: "MERCER SHOP",
              url: null,
              img: "http://via.placeholder.com/150",
              id: "123-1-5"
            },
            {
              title: "WATCH RUNWAY 2018 SHOW",
              url: null,
              img: "http://via.placeholder.com/150",
              id: "123-1-6"
            },
            {
              title: "SPRING FLORALS",
              url: null,
              img: "http://via.placeholder.com/150",
              id: "123-1-7"
            }
          ],
          template: "trends",
          moreInfo: null
        },
        {
          id: "123-2",
          title: "Clothing",
          url: null,
          l3: [
            { title: "KORS LOOKS", url: null, img: null, id: "123-2-1" },
            { title: "CUSTOM KORS", url: null, img: null, id: "123-2-2" },
            { title: "TRAVEL DIARIES", url: null, img: null, id: "123-2-3" },
            { title: "MICHAEL'S TAKE", url: null, img: null, id: "123-3-4" }
          ],
          template: null,
          moreInfo: null
        },
        {
          id: "123-3",
          title: "Handbags",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        },
        {
          id: "123-4",
          title: "Shoes",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        },
        {
          id: "123-5",
          title: "Watches",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        },
        {
          id: "123-6",
          title: "Jewelry",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        },
        {
          id: "123-7",
          title: "Fragance",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        },
        {
          id: "123-8",
          title: "Eyewear",
          url: null,
          l3: [],
          template: null,
          moreInfo: null
        }
      ]
    },
    {
      id: "456",
      label: "Men👱🏻‍♂️",
      l2: [
        {
          id: "456-1",
          title: "Trends👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-2",
          title: "Clothing👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-3",
          title: "Handbags👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-4",
          title: "Shoes👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-5",
          title: "Watches👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-6",
          title: "Jewelry👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-7",
          title: "Fragance👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        },
        {
          id: "456-8",
          title: "Eyewear👱🏻‍♂️",
          url: null,
          l3: [{ title: null, url: null, img: null }],
          template: null,
          moreInfo: null
        }
      ]
    }
    // "Men",
    // "The Collection",
    // "Gifts",
    // "Sale"
  ]
};
