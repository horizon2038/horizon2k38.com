import type {Metadata} from "next";
import {CpuClockCalculator} from "./CpuClockCalculator";

export const metadata: Metadata = {
    title: "CPU Clock Calculator | kernel of horizon2k38",
    description: "Calculate execution time from CPU clock frequency and clock cycles",
};

export default function CpuClockCalculatorPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">CPU Clock Calculator</h1>
            <CpuClockCalculator />
        </div>
    );
}
