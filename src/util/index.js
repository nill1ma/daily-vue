import moment from "moment";

export const getBrokenDate = (date) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

export const checkStatus = (start, end) => {
    if (moment().isAfter(moment(end))) return "closed";
    return moment().isBetween(moment(start), moment(end)) ? "progrss" : "open";
};