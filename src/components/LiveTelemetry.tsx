import React from "react";

// Types for GitHub Events API
interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: { message: string }[];
    ref_type?: string;
    action?: string;
  };
}

// Map event types to readable actions
function formatEventAction(event: GitHubEvent): string {
  switch (event.type) {
    case "PushEvent":
      return `Pushed ${event.payload.commits?.length || 1} commit(s)`;
    case "CreateEvent":
      return `Created ${event.payload.ref_type || "repository"}`;
    case "WatchEvent":
      return "Starred repository";
    case "PullRequestEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Updated"} pull request in`;
    case "IssuesEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Closed"} issue in`;
    default:
      return "Active in";
  }
}

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default async function LiveTelemetry() {
  let events: GitHubEvent[] = [];
  let error = false;

  try {
    // Fetch directly during build time. We add cache: 'no-store' to ensure 
    // the build process always grabs the absolute latest data when the cron job runs.
    const res = await fetch("https://api.github.com/users/hexa325/events/public", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
    const data = await res.json();
    
    // Filter out uninteresting events and grab the top 5
    events = data
      .filter((e: GitHubEvent) => 
        ["PushEvent", "CreateEvent", "PullRequestEvent", "IssuesEvent"].includes(e.type)
      )
      .slice(0, 5);
      
  } catch (e) {
    console.error("Telemetry Fetch Error:", e);
    error = true;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 p-6 relative overflow-hidden group">
      {/* Brutalist Decoration */}
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
        Live_Telemetry // Automated
      </div>
      <div className="absolute bottom-4 right-4 text-black/10 dark:text-white/10 opacity-50 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      </div>

      <h3 className="font-mono text-sm uppercase mb-4 opacity-50 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        GitHub Activity Stream
      </h3>

      {error ? (
        <p className="font-mono text-xs text-red-500 uppercase tracking-tighter">SYSTEM_OFFLINE: Connection to GitHub Telemetry could not be established.</p>
      ) : events.length === 0 ? (
        <p className="font-mono text-xs opacity-50 uppercase tracking-tighter">Awaiting new data transmissions...</p>
      ) : (
        <ul className="space-y-3 relative z-10">
          {events.map((event) => (
            <li key={event.id} className="font-mono text-sm border-l-2 border-black/20 dark:border-white/20 pl-4 py-1 hover:border-blue-600 dark:hover:border-blue-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="opacity-40 text-xs w-16 uppercase tracking-tighter">{timeAgo(event.created_at)}</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight">
                  {formatEventAction(event)}
                </span>
                <span className="truncate opacity-80 uppercase tracking-tight">{event.repo.name.replace("hexa325/", "")}</span>
              </div>
              {/* If it's a push event, show the last commit message */}
              {event.type === "PushEvent" && event.payload.commits && event.payload.commits[0] && (
                <p className="text-xs opacity-50 mt-1 truncate max-w-lg font-mono">
                  "{event.payload.commits[0].message.split('\n')[0]}"
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
