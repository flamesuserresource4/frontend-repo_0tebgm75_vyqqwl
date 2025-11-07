import { Users, Briefcase, CheckSquare, CalendarDays, BarChart3, Shield, Clock, Star } from "lucide-react";

const features = [
  { icon: Users, title: "User & Role Management", desc: "Admin, HR, Manager and Employee roles with secure access control." },
  { icon: Briefcase, title: "Employee Information", desc: "Profiles, departments, salary and work history in one system." },
  { icon: CheckSquare, title: "Projects & Tasks", desc: "Create projects, assign tasks, and track status with ease." },
  { icon: Clock, title: "Time Tracking", desc: "Log hours and generate timesheets for billing and payroll." },
  { icon: CalendarDays, title: "Leave & Attendance", desc: "Apply, approve and track company-wide attendance calendars." },
  { icon: Star, title: "Performance & Appraisals", desc: "Run reviews, capture feedback and track KPIs over time." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Interactive dashboards across departments and teams." },
  { icon: Shield, title: "Security & Audit", desc: "SSO-ready with activity logs and audit trails built-in." },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <h3 className="text-center text-2xl font-semibold text-slate-800 md:text-3xl">All the modules you need</h3>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
        A complete enterprise hub combining HR workflows with project execution.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-3 text-sm font-semibold text-slate-800">{f.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            <div className="mt-3 text-xs font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">Learn more →</div>
          </div>
        ))}
      </div>
    </section>
  );
}
