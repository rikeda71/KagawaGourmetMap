import React from "react";
import { DateType } from "./shop";

import GraySunday from "../../assets/gray-sunday.png";
import GrayMonday from "../../assets/gray-monday.png";
import GrayTuesday from "../../assets/gray-tuesday.png";
import GrayWednesday from "../../assets/gray-wednesday.png";
import GrayThursday from "../../assets/gray-thursday.png";
import GrayFriday from "../../assets/gray-friday.png";
import GraySaturday from "../../assets/gray-saturday.png";
import SecondarySunday from "../../assets/secondary-sunday.png";
import SecondaryMonday from "../../assets/secondary-monday.png";
import SecondaryTuesday from "../../assets/secondary-tuesday.png";
import SecondaryWednesday from "../../assets/secondary-wednesday.png";
import SecondaryThursday from "../../assets/secondary-thursday.png";
import SecondaryFriday from "../../assets/secondary-friday.png";
import SecondarySaturday from "../../assets/secondary-saturday.png";

const weekIcons = (times: Array<DateType>) => {
    const weekNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const grayIcons = [GraySunday, GrayMonday, GrayTuesday, GrayWednesday, GrayThursday, GrayFriday, GraySaturday];
    const secondaryIcons = [SecondarySunday, SecondaryMonday, SecondaryTuesday, SecondaryWednesday, SecondaryThursday, SecondaryFriday, SecondarySaturday];
    const icons = Object.assign([], grayIcons);
    if (!times) {return weekIcons;}
    times.forEach((time) => {
        let i = weekNames.indexOf(time.day);
        icons[i] = secondaryIcons[i];
    })
    return icons.map((icon) => {return <WeekIcon icon={icon} />});
}

export const WeekIcon: React.FC<{icon: any}> = (props) => {
    return (
        <img src={props.icon} width={30} height={30} />
    )
}

export default weekIcons;