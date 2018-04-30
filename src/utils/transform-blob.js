const capitalizeWords = (words) => {
  const wordParts = words.trim().split(" ");
  return wordParts.map(word => {
    const [upper, ...rest] = [...word];
    const lower = rest.map(letter => letter.toLowerCase()).join("");
    return `${upper}${lower}`;
  }).join(" ");
};

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
    title: capitalizeWords("TRENDS LINK"),
    url: null,
    template: "trends",
    l3: transformedL3s
  }
}

const getRamdomMedia = () => {
  const colors = ["bada55", "00ffff", "663399", "339966", "669933"];
  const numberOfMedia = Math.round(Math.random() * 2);
  let media = [];
  for(let i = 0; i < numberOfMedia; i ++) {
    const color = Math.round(Math.random() * colors.length);
    media = [
      ...media,
      {
        src: `http://via.placeholder.com/330x266/${colors[color]}`,
        href: "http://www.michaelkors.com",
        title: `slot ${Math.round(Math.random() * 10000)}`
      }
    ];
  }
  return media;
}

const transformL2Data = ({ id, name: title, seo, template, childCategories: l3s, hasFilter}) => {
  const transformedL3s = l3s.map(l3 => transformL3Data(l3));
  return {
    id,
    title: capitalizeWords(title),
    url: formatUrl(seo),
    template: null,
    l3: transformedL3s,
    hasFilter,
    media: getRamdomMedia()
  };
};

const transformL3Data = ({id, name: title, seo}) => {
  return {
    id,
    title: capitalizeWords(title),
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
       title: capitalizeWords(category.name),
       l2: getL2Data(l2, trends, id)
      };
  });
  return stepOne;
};

export {
  transformData
}