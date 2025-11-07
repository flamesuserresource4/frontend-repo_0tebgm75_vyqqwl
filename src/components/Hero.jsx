import { Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket className="h-3.5 w-3.5" />
              Built for HR, Managers & Teams
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-800 md:text-5xl">
              Streamline employees, projects, tasks and performance in one place.
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              BizFlow combines HR workflows with project and task execution. Track time, manage leaves and run performance reviews with actionable analytics.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                Explore Demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                View Roadmap
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <span>Role-based access</span>
              <span>SSO Ready</span>
              <span>Audit Trails</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="font-medium text-slate-700">Employees</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">237</p>
                  <p className="mt-1 text-[11px] text-emerald-600">+12 this month</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="font-medium text-slate-700">Active Projects</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">18</p>
                  <p className="mt-1 text-[11px] text-emerald-600">+3 this week</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="font-medium text-slate-700">On Leave Today</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">7</p>
                  <p className="mt-1 text-[11px] text-amber-600">peak season</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="font-medium text-slate-700">Avg. KPI</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">82</p>
                  <p className="mt-1 text-[11px] text-emerald-600">+4 vs last qtr</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-indigo-200/40 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-pink-200/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
