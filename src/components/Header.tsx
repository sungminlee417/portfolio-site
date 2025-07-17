export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <span className="flex items-center justify-center w-24 h-24 rounded-full bg-yellow-400/20 drop-shadow-lg">
        <i className="fa-solid fa-guitar text-yellow-400 text-6xl animate-pulse"></i>
      </span>
      <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-sm">
        Sungmin Lee
      </h1>
      <p className="text-xl text-white/80 italic">
        Software Engineer & Classical Guitarist
      </p>
    </header>
  );
}
