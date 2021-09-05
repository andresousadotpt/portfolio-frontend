//Get the days 
export const calculateTimeDifference = (startTime: number, endTime: number, text: string): string => {
    const diffInMs: number = Math.abs(startTime - endTime);
    const days: number = Math.ceil(diffInMs / (1000 * 3600 * 24));
    return `${days} ${text}`;
}


