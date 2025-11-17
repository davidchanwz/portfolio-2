// Google Analytics event tracking utilities
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Track resume download event
export const trackResumeDownload = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'engagement',
      event_label: 'resume_pdf',
      description: 'User downloaded resume PDF'
    });
  }
};

// Track LinkedIn profile visit
export const trackLinkedInClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: 'linkedin_profile',
      description: 'User clicked LinkedIn profile link'
    });
  }
};

// Track GitHub profile visit
export const trackGitHubClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: 'github_profile',
      description: 'User clicked GitHub profile link'
    });
  }
};

// Track project link clicks
export const trackProjectClick = (projectName: string, linkType: 'github' | 'live') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'project_link',
      event_label: `${projectName}_${linkType}`,
      description: `User clicked ${linkType} link for ${projectName}`
    });
  }
};

// Track contact interactions
export const trackContactClick = (method: 'email' | 'linkedin') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      event_category: 'engagement',
      event_label: `contact_${method}`,
      description: `User initiated contact via ${method}`
    });
  }
};

// Track section navigation
export const trackSectionNavigation = (sectionName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigate', {
      event_category: 'navigation',
      event_label: `section_${sectionName}`,
      description: `User navigated to ${sectionName} section`
    });
  }
};