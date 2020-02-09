export const GA_TRACKING_ID = 'UA-158072901-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (window.gtag) { // only avail in prod
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
