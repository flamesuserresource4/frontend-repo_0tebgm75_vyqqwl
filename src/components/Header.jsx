import { LayoutDashboard, Shield, Users, Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800">BizFlow</h1>
              <p className="text-xs text-slate-500">Enterprise Employee & Project Management</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="h-4 w-4" />
              <span className="text-sm">HR</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm">Projects</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Security</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
