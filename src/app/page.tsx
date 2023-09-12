'use client';

import useDate from "@/swr/date";

function formatToHHMMSS(date: Date | undefined): string {
    if (!date) return '';
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export default function Home() {
    return (
        <main className="">
            <div className="flex justify-center gap-10"
                 style={{minHeight: '100px'}}>
                <div className="border-solid border-2">
                    <p>1秒ごとに更新</p>
                    <Each1s/>
                </div>
                <div className="border-solid border-2">
                    <p>2秒ごとに更新</p>
                    <Each2s/>
                </div>
                <div className="border-solid border-2">
                    <p>3秒ごとに更新</p>
                    <Each3s/>
                </div>
                <div className="border-solid border-2">
                    <p>4秒ごとに更新</p>
                    <Each4s/>
                </div>
                <div className="border-solid border-2">
                    <p>5秒ごとに更新</p>
                    <Each5s/>
                </div>
                <div className="border-solid border-2">
                    <p>6秒ごとに更新</p>
                    <Each6s/>
                </div>
            </div>
        </main>
    )
}

const Each1s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each1s)}</p>;
}

const Each2s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each2s)}</p>;
}

const Each3s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each3s)}</p>;
}


const Each4s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each4s)}</p>;
}


const Each5s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each5s)}</p>;
}


const Each6s = () => {
    const {data} = useDate();
    return <p>{formatToHHMMSS(data?.each6s)}</p>;
}
