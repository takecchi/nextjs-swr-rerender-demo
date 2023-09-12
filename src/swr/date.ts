import useSWR from "swr";

const getLastDivisibleTimeInSeconds = (now: number, divisionSeconds: number): number => {
    const currentSeconds = Math.floor(now / 1000);
    if (currentSeconds % divisionSeconds === 0) {
        return currentSeconds * 1000;
    } else {
        const remainder = currentSeconds % divisionSeconds;
        return (currentSeconds - remainder) * 1000;
    }
}

export type Dates = {
    each1s: Date; //1秒毎に更新
    each2s: Date; //2秒毎に更新
    each3s: Date; //3秒毎に更新
    each4s: Date; //4秒毎に更新
    each5s: Date; //5秒毎に更新
    each6s: Date; //6秒毎に更新
}

const fetcher = (): Dates => {
    const now = Date.now();
    // それぞれ各秒数毎に更新される。
    console.log(`LOG::fetched!`);
    return {
        each1s: new Date(getLastDivisibleTimeInSeconds(now, 1)),
        each2s: new Date(getLastDivisibleTimeInSeconds(now, 2)),
        each3s: new Date(getLastDivisibleTimeInSeconds(now, 3)),
        each4s: new Date(getLastDivisibleTimeInSeconds(now, 4)),
        each5s: new Date(getLastDivisibleTimeInSeconds(now, 5)),
        each6s: new Date(getLastDivisibleTimeInSeconds(now, 6))
    };
}

const useDate = () => {
    return useSWR<Dates, Error>('/api/date', fetcher, {refreshInterval: 1000, dedupingInterval: 1000})
}
export default useDate;
