import toTitleCase from "@/utils/titlecase";

function GenrePage({ params }: { params: { genre: string } }) {
  return (
    <>
      <h3 className="font-bold text-xl">{toTitleCase(params.genre)}</h3>
      <div className="grid grid-cols-3 gap-3">
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">b</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
        <div className="w-full bg-slate-700 h-40">a</div>
      </div>
    </>
  );
}

export default GenrePage;
