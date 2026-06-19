export function MeshBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-white">
      <div
        className="absolute -top-[25%] left-1/2 h-[85vh] w-[85vh] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,154,226,0.18), transparent 60%)",
          animation: "mesh-drift-a 22s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -bottom-[20%] -left-[10%] h-[75vh] w-[75vh] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,191,99,0.14), transparent 60%)",
          animation: "mesh-drift-b 26s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,154,226,0.10), transparent 60%)",
          animation: "mesh-drift-a 30s ease-in-out infinite alternate",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] bg-grid"
        style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 80%)" }}
      />
    </div>
  );
}
