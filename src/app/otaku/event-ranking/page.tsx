import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "イベラン | kernel of horizon2k38",
    description: "イベント参加記録とランキング結果",
};

type EventRecord = {
    month: string;
    title: string;
    result: string;
    href?: string;
};

const events: EventRecord[] = [
    {
        month: "2025-07",
        title: "ミリシタ8周年記念イベント 超々∞MUGEND@I!",
        result: "萩原雪歩48位・総合?位",
        href: "https://x.com/spectr0gram/status/1944235464053207482",
    },
    {
        month: "2026-07",
        title: "ミリシタ9周年記念イベント 最上級：Invit@tion!",
        result: "萩原雪歩3位・総合69位",
        href: "https://x.com/spectr0gram/status/2076509941628825901",
    },
    {
        month: "2026-10",
        title: "プラチナスターチューン～ライラックにつつまれて～",
        result: "26位",
        href: "https://x.com/spectr0gram/status/2108441381475893752",
    },
];

export default function EventRankingPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">イベラン</h1>
            <div className="mx-auto max-w-2xl">
                <ul className="mt-4 flex list-none flex-col gap-4 p-0">
                    {events.map((event) => {
                        const Card = event.href ? "a" : "div";

                        return (
                            <li key={event.month}>
                                <Card
                                    href={event.href}
                                    className={`neu-surface block rounded-md p-4 text-text-default no-underline${event.href ? " neu-pressable focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" : ""}`}
                                >
                                    <p className="m-0 text-sm text-text-secondary">
                                        <time dateTime={event.month}>{event.month}</time>
                                        {" · ミリシタ"}
                                    </p>
                                    <h2 className="mb-0 mt-2 text-lg font-semibold text-text-default">
                                        {event.title}
                                    </h2>
                                    <p className="mb-0 mt-2">{event.result}</p>
                                </Card>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
