# 2. AI-Powered Customer Review Response Automation

## Tech Stack
- **Automation:** n8n
- **AI:** Claude API
- **Database:** Supabase
- **Frontend:** Next.js
- **Review APIs:** Google Reviews, Trustpilot, Facebook Graph API

## Directory Structure

```
review-response-automation/
├── backend/
│   ├── workers/
│   │   ├── __init__.py
│   │   ├── review_fetcher.py
│   │   ├── sentiment_analyzer.py
│   │   ├── response_generator.py
│   │   └── poster.py
│   │
│   ├── integrations/
│   │   ├── __init__.py
│   │   ├── google_reviews.py
│   │   ├── trustpilot.py
│   │   ├── facebook.py
│   │   ├── claude_api.py
│   │   └── slack_notifier.py
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── review.py
│   │   ├── response.py
│   │   └── approval.py
│   │
│   ├── config.py
│   ├── main.py
│   ├── requirements.txt
│   └── dockerfile
│
├── supabase/
│   ├── migrations/
│   │   ├── 001_create_reviews_table.sql
│   │   ├── 002_create_responses_table.sql
│   │   ├── 003_create_approval_queue.sql
│   │   ├── 004_create_integrations_table.sql
│   │   └── 005_create_sentiment_log.sql
│   └── rls_policies.sql
│
├── n8n-workflows/
│   ├── fetch-google-reviews.json
│   ├── fetch-trustpilot-reviews.json
│   ├── analyze-sentiment.json
│   ├── generate-responses.json
│   ├── approval-gate.json
│   ├── post-responses.json
│   └── escalate-negative.json
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── ReviewFeed.tsx
│   │   │       ├── SentimentBreakdown.tsx
│   │   │       ├── ResponseMetrics.tsx
│   │   │       └── ReviewTrends.tsx
│   │   │
│   │   ├── approval-queue/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── ApprovalCard.tsx
│   │   │       ├── ResponsePreview.tsx
│   │   │       ├── SentimentIndicator.tsx
│   │   │       └── ApprovalActions.tsx
│   │   │
│   │   ├── integrations/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── IntegrationCard.tsx
│   │   │       ├── GoogleReviewsSetup.tsx
│   │   │       ├── TrustpilotSetup.tsx
│   │   │       └── FacebookSetup.tsx
│   │   │
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── ResponseTemplates.tsx
│   │   │       ├── ToneSettings.tsx
│   │   │       └── NotificationPreferences.tsx
│   │   │
│   │   └── api/
│   │       ├── reviews/
│   │       │   ├── route.ts
│   │       │   └── [id]/route.ts
│   │       ├── responses/
│   │       │   ├── route.ts
│   │       │   └── [id]/route.ts
│   │       └── approve/
│   │           └── route.ts
│   │
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── api-client.ts
│   │   ├── utils/
│   │   │   ├── sentiment-colors.ts
│   │   │   └── formatters.ts
│   │   └── types.ts
│   │
│   ├── components/
│   │   └── shared/
│   │       ├── Navbar.tsx
│   │       ├── Sidebar.tsx
│   │       └── ReviewCard.tsx
│   │
│   ├── .env.local
│   └── package.json
│
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── N8N_WORKFLOWS.md
│
└── .gitignore
```
