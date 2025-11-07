export default function Timeline() {
  const phases = [
    { id: 1, title: "Phase 1 — Setup & Planning", desc: "Project scaffolding, tech stack alignment and database schema planning.", items: ["Folder structure", "Tech stack setup", "API plan & ER diagram"] },
    { id: 2, title: "Phase 2 — Auth & Roles", desc: "JWT auth with role-based dashboards for Admin, HR, Manager and Employee.", items: ["Login & Signup", "Protected routes", "Role-based UI"] },
    { id: 3, title: "Phase 3 — Employee Module", desc: "Manage employee profiles, departments, salary and work history.", items: ["Employee CRUD", "Profile pages", "List & filters"] },
    { id: 4, title: "Phase 4 — Projects & Tasks", desc: "Create projects, assign teams and track progress with tasks.", items: ["Project CRUD", "Task assignment", "Status tracking"] },
    { id: 5, title: "Phase 5 — Leave & Attendance", desc: "Leave requests, approvals and attendance calendar.", items: ["Apply/Approve", "Attendance views"] },
    { id: 6, title: "Phase 6 — Performance", desc: "Feedback, KPIs and appraisal workflows.", items: ["Reviews", "KPIs & ratings"] },
    { id: 7, title: "Phase 7 — Reports & Analytics", desc: "Dashboards for HR/Admin with charts and insights.", items: ["Attendance heatmaps", "Performance graphs", "Dept stats"] },
    { id: 8, title: "Phase 8 — QA & Launch", desc: "Testing, deployment and documentation.", items: ["Testing report", "Hosted URL", "User guide"] },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <h3 className="text-2xl font-semibold text-slate-800 md:text-3xl">Implementation timeline</h3>
      <p className="mt-2 max-w-2xl text-slate-600">A pragmatic breakdown of phases to deliver BizFlow end-to-end.</p>
      <ol className="mt-8 space-y-6">
        {phases.map((p, idx) => (
          <li key={p.id} className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.items.map((i) => (
                    <li key={i} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
