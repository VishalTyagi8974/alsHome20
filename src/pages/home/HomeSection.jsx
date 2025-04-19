import { useEffect, useRef } from "react";

export default function SoftBlobGradient() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const vibrantColors = [
            "#91B5D7A6", // Soft Blue
            "#9966FFA6", // Light Purple
            "#b8c6f1A6", // Pale Blue
            "#cdb8ffA6", // Pale Purple
            "#e0ccffA6", // Extra light purple
            "#D1E8FFB3"  // Very soft sky blue
        ];


        function hexToRgb(hex) {
            const bigint = parseInt(hex.replace("#", ""), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return { r, g, b };
        }

        function interpolateColor(c1, c2, factor) {
            return {
                r: Math.round(c1.r + (c2.r - c1.r) * factor),
                g: Math.round(c1.g + (c2.g - c1.g) * factor),
                b: Math.round(c1.b + (c2.b - c1.b) * factor),
            };
        }

        const blobs = Array.from({ length: 7 }).map(() => {
            const start = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
            let end = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
            while (end === start) {
                end = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
            }

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                r: 180 + Math.random() * 180,
                dx: 1 + Math.random() * 1.5,
                dy: 1 + Math.random() * 1.5,
                angle: Math.random() * Math.PI * 2,
                speed: 0.003 + Math.random() * 0.005,
                startColor: hexToRgb(start),
                endColor: hexToRgb(end),
                colorProgress: 0,
                colorDirection: 1
            };
        });

        function draw() {
            ctx.clearRect(0, 0, width, height);

            blobs.forEach((blob) => {
                blob.x += Math.cos(blob.angle) * blob.dx;
                blob.y += Math.sin(blob.angle) * blob.dy;
                blob.angle += blob.speed;

                blob.colorProgress += 0.005 * blob.colorDirection;
                if (blob.colorProgress >= 1 || blob.colorProgress <= 0) {
                    blob.colorDirection *= -1;
                }

                const { r, g, b } = interpolateColor(
                    blob.startColor,
                    blob.endColor,
                    blob.colorProgress
                );

                const gradient = ctx.createRadialGradient(
                    blob.x,
                    blob.y,
                    0,
                    blob.x,
                    blob.y,
                    blob.r
                );

                gradient.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
                ctx.fill();

                // Wrap around screen
                if (blob.x < -blob.r) blob.x = width + blob.r;
                if (blob.y < -blob.r) blob.y = height + blob.r;
                if (blob.x > width + blob.r) blob.x = -blob.r;
                if (blob.y > height + blob.r) blob.y = -blob.r;
            });

            requestAnimationFrame(draw);
        }

        draw();

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className="canvasSize" >
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    filter: "blur(80px)",
                    opacity: 0.95,
                }}
            />
        </div>
    );

}
