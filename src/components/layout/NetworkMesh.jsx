import { useEffect, useRef } from "react";

const NODE_COLOR = "136, 146, 176";
const EDGE_COLOR = "100, 255, 218";
const PACKET_COLOR = "62, 224, 138";
const MAX_DIST = 170;
const MAX_PACKETS = 6;

export default function NetworkMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionMedia.matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let packets = [];
    let rafId = null;
    let running = true;

    const camera = { x: 0, y: 0, targetX: 0, targetY: 0 };

    function seedNodes() {
      const area = width * height;
      const count = Math.max(18, Math.min(50, Math.round(area / 24000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
      packets = [];
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    }

    function currentEdges() {
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) edges.push({ a: i, b: j, dist });
        }
      }
      return edges;
    }

    function maybeSpawnPacket(edges) {
      if (packets.length >= MAX_PACKETS || edges.length === 0) return;
      if (Math.random() > 0.02) return;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      packets.push({ a: edge.a, b: edge.b, t: 0, speed: 0.006 + Math.random() * 0.008 });
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      camera.x += (camera.targetX - camera.x) * 0.04;
      camera.y += (camera.targetY - camera.y) * 0.04;

      if (!reduceMotion) {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        });
      }

      const edges = currentEdges();

      ctx.save();
      ctx.translate(camera.x, camera.y);

      edges.forEach(({ a, b, dist }) => {
        const opacity = (1 - dist / MAX_DIST) * 0.16;
        ctx.strokeStyle = `rgba(${EDGE_COLOR}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      });

      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${NODE_COLOR}, 0.35)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduceMotion) {
        maybeSpawnPacket(edges);
        packets = packets.filter((p) => p.t < 1);
        packets.forEach((p) => {
          p.t += p.speed;
          const na = nodes[p.a];
          const nb = nodes[p.b];
          if (!na || !nb) return;
          const x = na.x + (nb.x - na.x) * p.t;
          const y = na.y + (nb.y - na.y) * p.t;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${PACKET_COLOR}, 0.9)`;
          ctx.fillStyle = `rgba(${PACKET_COLOR}, 0.95)`;
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      ctx.restore();

      if (running && !reduceMotion) {
        rafId = requestAnimationFrame(step);
      }
    }

    function handlePointerMove(e) {
      if (reduceMotion) return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      camera.targetX = -nx * 18;
      camera.targetY = -ny * 18;
    }

    function handleVisibility() {
      if (document.hidden) {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        running = true;
        step();
      }
    }

    function handleReduceMotionChange(e) {
      reduceMotion = e.matches;
      step();
    }

    resize();
    step();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("visibilitychange", handleVisibility);
    motionMedia.addEventListener?.("change", handleReduceMotionChange);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionMedia.removeEventListener?.("change", handleReduceMotionChange);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(100,255,218,0.05),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(62,224,138,0.04),transparent_50%)]" />
    </div>
  );
}
