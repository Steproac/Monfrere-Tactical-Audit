# Monfrère Phase 1 Tactical Audit
## Executive Presentation Content

---

### Slide 1: Title Slide
**Headline:** Phase 1 Tactical Audit: True Performance Validation 
**Sub-headline:** Deep-dive logic uniting Shopify source-of-truth with Meta Ads and Awin.
**Presenter:** [Your Name / Agency]
**Visual:** Monfrère Logo (Dark mode aesthetic)

---

### Slide 2: Executive Summary
**Headline:** The Source-of-Truth Transition
**Content:**
- **Objective:** Move away from isolated platform-reported figures (which suffer from double-attribution) and unite Shopify financial data with top-of-funnel ad spend.
- **Engine 1 - Meta Ads:** Analyzing $515K in tracked historical spend to isolate True Blended ROAS (MER) and True Customer Acquisition Cost.
- **Engine 2 - Awin Affiliates:** Cross-referencing 2,305 discount-code orders with Awin incrementality scores to protect margin from aggregators.
- **Key Finding:** While Meta reported lower performance structurally, the True Blended ROAS across the pipeline reveals massive brand traction, unlocking a True Blended ROAS of 6.58x.

---

### Slide 3: True Business Level Metrics (MER)
**Headline:** The Actual Value of the Data Feed
**Content:**
- **True Pipeline Revenue (Shopify):** $3,391,971.96
- **Total Tracked Meta Spend:** $515,778.22
- **True Blended ROAS:** 6.58x *(Total Shopify Rev / Meta Spend)*
- **True CAC (Customer Acquisition Cost):** $73.56
- **Average Customer LTV:** $477.33
**Speaker Notes:** 
*By comparing exact Shopify intake figures against our Meta ad billings, we establish a robust True Blended ROAS of 6.58x. Meta's platform itself claimed almost 42% of these total conversions internally, but applying top-down MER removes algorithmic guesswork.*

---

### Slide 4: Wasted Spend & The "Kill Switch"
**Headline:** Stopping the Bleeding
**Content:**
- Ad accounts can scale only when inefficient ad spend is cut swiftly.
- We analyzed granular ad sets to pinpoint creatives that spent heavily without any conversions.
- **Impact:** We immediately flagged **$22,073.44** in statically wasted Meta spend tied to ads with $0 returns.
- **Action:** Implementing an automated "Kill Switch" rule within Meta Business Manager to pause high-spend, zero-conversion ads at scale.
**Visual Request:** Screenshot of the *Wasted Spend* bar chart from the recently repaired Streamlit dashboard.

---

### Slide 5: Product Level Profitability
**Headline:** Top Performers by Gross Revenue
**Content:**
- We broke down order components to uncover what physically moves the needle, eliminating shipping costs and add-ons from the evaluation.
- The 'Greyson Noir' line heavily dominates customer intent.
- **Top 5 SKUs by Gross Revenue:**
  1. Greyson Noir (32) - $21,639
  2. Greyson Noir (34) - $16,308
  3. Greyson Noir (36) - $15,408
  4. Greyson Noir (31) - $14,428
  5. Greyson Noir (33) - $13,260

---

### Slide 6: Awin Affiliate Diagnostic & Discount Codes
**Headline:** Margin Protection vs Incrementality
**Content:**
- Across the Shopify store setup, 2,305 orders used discount codes, forfeiting **$687,679.95** in gross pipeline revenue.
- We compared those volume surges against our row-level Awin tracking model to compute the **New Customer Acquisition Rate (NCAR)**.
- **The Metric:** `(New Customer Sales / Total Sales) * 100`
- **The Finding:** 11 active affiliate partners consistently generated NCARs below 20% (Harvesters), meaning they predominantly cannibalize checkout flows of returning, high-intent customers.

---

### Slide 7: Recommendations & Next Steps
**Headline:** Action Plan
**Content:**
1. **Reallocate Rescued Budget:** Shift the $22K+ identified as Wasted Spend directly into high-performing active assets mapped out in the Creative Efficiency Matrix.
2. **Cap Checkout Harvesters:** Renegotiate and limit the margin offered to Awin Affiliate partners categorised as Harvesters.
3. **Checkout Optimization:** Recapture the **$64,570.14** in logged Abandoned Checkouts via dynamic lifecycle sequences (Klaviyo/SMS).
4. **Deploy Dashboard:** Leverage the live Streamlit dashboard on an ongoing basis to monitor temporal True CAC and track ad-level decay in real-time.
