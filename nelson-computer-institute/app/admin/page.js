import Link from "next/link";

export default function Admin() {
  return <main className="adminPage">
    <header className="adminTop"><div><b>NELSON COMPUTER INSTITUTE</b><span>Admin Dashboard</span></div><Link href="/">View Website</Link></header>
    <div className="adminBody">
      <aside>
        <h3>Admin Menu</h3>
        <Link href="/admin">Dashboard</Link>
        <a href="#students">Students</a>
        <a href="#fees">Fees</a>
        <a href="#courses">Courses</a>
        <a href="#reports">Reports</a>
      </aside>
      <section className="dashboard">
        <h1>Dashboard</h1>
        <div className="stats">
          <div><span>👨‍🎓</span><b>Students</b><strong>0</strong></div>
          <div><span>📝</span><b>Admissions</b><strong>0</strong></div>
          <div><span>💰</span><b>Fee Collection</b><strong>₹0</strong></div>
          <div><span>📚</span><b>Courses</b><strong>6</strong></div>
        </div>
        <div className="panel">
          <h2>Quick Actions</h2>
          <div className="quick">
            <button>Add Student</button><button>Collect Fee</button><button>Add Course</button><button>Generate Report</button>
          </div>
        </div>
        <div className="panel">
          <h2>Student Management</h2>
          <p>Add, search and manage admissions, fees, attendance, results and certificates. Database API routes are included in this starter project.</p>
        </div>
      </section>
    </div>
  </main>
}
