import formatDistanceToNow from "date-fns/formatDistanceToNow";

const dateToNow = (date) => {
    return formatDistanceToNow(Date.parse(date))
}

export default dateToNow