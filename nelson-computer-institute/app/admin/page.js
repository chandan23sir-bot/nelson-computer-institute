"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className="erp">
      {/* SIDEBAR */}
      <aside className={`erpSidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="erpBrand">
          <div className="erpLogo">NCI</div>
          <div>
            <strong>NELSON COMPUTER</strong>
            <small>INSTITUTE</small>
          </div>
        </div>

        <div className="branchBox">
          <div className="branchIcon">N</div>
          <div>
            <b>NELSON COMPUTER INSTITUTE</b>
            <small>ADMIN / BRANCH</small>
          </div>
        </div>

        <div className="sideSearch">
          🔍 <span>Search menu...</span>
        </div>

        <div className="sideLabel">WORKSPACE</div>

        <nav className="sideNav">
          <a className="selected" href="/admin">▣ <span>Dashboard</span></a>
          <a href="#profile">● <span>My Profile</span></a>
          <a href="#staff">♟ <span>Staff & HR</span><b>›</b></a>
          <a href="#students">♙ <span>Students</span><b>›</b></a>
          <a href="#academics">▣ <span>Academics</span><b>›</b></a>
          <a href="#courses">▰ <span>Learning Centre</span><b>›</b></a>
          <a href="#classes">▤ <span>Live Classes</span></a>
          <a href="#exam">▣ <span>Online Exam</span></a>
          <a href="#results">◆ <span>Results & Awards</span></a>
          <a href="#reports">▤ <span>Reports</span></a>
          <a href="#finance">₹ <span>Finance</span></a>
        </nav>

        <div className="sideBottom">
          <span>⚙</span>
          <span>✉</span>
          <span>⏻</span>
        </div>
      </aside>

      {/* MAIN */}
      <section className="erpMain">

        {/* TOP BAR */}
        <header className="erpTop">
          <button
            className="menuButton"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="location">
            📍
            <div>
              <small>ACTIVE WORKSPACE</small>
              <b>Nelson Computer Institute</b>
            </div>
            <span>⌄</span>
          </div>

          <div className="globalSearch">
            🔍
            <input
              placeholder="Search student, mobile, reg no, receipt..."
            />
            <kbd>/</kbd>
          </div>

          <div className="topActions">
            <button>♟ Students</button>
            <button>▣ Marksheets</button>
            <button className="feeButton">₹ Fees</button>
            <button>⌕</button>
            <button>🔔</button>
            <button>☾</button>

            <div className="wallet">
              <small>WALLET BALANCE</small>
              <b>₹ -2,484,037.92</b>
            </div>

            <div className="userCircle">N</div>
          </div>
        </header>

        {/* PAGE TITLE */}
        <div className="pageHeading">
          <div>
            <h1>Dashboard</h1>
            <p>Sales / Retail overview</p>
          </div>

          <div className="breadcrumb">
            Home &nbsp;›&nbsp; Dashboard
          </div>
        </div>

        {/* WELCOME */}
        <section className="welcome">
          <div>
            <h2>Welcome back, 👋</h2>
            <p>
              Nelson Computer Institute is ready. Search students, watch
              collections, clear pending work and open common actions without
              leaving your workspace.
            </p>
          </div>

          <div className="dateBox">
            📅 &nbsp; 20 Sep 2026
          </div>
        </section>

        {/* STATS */}
        <section className="statsRow">

          <StatCard
            icon="🎓"
            number="272"
            label="TOTAL STUDENTS"
            sub="240 active"
            type="blue"
          />

          <StatCard
            icon="₹"
            number="₹0"
            label="TODAY'S COLLECTION"
            sub="₹400 this month"
            type="green"
          />

          <StatCard
            icon="♟"
            number="0"
            label="ADMISSIONS TODAY"
            sub="0 this month"
            type="orange"
          />

          <StatCard
            icon="📚"
            number="0"
            label="PENDING MARKSHEETS"
            sub="117 due installments"
            type="purple"
          />

        </section>

        {/* GRAPH + DUES */}
        <section className="dashboardGrid">

          <div className="panel collectionPanel">
            <div className="panelHeader">
              <div>
                <h3>6-Month Collection & Admissions</h3>
                <small>Quick trend of fees and new students</small>
              </div>

              <button>Full report</button>
            </div>

            <div className="legend">
              <span>□ Collection</span>
              <span>□ Admissions</span>
            </div>

            <div className="chart">
              <div className="yAxis">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>

              <div className="chartArea">
                <div className="gridLine one"></div>
                <div className="gridLine two"></div>
                <div className="gridLine three"></div>
                <div className="gridLine four"></div>
                <div className="gridLine five"></div>

                <svg
                  viewBox="0 0 700 260"
                  preserveAspectRatio="none"
                  className="chartSvg"
                >
                  <polyline
                    points="0,170 140,250 280,40 420,250 560,40 700,250"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <polyline
                    points="0,250 140,250 280,250 420,250 560,250 700,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle cx="0" cy="170" r="4" />
                  <circle cx="140" cy="250" r="4" />
                  <circle cx="280" cy="40" r="4" />
                  <circle cx="420" cy="250" r="4" />
                  <circle cx="560" cy="40" r="4" />
                  <circle cx="700" cy="250" r="4" />
                </svg>

                <div className="months">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>

          {/* DUES */}
          <div className="panel duesPanel">
            <div className="panelHeader">
              <div>
                <h3>Highest Visible Dues</h3>
                <small>Recent students with outstanding fees</small>
              </div>

              <button>Due report</button>
            </div>

            <Due name="RAJINDER SINGH" amount="₹23,500" />
            <Due name="HIMANSHU KUMAR" amount="₹22,500" />
            <Due name="NARENDRA KUMAR" amount="₹19,500" />
            <Due name="SAURABH KUMAR" amount="₹15,000" />
            <Due name="PUCHI" amount="₹15,000" />
            <Due name="MONIKA" amount="₹15,000" />
          </div>

        </section>

        {/* BOTTOM PANELS */}
        <section className="bottomGrid">

          <div className="panel">
            <div className="panelHeader">
              <div>
                <h3>Payment Mode Mix</h3>
                <small>This month's Cash / Transfer / Online / Cheque collection</small>
              </div>
            </div>

            <div className="paymentBoxes">
              <div>
                <span>💵</span>
                <b>Cash</b>
                <strong>₹0</strong>
              </div>

              <div>
                <span>🏦</span>
                <b>Bank Transfer</b>
                <strong>₹0</strong>
              </div>

              <div>
                <span>💳</span>
                <b>Online</b>
                <strong>₹0</strong>
              </div>

              <div>
                <span>🧾</span>
                <b>Cheque</b>
                <strong>₹0</strong>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panelHeader">
              <div>
                <h3>Top Course Collection</h3>
                <small>This month</small>
              </div>

              <button>Fee report</button>
            </div>

            <div className="courseRow">
              <span>📘</span>
              <div>
                <b>DIPLOMA IN AUTOCAD WITH 3DS MAX</b>
                <small>Monthly collection</small>
              </div>
              <strong>₹400</strong>
            </div>

            <div className="courseRow">
              <span>📗</span>
              <div>
                <b>ADCA</b>
                <small>Monthly collection</small>
              </div>
              <strong>₹0</strong>
            </div>

            <div className="courseRow">
              <span>📕</span>
              <div>
                <b>DCA</b>
                <small>Monthly collection</small>
              </div>
              <strong>₹0</strong>
            </div>
          </div>

        </section>

      </section>
    </main>
  );
}


/* STAT CARD */
function StatCard({ icon, number, label, sub, type }) {
  return (
    <div className={`statCard ${type}`}>
      <div className="statIcon">{icon}</div>

      <div>
        <strong>{number}</strong>
        <b>{label}</b>
        <small>{sub}</small>
      </div>
    </div>
  );
}


/* DUE */
function Due({ name, amount }) {
  return (
    <div className="dueRow">
      <div className="studentAvatar">♟</div>

      <div>
        <b>{name}</b>
        <small>NCI-2026 · WhatsApp</small>
      </div>

      <strong>{amount}</strong>
    </div>
  );
}
