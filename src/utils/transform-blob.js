const formatUrl = (urlData, local = "") => {
  let url = null;
  switch (urlData) {
    case (local = "ca_FR" && urlData.externalURL_fr):
      url = urlData.externalURL_fr;
      break;
    case urlData.externalURL:
      url = urlData.externalURL;
      break;
    default:
      url = urlData.url;
  }
  return url;
}

const transformTrends = (trends, id) => {
  const transformedL3s = trends.map(l3 => transformL3Data(l3));
  return {
    id: `${id}-TRENDS`,
    title: "TRENDS",
    url: null,
    template: "trends",
    l3: transformedL3s
  }
}

const transformL2Data = ({ id, name: title, seo, template, childCategories: l3s}) => {
  const transformedL3s = l3s.map(l3 => transformL3Data(l3));
  return {
    id,
    title,
    url: formatUrl(seo),
    template: null,
    l3: transformedL3s,
    media: [{
      src: "http://via.placeholder.com/150",
      href: "http://www.michaelkors.com",
      title: `${id}-slot 1`
    },
    {
      src: "http://via.placeholder.com/150/bada55",
      href: "http://www.michaelkors.com",
      title: `${id}-slot 2`
    }]
  };
};

const transformL3Data = ({id, name: title, seo}) => {
  return {
    id,
    title,
    url: formatUrl(seo)
  }
}

const getL2Data = (l2s, trends, id) => {
  const transformedTends = transformTrends(trends, id);
  const transformedL2s = l2s.map(l2 => transformL2Data(l2))
  return [transformedTends, ...transformedL2s];
};

const transformData = (data) => {
  const catagories = data.filter(category => category.category);
  const stepOne = catagories.map(({ category }) => {
    const { id, seo, childCategories: l2, trendCategories: trends} = category;
    return { id,
       url: formatUrl(seo),
       title: category.name,
       l2: getL2Data(l2, trends, id)
      };
  });
  return stepOne;
};

export {
  transformData
}