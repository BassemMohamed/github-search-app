interface Repo {
  id: string;
  name: string;
  url: string;
  description: string;
  owner: RepoOwner;
}

interface RepoOwner {
  avatarUrl: string;
  login: string;
}

export type { Repo, RepoOwner };
