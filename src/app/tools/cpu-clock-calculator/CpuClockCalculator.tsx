"use client";

import {useMemo, useState} from "react";

type FrequencyUnit = "Hz" | "kHz" | "MHz" | "GHz";

const frequencyMultipliers: Record<FrequencyUnit, number> = {
    Hz: 1,
    kHz: 1e3,
    MHz: 1e6,
    GHz: 1e9,
};

function formatNumber(value: number, maximumFractionDigits = 6) {
    return new Intl.NumberFormat("ja-JP", {
        maximumFractionDigits,
    }).format(value);
}

function formatDuration(seconds: number) {
    const units = [
        {symbol: "s", scale: 1},
        {symbol: "ms", scale: 1e3},
        {symbol: "µs", scale: 1e6},
        {symbol: "ns", scale: 1e9},
        {symbol: "ps", scale: 1e12},
    ];

    const unit = units.find(({scale}) => seconds * scale >= 1) ?? units[units.length - 1];
    return `${formatNumber(seconds * unit.scale)} ${unit.symbol}`;
}

function formatConvertedDuration(value: number) {
    if (value !== 0 && (Math.abs(value) < 1e-6 || Math.abs(value) >= 1e12)) {
        return value.toExponential(6);
    }

    return formatNumber(value, 9);
}

export function CpuClockCalculator() {
    const [frequency, setFrequency] = useState("3.5");
    const [frequencyUnit, setFrequencyUnit] = useState<FrequencyUnit>("GHz");
    const [cycles, setCycles] = useState("1000000");

    const result = useMemo(() => {
        const frequencyValue = Number(frequency);
        const cyclesValue = Number(cycles);
        const frequencyHz = frequencyValue * frequencyMultipliers[frequencyUnit];

        if (!Number.isFinite(frequencyHz) || frequencyHz <= 0 || !Number.isFinite(cyclesValue) || cyclesValue < 0) {
            return null;
        }

        return cyclesValue / frequencyHz;
    }, [cycles, frequency, frequencyUnit]);

    return (
        <div className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-2">
            <div className="neu-surface flex flex-col gap-5 rounded-md p-5">
                <fieldset className="flex flex-col gap-2">
                    <legend className="mb-2 text-sm font-semibold text-text-default">CPU Clock</legend>
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                        <input
                            type="number"
                            min="0"
                            step="any"
                            inputMode="decimal"
                            value={frequency}
                            onChange={(event) => setFrequency(event.target.value)}
                            aria-label="CPU clock frequency"
                            className="min-w-0 rounded-md border border-white/10 bg-primary px-3 py-2 text-text-default outline-none focus:border-secondary"
                        />
                        <select
                            value={frequencyUnit}
                            onChange={(event) => setFrequencyUnit(event.target.value as FrequencyUnit)}
                            aria-label="CPU clock frequency unit"
                            className="rounded-md border border-white/10 bg-primary px-3 py-2 text-text-default outline-none focus:border-secondary"
                        >
                            {(Object.keys(frequencyMultipliers) as FrequencyUnit[]).map((unit) => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </fieldset>

                <label className="flex flex-col gap-2 text-sm font-semibold text-text-default">
                    Clock Cycles
                    <input
                        type="number"
                        min="0"
                        step="1"
                        inputMode="numeric"
                        value={cycles}
                        onChange={(event) => setCycles(event.target.value)}
                        className="rounded-md border border-white/10 bg-primary px-3 py-2 text-text-default outline-none focus:border-secondary"
                    />
                </label>

                <p className="m-0 text-sm text-text-secondary">
                    Execution time = Clock cycles ÷ Clock frequency
                </p>
            </div>

            <div className="neu-surface flex flex-col justify-center rounded-md p-6">
                <h2 className="m-0 text-lg font-semibold text-text-default">Execution Time</h2>
                {result !== null ? (
                    <>
                        <output className="mt-3 text-4xl font-bold text-secondary" aria-live="polite">
                            {formatDuration(result)}
                        </output>
                        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                            <dt className="text-text-secondary">ns</dt>
                            <dd className="text-right">{formatConvertedDuration(result * 1e9)} ns</dd>
                            <dt className="text-text-secondary">µs</dt>
                            <dd className="text-right">{formatConvertedDuration(result * 1e6)} µs</dd>
                            <dt className="text-text-secondary">ms</dt>
                            <dd className="text-right">{formatConvertedDuration(result * 1e3)} ms</dd>
                            <dt className="text-text-secondary">s</dt>
                            <dd className="text-right">{formatConvertedDuration(result)} s</dd>
                        </dl>
                    </>
                ) : (
                    <p className="mb-0 mt-3 text-text-secondary" aria-live="polite">
                        Enter a positive clock frequency and a non-negative number of cycles.
                    </p>
                )}
            </div>
        </div>
    );
}
