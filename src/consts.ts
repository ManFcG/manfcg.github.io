import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'ManFcG',
  description: 'manfcg blog',
  href: 'https://manfcg.pl/',
  author: 'manfcg',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/manfcg',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/michalhinca',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const PROFILE_LINKS: SocialLink[] = [
  {
    href: 'https://linkedin.com/in/michalhinca',
    label: 'LinkedIn',
  },
  {
    href: 'https://ctftime.org/user/222716',
    label: 'CTFtime',
  },
  {
    href: 'https://tryhackme.com/r/p/manfcg',
    label: 'TryHackMe',
  },
  {
    href: 'https://app.hackthebox.com/profile/497426',
    label: 'HackTheBox',
  },
  {
    href: 'https://github.com/manfcg',
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/manfcg_',
    label: 'Instagram',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  CTFtime: 'custom:ctftime',
  TryHackMe: 'custom:tryhackme',
  HackTheBox: 'custom:hackthebox',
  Instagram: 'lucide:instagram',
}
