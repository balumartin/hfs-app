export default function ProjectsPage() {
  return (
    <main className="mx-container b-container py-6 px-10 mb-10">
      <div className=" mb-5 flex items-center gap-2 font-bold text-2xl text-slate-700 border-b border-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <h3>Projektek</h3>
      </div>
      <ul className="h-dvh">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </main>
  );
}
