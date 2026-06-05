export function MeshBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-[#050A0F]">
      <div
        className="absolute -top-[20%] left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,200,255,0.06), transparent 60%)",
          animation: "mesh-drift-a 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -bottom-[15%] -left-[10%] h-[70vh] w-[70vh] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,71,255,0.04), transparent 60%)",
          animation: "mesh-drift-b 24s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}
