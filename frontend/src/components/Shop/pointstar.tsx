import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const pointStar = (point: number) => {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    starIcons.push(<StarBorderIcon color="primary" />);
  }
  if (!point) {
    return starIcons;
  } else {
    let cnt = 0;
    while (point >= 0.8) {
      starIcons[cnt] = <StarIcon color="primary" />;
      point -= 1;
      cnt++;
    }
    if (point > 0.4) {
      starIcons[cnt] = <StarHalfIcon color="primary" />;
    }
  }
  return starIcons;
};

export default pointStar;
