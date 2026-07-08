import { useState } from 'react';
import { AppContext } from './appContextDef';

const mockApprovals = [
  {
    id: 1,
    platform: 'Google',
    customerName: 'Alex Mercer',
    rating: 2,
    originalReview: "The product works okay but the customer service was terrible. I had to wait 3 days for a simple response to my email.",
    aiResponse: "Hi Alex, we sincerely apologize for the delay in our customer service response and for the frustration this has caused you. We are currently experiencing a high volume of inquiries, but we are actively working on improving our response times. Please reach out to us directly at support@example.com with your ticket number so we can make this right.",
    sentiment: 'negative',
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    platform: 'Trustpilot',
    customerName: 'Jessica T.',
    rating: 5,
    originalReview: "Absolutely love the new features! It has saved my team so much time. Highly recommend.",
    aiResponse: "Hi Jessica! Thank you so much for the 5-star review. We're thrilled to hear that the new features are saving your team time. Your recommendation means the world to us! Let us know if there's anything else we can do for you.",
    sentiment: 'positive',
    timeAgo: '4 hours ago'
  },
  {
    id: 3,
    platform: 'Facebook',
    customerName: 'David Chen',
    rating: 3,
    originalReview: "It's a decent tool, but the pricing is a bit steep for small businesses. Might switch next month.",
    aiResponse: "Hi David, thank you for your feedback. We understand that pricing is an important factor for small businesses. We'd love to learn more about your specific needs and see if we have a plan that better fits your budget. Could you send us a DM so we can discuss this further?",
    sentiment: 'neutral',
    timeAgo: '5 hours ago'
  }
];

export const AppProvider = ({ children }) => {
  const [approvals, setApprovals] = useState(mockApprovals);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pendingCount = approvals.length;

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <AppContext.Provider value={{
      approvals,
      setApprovals,
      pendingCount,
      sidebarOpen,
      toggleSidebar,
      closeSidebar,
    }}>
      {children}
    </AppContext.Provider>
  );
};
