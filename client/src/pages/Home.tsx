import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, GitCommit, Search, User, Code2, Zap } from "lucide-react";

/**
 * GitHub Connector Demo - Modern Developer-First Minimalism
 * Design: Clean, professional interface showcasing GitHub CLI capabilities
 * Colors: Charcoal (#0d1117) + White + GitHub Orange (#f85149)
 * Typography: IBM Plex Mono (headings), Inter (body)
 */

export default function Home() {
  const userInfo = {
    login: "armandsl",
    name: "M A Zuha",
    company: "ZuhaWorld Social Impact",
    location: "Bangladesh",
    followers: 8,
    following: 16,
    publicRepos: 49,
    avatar: "https://avatars.githubusercontent.com/u/38503380?v=4",
  };

  const repositories = [
    {
      name: "armandsl.github.io",
      description: "GitHub Profile Site!",
      stars: 1,
      updated: "2026-04-11",
    },
    {
      name: ".github",
      description: "This is my profile repo.",
      stars: 1,
      updated: "2026-04-11",
    },
    {
      name: "proof-html",
      description: "A GitHub Action to validate HTML, check links, and more ✅",
      stars: 0,
      updated: "2026-02-01",
    },
  ];

  const searchResults = [
    {
      name: "FoundationAgents/OpenManus",
      description: "No fortress, purely open ground. OpenManus is Coming.",
      stars: 55864,
    },
    {
      name: "OthmanAdi/planning-with-files",
      description: "Claude Code skill implementing Manus-style persistent markdown planning",
      stars: 19292,
    },
    {
      name: "OpenManus/OpenManus-RL",
      description: "A live stream development of RL tunning for LLM agents",
      stars: 3994,
    },
  ];

  const recentActivity = [
    {
      type: "PushEvent",
      repo: "zuhasite/zuhaworld-green-heaven",
      timestamp: "2026-04-22T03:06:29Z",
      branch: "main",
    },
    {
      type: "PushEvent",
      repo: "zuhasite/zuhaworld-green-heaven",
      timestamp: "2026-04-22T02:55:36Z",
      branch: "main",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">GitHub Connector</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#capabilities" className="text-foreground hover:text-primary transition-colors">
              Capabilities
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663584030831/fhn5C5iQXmuhFkoc2VHLXa/github-hero-bg-LMXZPeo856PprYsydQZwxs.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              GitHub CLI Connector
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A powerful demonstration of GitHub connector capabilities, showcasing real-time data fetching, repository management, and user activity tracking through the GitHub CLI.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Features
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section id="demo" className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12">Authenticated User Profile</h2>
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img
                    src={userInfo.avatar}
                    alt={userInfo.name}
                    className="w-16 h-16 rounded-lg border border-border"
                  />
                  <div>
                    <CardTitle className="text-2xl">{userInfo.name}</CardTitle>
                    <CardDescription className="text-base">@{userInfo.login}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Authenticated
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Public Repos</p>
                  <p className="text-2xl font-bold text-foreground">{userInfo.publicRepos}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Followers</p>
                  <p className="text-2xl font-bold text-foreground">{userInfo.followers}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Following</p>
                  <p className="text-2xl font-bold text-foreground">{userInfo.following}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-semibold text-foreground">{userInfo.location}</p>
                </div>
              </div>
              <p className="text-foreground mt-6">
                <span className="text-muted-foreground">Company:</span> {userInfo.company}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Repository Listing */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4">Recent Repositories</h2>
          <p className="text-muted-foreground mb-12">
            The connector retrieves repository information including name, description, stargazer count, and last update time.
          </p>
          <div className="grid gap-4">
            {repositories.map((repo, idx) => (
              <Card key={idx} className="border border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-5 h-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{repo.name}</CardTitle>
                        <CardDescription>{repo.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{repo.stars} ⭐</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Updated: {repo.updated}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repository Search */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4">Repository Search</h2>
          <p className="text-muted-foreground mb-12">
            Searching for "manus" yields top repositories with star counts and descriptions.
          </p>
          <div className="grid gap-4">
            {searchResults.map((result, idx) => (
              <Card key={idx} className="border border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{result.name}</CardTitle>
                        <CardDescription>{result.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {result.stars.toLocaleString()} ⭐
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Activity */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4">Recent Activity</h2>
          <p className="text-muted-foreground mb-12">
            Public activity events including push events, forks, and other interactions.
          </p>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <Card key={idx} className="border border-border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GitCommit className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{activity.type}</CardTitle>
                      <CardDescription>{activity.repo}</CardDescription>
                    </div>
                    <Badge variant="secondary">{activity.branch}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {new Date(activity.timestamp).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>User Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure token-based authentication with GitHub, enabling access to user-specific data and repositories.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Repository Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  List, search, and retrieve detailed information about repositories including metadata and activity.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Activity Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor public activity events, push history, and user interactions in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">GitHub Connector</h3>
              <p className="text-muted-foreground text-sm">
                A comprehensive demo showcasing GitHub CLI capabilities for developers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Repository Listing</li>
                <li>Search Functionality</li>
                <li>Activity Tracking</li>
                <li>User Profiles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://cli.github.com" className="hover:text-primary transition-colors">
                    GitHub CLI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 GitHub Connector Demo. Built with React, Tailwind CSS, and GitHub CLI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
