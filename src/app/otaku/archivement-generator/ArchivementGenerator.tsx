"use client";

import {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";

type ProgressType = "進捗達成" | "目標達成" | "挑戦完了";

const progressTypes: Array<{label: ProgressType; color: string}> = [
    {label: "進捗達成", color: "#fcfc00"},
    {label: "目標達成", color: "#f582f5"},
    {label: "挑戦完了", color: "#fcfc00"},
];

const canvasWidth = 640;
const canvasHeight = 128;

function drawDefaultIcon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    const cell = size / 8;
    const pixels = [
        "00033000",
        "00344300",
        "03455430",
        "34566543",
        "03455430",
        "00344300",
        "00033000",
        "00000000",
    ];
    const colors: Record<string, string> = {
        "3": "#2aa7c9",
        "4": "#55d9ff",
        "5": "#d8ffff",
        "6": "#ffffff",
    };

    pixels.forEach((row, rowIndex) => {
        [...row].forEach((pixel, colIndex) => {
            const color = colors[pixel];
            if (!color) {
                return;
            }
            ctx.fillStyle = color;
            ctx.fillRect(x + colIndex * cell, y + rowIndex * cell, cell, cell);
        });
    });
}

function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    fontSize: number,
    color: string,
) {
    const families = "\"GNU Unifont\", monospace";
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    ctx.font = `${fontSize}px ${families}`;
    ctx.fillText(text, x, y);
}

async function loadCanvasFont() {
    if ("fonts" in document) {
        await document.fonts.load("28px \"GNU Unifont\"");
        await document.fonts.ready;
    }
}

export function ArchivementGenerator() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const iconRef = useRef<HTMLImageElement | null>(null);
    const iconUrlRef = useRef<string | null>(null);
    const [title, setTitle] = useState("石器時代");
    const [progressType, setProgressType] = useState<ProgressType>("進捗達成");
    const [downloadUrl, setDownloadUrl] = useState("");

    const draw = useCallback(async () => {
        await loadCanvasFont();

        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const currentType = progressTypes.find((type) => type.label === progressType) ?? progressTypes[0];
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = "#100f0e";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "#2c2c2c";
        ctx.fillRect(4, 4, canvasWidth - 8, canvasHeight - 8);
        ctx.fillStyle = "#0b0b0b";
        ctx.fillRect(8, 8, canvasWidth - 16, canvasHeight - 16);
        ctx.fillStyle = "#1f1f1f";
        ctx.fillRect(12, 12, canvasWidth - 24, canvasHeight - 24);
        ctx.strokeStyle = "#585858";
        ctx.lineWidth = 4;
        ctx.strokeRect(14, 14, canvasWidth - 28, canvasHeight - 28);

        const iconX = 28;
        const iconY = 28;
        const iconSize = 72;

        if (iconRef.current?.complete) {
            ctx.drawImage(iconRef.current, iconX, iconY, iconSize, iconSize);
        } else {
            drawDefaultIcon(ctx, iconX, iconY, iconSize);
        }

        const textSize = 28;
        drawText(ctx, currentType.label, 124, 28, textSize, currentType.color);
        drawText(ctx, title || "実績名", 124, 68, textSize, "#ffffff");

        setDownloadUrl(canvas.toDataURL("image/png"));
    }, [progressType, title]);

    useEffect(() => {
        void draw();
    }, [draw]);

    useEffect(() => {
        return () => {
            if (iconUrlRef.current) {
                URL.revokeObjectURL(iconUrlRef.current);
            }
        };
    }, []);

    const handleIconChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            iconRef.current = null;
            void draw();
            return;
        }

        if (iconUrlRef.current) {
            URL.revokeObjectURL(iconUrlRef.current);
        }

        const image = new Image();
        const url = URL.createObjectURL(file);
        iconUrlRef.current = url;
        image.onload = () => {
            iconRef.current = image;
            void draw();
        };
        image.src = url;
    };

    return (
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(280px,360px)_1fr]">
            <form className="neu-surface flex flex-col gap-5 rounded-md p-5">
                <label className="flex flex-col gap-2 text-sm font-semibold text-text-default">
                    Icon Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleIconChange}
                        className="rounded-md bg-primary px-3 py-2 text-sm text-text-default file:mr-3 file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-primary"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-text-default">
                    Archivement Title
                    <input
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        maxLength={40}
                        className="rounded-md border border-white/10 bg-primary px-3 py-2 text-base text-text-default outline-none focus:border-secondary"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-text-default">
                    Archivement Type
                    <select
                        value={progressType}
                        onChange={(event) => setProgressType(event.target.value as ProgressType)}
                        className="rounded-md border border-white/10 bg-primary px-3 py-2 text-base text-text-default outline-none focus:border-secondary"
                    >
                        {progressTypes.map((type) => (
                            <option key={type.label} value={type.label}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </label>

                <a
                    href={downloadUrl}
                    download="minecraft-archivement.png"
                    className="neu-surface neu-pressable rounded-md px-4 py-3 text-center text-sm font-semibold text-text-default no-underline"
                >
                    Download PNG
                </a>
            </form>

            <div className="flex min-w-0 flex-col gap-4">
                <div className="overflow-x-auto rounded-md bg-[#0f0f0f] p-4">
                    <canvas
                        ref={canvasRef}
                        width={canvasWidth}
                        height={canvasHeight}
                        className="h-auto max-w-full [image-rendering:pixelated]"
                    />
                </div>
                <p className="m-0 text-sm text-text-secondary">
                    Font: GNU Unifont 17.0.05 / SIL Open Font License 1.1
                </p>
            </div>
        </div>
    );
}
