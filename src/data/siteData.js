// PLACEHOLDER CONTENT — replace with real labs/projects once details are provided.
export const projects = [
  {
    title: "Enterprise Campus Network Design",
    icon: "IconTopologyStar3",
    blurb:
      "Multi-VLAN campus topology built in Packet Tracer/GNS3 with inter-VLAN routing, an OSPF backbone, and redundancy via STP and HSRP.",
    impact:
      "Modeled a resilient campus network with segmented traffic and no single point of failure at the distribution layer.",
    stack: ["VLAN", "OSPF", "STP", "HSRP", "Packet Tracer"],
    links: [{ href: "https://github.com/Nebil1", label: "Code" }],
  },
  {
    title: "Site-to-Site IPSec VPN Lab",
    icon: "IconShieldLock",
    blurb:
      "Two-site lab connecting a branch office to HQ over an IPSec VPN tunnel, with NAT, ACL-based filtering, and failover testing.",
    impact:
      "Verified secure, encrypted branch connectivity with tested failover under simulated link loss.",
    stack: ["IPSec", "VPN", "NAT", "ACL", "Cisco IOS"],
    links: [{ href: "https://github.com/Nebil1", label: "Code" }],
  },
  {
    title: "Network Automation Toolkit",
    icon: "IconTerminal2",
    blurb:
      "Python scripts using Netmiko to back up switch/router configs and audit VLAN assignments across a lab device fleet.",
    impact:
      "Cut manual config-backup and audit time by automating repetitive CLI tasks across multiple devices.",
    stack: ["Python", "Netmiko", "Ansible", "Bash"],
    links: [{ href: "https://github.com/Nebil1", label: "Code" }],
  },
];

export const skills = {
  "Routing & Switching": ["VLANs & Trunking", "OSPF", "BGP Fundamentals", "STP", "EtherChannel", "Subnetting/VLSM"],
  "Security": ["ACLs", "Site-to-Site IPSec VPN", "Cisco ASA Basics", "NAT/PAT", "Network Hardening"],
  "Cloud & Virtualization": ["Azure Virtual Network", "AWS VPC Fundamentals", "Hyper-V", "GNS3 / EVE-NG / Packet Tracer"],
  "Automation & Monitoring": ["Python (Netmiko)", "Ansible Fundamentals", "Wireshark", "Bash / PowerShell"],
};

export const certs = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/cc9cfe964debdf50" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak-8001/credentials/fa4d6e1cd6c91345" },
  { name: "Microsoft Azure Data Fundamentals (DP-900)", year: "2025", link: "https://learn.microsoft.com/en-us/users/nebilyisehak/credentials/FEEA319601CF1496" },
  { name: "IBM Python for Data Science, AI & Development", year: "2024", link: "https://coursera.org/share/06a51f143eb881dae965d3bb8c759e47" },
  { name: "ALX Software Engineering Program", year: "2023", link: "https://savanna.alxafrica.com/certificates/8CpRyXGh3J" },
  { name: "Cisco Network Security", year: "2023", link: "https://coursera.org/share/c778c96d41fa9264c09c5b7f1c3fff90" },
];

export const websites = [
  {
    title: "Ethiopian Space Science Society",
    url: "https://membership.ethiosss.org/",
    description: "Official website for the Ethiopian Space Science Society, promoting space science education and research in Ethiopia.",
    impact:
      "Launched a production membership experience with improved organization visibility and digital outreach."
  },
];

export const featured = [
  { label: "Microsoft" },
  { label: "Udacity" },
  { label: "IBM Skills" },
  { label: "ALX / Holberton" },
  { label: "Hugging Face" },
];

export const contact = {
  email: "nebilyk@gmail.com",
  github: "https://github.com/Nebil1",
  linkedin: "https://www.linkedin.com/in/nebilyisehak/",
};
