export const formatViews = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  }
  return num.toString();
};

export const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
