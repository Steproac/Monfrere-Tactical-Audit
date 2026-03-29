# Monfrère Tactical Audit Dashboard - Speaker Notes

## Introduction & Setup
*(Action: Open the Streamlit dashboard. Ensure Global Date Filters encompass the full 2023-2026 range).*

**Speaker Notes:**
> "Welcome to the interactive executive summary of the Monfrère Phase 1 Tactical Audit. 
> 
> Rather than just giving you a static slide deck, we built this dashboard to provide a live, comprehensive look at the historical performance of your two core marketing engines: Meta Ads and the Awin Affiliate Program. 
> 
> The beauty of this tool is that we aren't just looking at top-level revenue. We are going to drill down into the row-level data to identify hidden gems, isolate bleeding creatives, and measure true incrementality.
> 
> Notice on the left sidebar: we have a Global Date Filter that syncs across both platforms. We can also filter by specific Meta Creatives or Awin Affiliate Classifications. Let's start with the high-level Meta performance."

---

## 1. Meta Ads Overview (KPIs)
*(Action: Highlight the top 4 metric cards).*

**Speaker Notes:**
> "Looking at the top metrics, we've aggregated your Meta data for the selected period. 
> 
> Here we can see the Total Filtered Spend and the resulting Revenue. Based on this, we've calculated your Blended ROAS and the Benchmark Account Cost Per Acquisition (CPA).
> 
> **Topline Metrics Overview:**
> - **Filtered Spend:** The total ad budget exhausted on Meta for the specific date range and creatives selected in the sidebar.
> - **Filtered Revenue:** The total sales generated directly from that selected spend, calculated either via reported ROAS or estimated Average Order Value (AOV).
> - **Blended ROAS (Return on Ad Spend):** Total Filtered Revenue divided by Total Filtered Spend. This measures the overall efficiency and return for every dollar invested across the selected data scope.
> - **Benchmark Account CPA (Cost Per Acquisition):** Total Filtered Spend divided by total recorded purchases. This acts as our historical baseline cost to acquire a single customer.
> 
> *[Optional context depending on numbers]*: While the top-level ROAS might appear lower than desired, this average is dragged down by specific pockets of inefficiency which we will uncover in a moment."

---

## 2. Performance Trends Over Time (Scale vs. Efficiency)
*(Action: Scroll down to the 'Scale vs. Efficiency' line chart. Hover over a few data points).*

**Speaker Notes:**
> "This chart shows the 7-day rolling average for Spend versus CPA. This visualizes the temporal relationship between push (spend) and pull (efficiency).
> 
> Notice what happens on specific dates where aggressive budget increases occur. For example, looking at **June 23, 2023**, a budget push doubled the 7-day average spend from ~$510 to over $1,050, which caused the CPA to immediately spike from $39 to $75. Similarly, around **November 7, 2023**, pushing spend from ~$575 to $812 caused CPAs to balloon from $223 to $474. 
> 
> We also see this pattern repeated into 2024. On **February 25, 2024**, spend spiked from ~$212 to $955, driving CPA up from $135 to $278. And on **April 27, 2024**, pushing spend from ~$717 to $1,178 raised the CPA from $52 to $97.
> 
> Most recently, on **August 7, 2025**, a relatively small budget increase from ~$305 to $393 caused the CPA to jump significantly from $142 to $197, showing that audience fatigue is still an active, ongoing issue.
>
> We can pinpoint exactly when scaling led to these immediate CPA spikes—which is a strong indicator of audience saturation or creative fatigue.
> 
> The takeaway here is that scaling must be methodical. To maintain efficiency as we scale spend, we have to constantly feed the account fresh, validated creative."

---

## 3. Creative Quadrant Matrix
*(Action: Scroll to 'Efficiency Quadrant'. Hover over a few bubbles—specifically look for bubbles in the top right, bottom right, and top left).*

**Speaker Notes:**
> "Not all spend is created equal. This scatter plot is what we call the Efficiency Quadrant. We mapped your top 50 ads: Spend is on the X-axis, ROAS is on the Y-axis, and bubble size is total spend. The dotted lines represent the median for both metrics.
> 
> This perfectly segments your creatives into four buckets:
> - **Top Right (High Spend, High ROAS):** These are our 'Winners'. They are the core assets carrying the account.
> - **Top Left (Low Spend, High ROAS):** These are the 'Hidden Gems'. They have high potential and are prime candidates for structured budget increases.
> - **Bottom Right (High Spend, Low ROAS):** These are the 'Money Pits'. They've been given significant budget but fail to convert profitably.
> 
> Our immediate action plan involves reallocating budget from the bottom right into the top left."

---

## 4. Wasted Spend ('Kill Switch')
*(Action: Scroll to the Wasted Spend section. Adjust the CPA Failure Multiplier slider slightly to demonstrate interactivity).*

**Speaker Notes:**
> "Speaking of 'Money Pits', let's look at stopping the bleeding. We've deployed a statistical 'Kill Switch' rule.
> 
> Right now, the threshold is set to 3x the Account CPA. This module isolates ads that have spent *more* than three times our target CPA without generating a single purchase. 
> 
> As you can see, the tool automatically calculates the exact dollar amount of completely wasted spend based on this rule. The bar chart shows us exactly which ads are draining the budget.
> 
> *[The Hook]*: Just in this initial tactical pass, we mathematically isolated thousands of dollars burned on inefficient creative. In our Phase 2 retainer, our goal is to plug this exact logic into your Meta API so we have a real-time, automated kill-switch acting 24/7."

---

## 5. Awin Affiliate Diagnostic
*(Action: Scroll to the Awin section. Explain the scatter plot and point out the color coding).*

**Speaker Notes:**
> "Moving over to Engine 2: the Awin Affiliate Program. Traditional reporting focuses on total sales, which hides whether those sales are truly incremental. 
> 
> We audited the raw transaction data to calculate the New Customer Acquisition Rate (NCAR) for every publisher. We classify partners into two buckets:
> - **Planters (Green):** These are content creators and influencers with an NCAR over 50%. They are driving top-of-funnel discovery and bringing in net-new customers.
> - **Harvesters (Red):** These are typically coupon or loyalty sites with an NCAR under 50%. They drive high volume, but almost entirely from returning shoppers seeking a discount at checkout.
> 
> **Next Step:** We strongly recommend restructuring Awin commission payouts. We should pay higher bounties to our 'Planters' to incentivize new acquisition, while capping margins for 'Harvesters' who are just claiming credit for returning customers."
